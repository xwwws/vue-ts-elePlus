<script lang="ts" setup>
import { ref, computed, defineProps, useSlots, toRaw } from 'vue'
import type { TableProps } from 'element-plus'

const slots = useSlots()
console.log(slots)
defineOptions({
  name: 'ComTable',
})

interface Column<T = unknown> {
  label: string
  prop: keyof T | string
  slot: string
  columnProps: any
}
defineEmits(['handlePageChange', 'handleSizeChange'])

interface Props<T> {
  columns: Column<T>[]
  tableData: T[]
  pageSize: number
  total: number
  currentPage: number
  tableProps?: TableProps<T>
  isShowPagination?: boolean
}

withDefaults(defineProps<Props<T>>(),{
  isShowPagination: true
})

</script>

<template>
  <div>
    <el-table :data="tableData" style="width: 100%" v-bind="tableProps">
      <el-table-column
        v-for="column in columns"
        :key="column.prop"
        :prop="column.prop"
        :label="column.label"
        v-bind="{
          ...column.columnProps,
        }"
      >
        <template v-if="$slots[column.prop]" #default="{ row, $index }">
          <slot :name="column.prop" :row="toRaw(row)" :index="$index" />
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      v-if="isShowPagination"
      background
      layout="prev,pager,next,total,sizes"
      :total="total"
      :page-size="pageSize"
      @size-change="(size) => $emit('handleSizeChange', size)"
      @current-change="(page) => $emit('handlePageChange', page)"
      :current-page="currentPage"
    />
  </div>
</template>
