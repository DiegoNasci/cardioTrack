<template lang="pug">
div
  div.q-mt-lg
    .row.justify-between.bd-bottom
      div
        .col-8.col-sm-6.q-ml-md.q-mb-sm
          .q-subheading BAMs>Listar
      div
        .col-8.col-sm-6.q-mr-md
          .q-subheading Atalho 
            q-toggle(v-model="check" color="blue-7")
  .flex.flex-center.q-ml-lg.q-mr-lg
    q-table.inp-col.q-mt-xl.flex.flex-center(:data="tableData" :columns="columns" row-key="name")
      q-tr(slot="body" slot-scope="props" :props="props"  @click.native="rowClick(props.row)" class="cursor-pointer")
        q-td(v-for="col in props.cols" :key="col.name" :props="props")
          |{{ col.value }}
</template>
<style scoped>
.bd-bottom{
  border-bottom: 2px solid #6D6D6D;
  margin: 0 20px 0;
}
.inp-col{
  max-width: 1000px;
  min-width: 370px;
}
</style>
<script>
export default {
  data: () => ({
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
        name: 'patient',
        required: true,
        label: 'Paciente',
        align: 'left',
        field: 'patient',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        name: 'medic',
        required: true,
        label: 'Médico',
        align: 'left',
        field: 'medic',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        name: 'fase',
        required: true,
        label: 'Fase',
        align: 'left',
        field: 'fase',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        name: 'status',
        required: true,
        label: 'Status',
        align: 'left',
        field: 'status',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
    ],
    tableData: [
      {
        code: '1',
        patient: '1 - Benedito',
        medic: '1 - Diego',
        fase: 'ECG - 00:03:50',
        status: 'FINALIZADO'
      },
      
    ]
  }),
  methods: {
    rowClick (row) {
      this.$router.push('bamsListTime')
    }
  }
}
</script>
