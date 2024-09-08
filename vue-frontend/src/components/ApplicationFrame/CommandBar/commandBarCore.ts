import { computed } from 'vue'
import { useConsoleStateStore } from '@/stores/consoleState'
import type { Command } from '@/composables/newCommands'
import { invokeCommand } from '@/composables/newCommands'

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
  mapArgsToCommand: (args: string[]) => Command

  constructor(
    name: string,
    aliases: string[],
    argTypes: Argument[],
    mapArgsToCommand: (args: string[]) => Command
  ) {
    this.name = name
    this.aliases = aliases
    this.argTypes = argTypes
    this.mapArgsToCommand = mapArgsToCommand
  }
}

export class CommandList {
  private commandBarCmds: CommandBarCmd[]

  constructor(commandBarCmds: CommandBarCmd[]) {
    this.commandBarCmds = commandBarCmds
  }

  runCommand(tokens: string[]): void {
    const commandBarCmd = this.commandBarCmds.find(
      (commandBarCmd) =>
        commandBarCmd.name === tokens[0] || commandBarCmd.aliases.includes(tokens[0])
    )
    if (commandBarCmd) {
      invokeCommand(commandBarCmd.mapArgsToCommand(tokens.slice(1)))
    } else {
      console.log(tokens.join('.'), 'error', 'command not found')
    }
  }

  getCommands(): CommandBarCmd[] {
    return this.commandBarCmds
  }
}
