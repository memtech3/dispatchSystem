<script setup lang="ts">
import { computed } from 'vue'
import InputText from '@/components/Common/InputText.vue' // Import the InputText component
import 'bootstrap-icons/font/bootstrap-icons.css'
interface Column {
  key: string
  label: string
}

interface Row {
  id: number
}

const props = defineProps<{
  id: string
  columns: Column[]
  rows: Row[]
}>()

// TODO: make sure I'm using events properly. Currently
// the rows are updated in the parent component even though
// I haven't implemented an event handler in the parent
const emit = defineEmits<{
  (e: 'rowsUpdated', value: Row[]): void
}>()

const editedRows = computed({
  get() {
    return props.rows
  },

  set(newValues: Row[]) {
    emit('rowsUpdated', newValues)
  }
})
</script>
<template>
  <div class="col-3">
    <button @click="editedRows.push({})" class="btn btn-primary btn-sm">Add</button>
    <table class="table table-sm">
      <thead>
        <tr>
          <th></th>
          <th v-for="column in columns" :key="column.key">{{ column.label }}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in editedRows" :key="row.id">
          <td>
            <input type="checkbox" />
          </td>
          <td v-for="column in columns" :key="column.key">
            <InputText :id="`${row.id}-${column.key}`" v-model="row[column.key]" />
          </td>
          <td>
            <div class="d-flex gap-2">
              <button class="btn btn-sm btn-outline-primary">
                <i class="bi bi-pencil-square"></i>
              </button>
              <button
                @click="editedRows.splice(editedRows.indexOf(row), 1)"
                class="btn btn-sm btn-outline-danger"
              >
                <i class="bi bi-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
