<template>
  <div class="about">
    about
    <ComTable
      :columns="columns"
      :tableData="tableData"
      :total="232"
    >
      <template #address="scope">
        <el-button @click="showNameSlotScope(scope)"> nameSlotBtn</el-button>
      </template>
      <template #action="scope">
        <el-button @click="showNameSlotScope(scope)"> actionbtn</el-button>
      </template>
    </ComTable>
  </div>
</template>

<style></style>
<script setup lang="ts">
import ComTable from '@/components/ComTable/index.vue'
import { ref } from 'vue'

const columns = ref([
  {
    label: 'Name',
    prop: 'name',
    slot: 'nameSlot',
  },
  {
    label: 'Age',
    prop: 'age',
    slot: 'age',
  },
  {
    label: 'address',
    prop: 'address',
    slot: 'address',
  },
  {
    label: 'action',
    prop: 'action',
    slot: 'action',
  }
])
interface ITable {
  name: string
  age: number
}
const tableData = ref<ITable[]>([
  { name: "张三", age: 10 },
  { name: "张三", age: 10 },
  { name: "张三", age: 10 },
  { name: "张三", age: 10 },
])
const showNameSlotScope = (scope) => {
  console.log(scope)
}
</script>
