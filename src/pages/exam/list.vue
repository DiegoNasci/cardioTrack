<template lang="pug">
div
  div.q-mt-lg
    .row.justify-between.bd-bottom
      div
        .col-8.col-sm-6.q-ml-xl.q-mb-sm
          .q-subheading Exames>Listar
      div
        .col-8.col-sm-6.q-mr-xl
          .q-subheading Atalho 
            q-toggle(v-model="check" color="blue-7")
  .flex.flex-center.q-ml-lg.q-mr-lg
    q-table.inp-col.q-mt-xl.flex.flex-center(
    :data="tableData"
    :columns="columns"
    row-key="name")
</template>
<style scoped>
.bd-bottom{
  border-bottom: 2px solid #6D6D6D;
  margin: 0 20px 0;
}
.inp-col{
  max-width: 1000px;
}
</style>
<script>
export default {
  data: () => ({
    check: false,
    columns: [
      {
        name: 'code',
        required: true,
        label: 'Cod.',
        align: 'left',
        field: 'code',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        name: 'name',
        required: true,
        label: 'Exame',
        align: 'left',
        field: 'name',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
    ],
    tableData: [
      {
        code: '1',
        name: 'ECG'
      },
      {
        code: '2',
        name: 'Medicação'
      },
      {
        code: '3',
        name: 'Trombólise'
      },
      {
        code: '4',
        name: 'Internação'
      },
      {
        code: '5',
        name: 'Revascularização'
      },
    ]
  })
}
</script>
