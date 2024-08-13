import { Command, CommandList } from './commandCore'

function handlerFunction(args: string[]): Error | boolean {
  console.log('Handler function called with arguments ', args)
  return true
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
