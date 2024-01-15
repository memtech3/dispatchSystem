export default defineAppConfig({
  ui: {
    primary: 'blue',
    gray: 'cool',
    table: {
      thead: 'bg-gray-50 dark:bg-gray-700',
      tbody: '',
      tr: {
        base: 'bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600',
        selected: '',
        active: '',
      },
      th: {
        color: '',
      },
      td: {
        color: '',
      },
    },
  },
})
