<template lang="pug">
div
  div.q-mt-lg
    .row.justify-between.bd-bottom
      div
        .col-8.col-sm-6.q-ml-xl.q-mb-sm
          .q-subheading Usuarios>Listar
      div
        .col-8.col-sm-6.q-mr-xl
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
    check: true,
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
        name: 'matricula',
        required: true,
        label: 'Matrícula',
        align: 'left',
        field: 'matricula',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        name: 'username',
        required: true,
        label: 'Nome',
        align: 'left',
        field: 'username',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        name: 'cargo',
        required: true,
        label: 'Cargo',
        align: 'left',
        field: 'cargo',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      {
        name: 'email',
        required: true,
        label: 'Email',
        align: 'left',
        field: 'email',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
    ],
    tableData: [
      {
        code: '1',
        matricula: 201410332,
        username: 'Diego',
        cargo: 'Medico',
        email: 'diego@gmail.com'
      },
    ]
  }),
  methods: {
    rowClick (row) {
      this.$router.push('userEdit')
    }
  }
}
</script>