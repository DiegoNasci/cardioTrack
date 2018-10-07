<template lang="pug">
div
  div.q-mt-lg
    .row.justify-between.bd-bottom
      div
        .col-8.col-sm-6.q-ml-md.q-mb-sm
          .q-subheading BAMs>Listar>1
      div
        .col-8.col-sm-6.q-mr-md
          .q-subheading Atalho 
            q-toggle(v-model="check" color="blue-7")
  .flex.flex-center.q-ml-lg.q-mr-lg
    div.q-ml-xl.cad-pat
      h5.q-mb-md Boletim de Atendimento Médico
      .row 
        .col-10.col-md-2.q-mb-sm.q-mr-lg
          q-input(v-model="bam.code" stack-label="Código" type="number" :disable="true")
        .col-10.col-md-3.q-mb-sm.q-mr-lg
          q-input(v-model="bam.admission" stack-label="Admissão" :disable="true")
      .row
        .col-10.col-md-2.q-mb-sm.q-mr-lg
          q-input(v-model="bam.codPatient" stack-label="Cod. Paciente" type="number" :disable="true")
        .col-10.col-md-6.q-mb-sm.q-mr-lg
          q-input(v-model="bam.namePatient" stack-label="Paciente" :disable="true")
        .col-10.col-md-2.q-mb-sm.q-mr-lg
          q-input(v-model="bam.datePatient" stack-label="Data de Nascimento" :disable="true")
        .col-10.col-md-2.q-mb-sm.q-mr-lg
          q-input(v-model="bam.codMedic" stack-label="Cod. Médico" type="number" :disable="true")
        .col-10.col-md-8.q-mb-sm.q-mr-lg
          q-input(v-model="bam.nameMedic" stack-label="Médico" :disable="true")
      .row
        .col-10.col-md-4.q-mb-sm.q-mr-lg
          center
            div.bg-grey.fase.q-pa-sm
              |{{ bam.fase }}
    q-table.q-mt-xl.q-mr-sm.q-ml-sm.q-mb-md.cad-pat(:data="tableData" :columns="columns" row-key="code")
      // q-tr(slot="body" slot-scope="props" :props="props")
      q-td(slot="body-cell-action" slot-scope="props" :props="props")
        q-btn(v-if="!check(props.row.code)" size="sm" color="green" @click="time(props.row.code, true)" label="Iniciar")
        q-btn(v-if="check(props.row.code)" size="sm" color="red" @click="time(props.row.code, false)" label="Parar")
        
        

        //- q-td(key="code" :props="props")
        //-   |{{ props.row.code }}
        //- q-td(key="name" :props="props")
        //-   |{{ props.row.name }}
        //- q-td(key="inicio" :props="props")
        //-   |{{ props.row.inicio }}
        //- q-td(key="fim" :props="props")
        //-   |{{ props.row.fim }}
        //- q-td(key="total" :props="props")
        //-   |{{ props.row.total }}
        //- q-td(key="action" :props="props")
        //-   .row.items-center.justify-between.no-wrap
        //-     q-btn(v-if="verificarAcao(props.row.code, true)" size="sm" :color="color" @click="time" label="Iniciar")
        //-     q-btn(v-else="verificarAcao(props.row.code, false)" size="sm" :color="color" @click="time" label="Parar")

  div.flex.flex-center.justify-center
    .cad-pat
      .row.justify-center
        .col-md-4.q-mb-sm.q-mr-lg
          q-btn.bg-info.text-white(label="Alta" @click="alta")
        .col-md-4.q-mb-sm.q-mr-lg
          q-btn.bg-primary.text-white(label="Óbito" @click="obito")
</template>
<style scoped>
.bd-bottom{
  border-bottom: 2px solid #6D6D6D;
  margin: 0 20px 0;
}
.inp-col{
  max-width: 1000px;
}
.fase{
  border-radius: 4px;
  color: white;
  font-size: 20px
}
.cad-pat{
  max-width: 1000px;
  min-width: 370px;
}
</style>
<script>
export default {
  data () {
    return {
      examCode: [],
      label: [],
      color: [],
      bam: {
          code: '1',
          admission: '05/10/2018 - 10:15',
          codPatient: '1',
          namePatient: 'Benedito',
          datePatient: '31/02/2000',
          codMedic: '1',
          nameMedic: 'Diego',
          fase:'ECG - 00:03:50'
      },
      columns: [
        {
          name: 'code',
          required: true,
          label: 'Cod.',
          align: 'left',
          field: 'code',
          sortable: true,
          classes: 'my-class',
          style: 'width: 100px'
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
        {
          name: 'inicio',
          required: true,
          label: 'Início',
          align: 'left',
          field: 'inicio',
          sortable: true,
          classes: 'my-class',
          style: 'width: 500px'
        },
        {
          name: 'fim',
          required: true,
          label: 'Fim',
          align: 'left',
          field: 'fim',
          sortable: true,
          classes: 'my-class',
          style: 'width: 500px'
        },
        {
          name: 'total',
          required: true,
          label: 'Total',
          align: 'left',
          field: 'total',
          sortable: true,
          classes: 'my-class',
          style: 'width: 500px'
        },
        {
          name: 'action',
          required: true,
          label: 'Ações',
          align: 'left',
          field: 'action',
          sortable: false,
          style: 'width: 500px'
        },
      ],
      tableData: [
        {
          code: '1',
          name: 'ECG',
          inicio: '14:35:12',
          fim: '14:39:02',
          total: '00:03:50',
          action: 'FINALIZADO'
        },
        {
          code: '2',
          name: 'Medicação',
          inicio: '00:00:00',
          fim: '00:00:00',
          total: '00:00:00'
        },
        {
          code: '3',
          name: 'Trombólise',
          inicio: '00:00:00',
          fim: '00:00:00',
          total: '00:00:00'
        },
        {
          code: '4',
          name: 'Internação',
          inicio: '00:00:00',
          fim: '00:00:00',
          total: '00:00:00'
        },
        {
          code: '5',
          name: 'Revascularização',
          inicio: '00:00:00',
          fim: '00:00:00',
          total: '00:00:00'
        },
      ]
    }
  },
  computed: {
  },
  methods: {
    check (code) {
      let valor = false
      let exame = this.examCode.find(item => item.code === code)
      if (exame) {
        valor = exame.iniciado
      }
      return valor
      // this.label[code] = 'Iniciar'
      // this.color[code] = 'green'
      // console.log('this.color[' + code + '] ' + this.color[code])
      // return true
    },
    time (code, valor) {
      let exame = this.examCode.find(item => item.code === code)
      if (exame) {
        console.log('alterou')
        exame.iniciado = valor
      } else {
        console.log('criou')
        this.examCode.push({
          code: code
        })
      }
      // if (this.label[code] === 'Iniciar'){
      //   this.label[code] ='Parar',
      //   this.color[code] = 'red'
      //   console.log(this.color[code] + code)
      // } else {
      //   this.label[code] ='Finalizado',
      //   this.color[code] = 'black'
      //   console.log(this.color[code] + code)
      // }
      
    },
    alta (){

    },
    obito (){

    },
    iniciar (code, valor) {
      console.log('valor: ' + valor)
      this.cronoCode[code] = valor
      console.log('verificarAcao(props.row.code) ' + this.verificarAcao(code))
      
    },
    verificarAcao (code) {
      this.color[code] = 'green'
      console.log('this.cronoCode[code]' + this.cronoCode[code])
      if (this.cronoCode[code] == true){
        this.colorG(code)
      } else if (this.cronoCode[code] = 'red'){
        this.cronoCode[code] = 'black'
      }
      return this.cronoCode[code]
    }
  }
}
</script>
