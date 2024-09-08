import { computed } from 'vue'
import { useConsoleStateStore } from '@/stores/consoleState'

const consoleStateStore = computed(() => {
  return useConsoleStateStore()
})

export type Argument = {
  name: string
  required: boolean
}

export class CommandBarCmd {
  name: string
  aliases: string[]
  argTypes: Argument[]
  execute: (args: string[]) => void

  constructor(
    name: string,
    aliases: string[],
    argTypes: Argument[],
    execute: (args: string[]) => void
  ) {
    this.name = name
    this.aliases = aliases
    this.argTypes = argTypes
    this.execute = execute
  }
}

export class CommandList {
  private commands: CommandBarCmd[]

  constructor(commands: CommandBarCmd[]) {
    this.commands = commands
  }

  runCommand(tokens: string[]): void {
    const command = this.commands.find(
      (command) => command.name === tokens[0] || command.aliases.includes(tokens[0])
    )
    if (command) {
      command.execute(tokens.slice(1))
    } else {
      console.log(tokens.join('.'), 'error', 'command not found')
    }
  }

  getCommands(): CommandBarCmd[] {
    return this.commands
  }
}
