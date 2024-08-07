export type Argument = {
  name: string
  description: string
  required: boolean
  position: number
}

export type Command = {
  name: string
  description: string
  aliases: string[]
  arguments: Argument[]
}
export const commands: Command[] = [
  {
    name: 'New Event',
    description: 'Creates a new event',
    aliases: ['n', 'newevent'],
    arguments: [
      {
        name: 'Location',
        description: 'Location of event',
        required: true,
        position: 1
      },
      {
        name: 'type',
        description: 'Event type',
        required: true,
        position: 2
      }
    ]
  },
  {
    name: 'Select Event',
    description: '',
    aliases: ['s', 'selectevent'],
    arguments: [
      {
        name: 'Event ID',
        description: '',
        required: true,
        position: 1
      }
    ]
  },
  {
    name: 'New Field Initiated Event',
    description: '',
    aliases: ['nfe', 'newfieldevent'],
    arguments: [
      {
        name: 'Event ID',
        description: '',
        required: true,
        position: 1
      }
    ]
  }
]
