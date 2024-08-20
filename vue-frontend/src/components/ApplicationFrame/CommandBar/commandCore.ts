export type Argument = {
  name: string
  required: boolean
}

export class Command {
  name: string
  aliases: string[]
  argTypes: Argument[]
  handler: (args: string[]) => Error | boolean

  constructor(
    name: string,
    aliases: string[],
    argTypes: Argument[],
    handler: (args: string[]) => Error | boolean
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
      command.handler(tokens.slice(1))
    } else {
      console.log('Command not found')
    }
  }

  getCommands(): Command[] {
    return this.commands
  }
}
