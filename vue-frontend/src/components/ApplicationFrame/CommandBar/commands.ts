export type Argument = {
  name: string
  description: string
  required: boolean
}

function handlerFunction(args: string[]): Error | boolean {
  console.log('Handler function called with arguments ', args)
  return true
}

class Command {
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

  run(): void {
    this.handler([])
  }
}

class CommandList {
  private _commands: Command[]

  constructor(commands: Command[]) {
    this._commands = commands
  }

  runCommand(tokens: string[]): void {
    const command = this._commands.find(
      (command) => command.name === tokens[0] || command.aliases.includes(tokens[0])
    )
    if (command) {
      command.handler(tokens.slice(1))
    } else {
      console.log('Command not found')
    }
  }

  getCommands(): Command[] {
    return this._commands
  }
}

const commands: Command[] = [
  new Command(
    'New Event',
    ['ne', 'newevent'],
    [
      {
        name: 'Location',
        description: 'Location of event',
        required: true
      },
      {
        name: 'type',
        description: 'Event type',
        required: true
      }
    ],
    (args: string[]) => handlerFunction(args)
  ),
  new Command(
    'Select Event',
    ['se', 'selectevent'],
    [{ name: 'Event ID', description: 'ID of event to select', required: true }],
    handlerFunction
  ),
  new Command(
    'New Field Initiated Event',
    ['nfe', 'newfieldevent'],
    [
      {
        name: 'Unit',
        description: 'Unit initiating field initiated event',
        required: true
      },
      {
        name: 'Location',
        description: 'Location of event',
        required: true
      },
      {
        name: 'type',
        description: 'Event type',
        required: true
      }
    ],
    handlerFunction
  )
]

export const commandList = new CommandList(commands)
