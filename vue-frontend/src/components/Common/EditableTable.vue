<script setup lang="ts">
import { ref } from 'vue'
import InputText from '@/components/Common/InputText.vue' // Import the InputText component
import 'bootstrap-icons/font/bootstrap-icons.css'
const model = defineModel()
interface Column {
  key: string
  label: string
}

interface Row {
  id: number
}

defineProps<{
  id: string
  columns: Column[]
  rows: Row[]
}>()
</script>
<template>
  <div class="col-3">
    <button @click="rows.push({})" class="btn btn-primary btn-sm">Add</button>
    <table class="table table-sm">
      <thead>
        <tr>
          <th></th>
          <th v-for="column in columns" :key="column.key">{{ column.label }}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.id">
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
              <button class="btn btn-sm btn-outline-danger">
                <i class="bi bi-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
