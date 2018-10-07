<template lang="pug">
div
  div.q-mt-lg
    .row.justify-between.bd-bottom
      div
        .col-8.col-sm-6.q-ml-md.q-mb-sm
          .q-subheading BAMs>Adicionar
      div
        .col-8.col-sm-6.q-mr-md
          .q-subheading Atalho 
            q-toggle(v-model="check" color="blue-7")
    .flex.flex-center
      div.q-ml-xl.cad-pat
        h5.q-mb-md Boletim de Atendimento Médico
        .row 
          .col-10.col-md-2.q-mb-sm.q-mr-lg
            q-input(v-model="bam.code" stack-label="Código" type="number")
          .col-10.col-md-3.q-mb-sm.q-mr-lg
            q-input(v-model="bam.admission" stack-label="Admissão")
        .row
          .col-10.col-md-2.q-mb-sm.q-mr-lg
            q-input(v-model="bam.codPatient" stack-label="Cod. Paciente" type="number")
          .col-10.col-md-6.q-mb-sm.q-mr-lg
            q-input(v-model="bam.namePatient" stack-label="Paciente")
          .col-10.col-md-2.q-mb-sm.q-mr-lg
            q-input(v-model="bam.datePatient" stack-label="Data de Nascimento")
          .col-10.col-md-2.q-mb-sm.q-mr-lg
            q-input(v-model="bam.codMedic" stack-label="Cod. Médico" type="number")
          .col-10.col-md-8.q-mb-sm.q-mr-lg
            q-input(v-model="bam.nameMedic" stack-label="Médico")
        .row
          .col-12.q-mb-lg
            q-btn(label="Salvar" @click="addBAM" color="blue")
</template>
<style scoped>
.cad-pat{
  max-width: 1000px;
}
.bd-bottom{
  border-bottom: 2px solid #6D6D6D;
  margin: 0 20px 0;
}
</style>
<script>
export default {
  data () {
    return {
      bam: {
        code: '',
        admission: '',
        codPatient: '',
        namePatient: '',
        datePatient: '',
        codMedic: '',
        nameMedic: ''
      }
    }
  },
  methods: {
    addBAM () {
      // let self = this
      // let params = {
      //   username: self.user.username,
      //   password: self.user.password,
      //   email: self.user.email
      // }

      // Parse.Cloud.run('createUser', params).then(
      //   result => {
      //     this.$q.notify({
      //       message: 'Usuário criado com sucesso.',
      //       color: 'positive',
      //       position: 'bottom-center'
      //     })
      //     console.log('result.id: ' + result.id)
      //     this.user.objectId = result.id
      //     this.save()
      //   },
      //   error => {
      //     this.$q.notify({
      //       message: `Erro ao salvar.<br/>${error}`,
      //       color: 'negative',
      //       position: 'bottom-center'
      //     })
      //   }
      // )
      this.$router.push('bamsList')
    },
    save (){
      let self = this
      console.log('self.user.userid:' + self.user.objectId)
      Parse.Cloud.run('editUser', this.user).then(
        result => {
          self.listUsers()
          self.cleanForm()
          this.$q.notify({
            message: 'Usuário criado com sucesso.',
            color: 'positive',
            position: 'bottom-left'
          })
          //this.$router.push('/login')
        },
        error => {
          this.$q.notify({
            message: `Erro ao salvar.<br/>${error}`,
            color: 'negative',
            position: 'bottom-left'
          })
        }
      )
    },
    cleanForm (){
      this.user.code = '';
      this.user.matriculation = '';
      this.user.adjutancy = '';
      this.user.creation = '';
      this.user.username = '';
      this.user.email = '';
      this.user.password = '';
      this.user.check = false;
    },
    listUsers () {
      let self = this
      self.registros = []
      let Parse = this.$parse
      let query = new Parse.Query(Parse.User)
      query.ascending('username')
      query.find({
        success: function (results) {
          self.registros = results.map(object => object.toJSON())
        },
        error: function (error) {
          this.$q.notify({
            message: 'Error: ' + error.code + ' ' + error.message,
            color: 'negative',
            position: 'bottom-left'
          })
        }
      })
    }
  }
}
</script>
