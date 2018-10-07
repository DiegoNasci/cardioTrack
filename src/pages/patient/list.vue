<template lang="pug">
div
  div.q-mt-lg
    .row.justify-between.bd-bottom
      div
        .col-8.col-sm-6.q-ml-xl.q-mb-sm
          .q-subheading Pacientes>Listar
      div
        .col-8.col-sm-6.q-mr-xl
          .q-subheading Atalho 
            q-toggle(v-model="checked" color="blue-7")
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
        name: 'cpf',
        required: true,
        label: 'CPF',
        align: 'left',
        field: 'cpf',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        name: 'nome',
        required: true,
        label: 'Nome',
        align: 'left',
        field: 'nome',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        name: 'date',
        required: true,
        label: 'Data de Nascimento',
        align: 'left',
        field: 'date',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
    ],
    tableData: [
      {
        code: '1',
        cpf: '111.111.111-00',
        nome: 'Pedro',
        date: '31/02/2000'
      }
    ]
  }),
  methods: {
    rowClick (row) {
      this.$router.push('patientEdit')
    }
  }
}
</script>
