<!--
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-12-08 16:38:07
 * @LastEditors: 十三
 * @LastEditTime: 2022-12-08 16:38:10
-->
<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="date"
      label="Date"
      width="180"
    />
    <el-table-column
      prop="name"
      label="Name"
      width="180"
    />
    <el-table-column
      prop="address"
      label="Address"
    />
  </el-table>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
];
</script>
