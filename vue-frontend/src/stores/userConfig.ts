import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { SerializedDockview } from 'dockview-vue'

export type SavedLayout = {
  id: number
  name: string
  layoutObject: SerializedDockview
}

export const useUserConfigStore = defineStore('userConfig', () => {
  const savedLayouts = ref(Array<SavedLayout>())
  return { savedLayouts }
})
