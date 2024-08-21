import { computed } from 'vue'
import { useConsoleStateStore } from '@/stores/consoleState'

const consoleStateStore = computed(() => {
  return useConsoleStateStore()
})

export type Argument = {
  name: string
  required: boolean
}

export class Command {
  name: string
  aliases: string[]
  argTypes: Argument[]
  handler: (args: string[]) => void | Error

  constructor(
    name: string,
    aliases: string[],
    argTypes: Argument[],
    handler: (args: string[]) => void | Error
  ) {
    this.name = name
    this.aliases = aliases
    this.argTypes = argTypes
    this.handler = handler
  }
}

export class CommandList {
  private commands: Command[]

  constructor(commands: Command[]) {
    this.commands = commands
  }

  runCommand(tokens: string[]): void {
    const command = this.commands.find(
      (command) => command.name === tokens[0] || command.aliases.includes(tokens[0])
    )
    if (command) {
      const output: void | Error = command.handler(tokens.slice(1))
      if (output instanceof Error) {
        consoleStateStore.value.addCommandOutput(tokens.join('.'), 'error', output.message)
      } else {
        consoleStateStore.value.addCommandOutput(tokens.join('.'), 'type', 'success')
      }
    } else {
      console.log('Command not found')
    }
  }

  getCommands(): Command[] {
    return this.commands
  }
}
