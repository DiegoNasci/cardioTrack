<template lang="pug">
div
  div.q-mt-lg
    .row.justify-between.bd-bottom
      div
        .col-8.col-sm-6.q-ml-md.q-mb-sm
          .q-subheading Paciente>Listar>1
      div
        .col-8.col-sm-6.q-mr-md
          .q-subheading Atalho 
            q-toggle(v-model="check" color="blue-7")
    .flex.flex-center
      div.q-ml-xl.cad-pat
        h5.q-mb-md Informe os dados para cadastro
        .row 
          .col-10.col-md-2.q-mb-sm.q-mr-lg
            q-input(v-model="patient.code" stack-label="Código" type="number" disable="true")
          .col-10.col-md-3.q-mb-sm.q-mr-lg
            q-input(v-model="patient.cpf" stack-label="CPF" type="" disable="true")
          .col-10.col-md-3.q-mb-sm.q-mr-lg
            q-input(v-model="patient.rg" stack-label="RG" type="" disable="true")
          .col-10.col-md-2.q-mb-sm.q-mr-lg
            q-input(v-model="patient.date" stack-label="Data de Nascimento")
          .col-10.col-md-8.q-mb-sm.q-mr-lg
            q-input(v-model="patient.username" stack-label="Nome")
          .col-10.col-md-2.q-mb-sm.q-mr-lg
            q-select(stack-label="Gênero" v-model="patient.genre" :options="selectOptions")
          .col-10.col-md-8.q-mb-sm.q-mr-lg
            q-input(v-model="patient.address" stack-label="Endereço")
          .col-10.col-md-2.q-mb-sm.q-mr-lg
            q-input(v-model="patient.cep" stack-label="CEP")
          .col-10.col-md-2.q-mb-sm.q-mr-lg
            q-input(v-model="patient.complement" stack-label="Complemento")
          .col-10.col-md-2.q-mb-sm.q-mr-lg
            q-input(v-model="patient.neighborhood" stack-label="Bairro")
          .col-10.col-md-3.q-mb-sm.q-mr-lg
            q-input(v-model="patient.city" stack-label="Cidade")
          .col-10.col-md-3.q-mb-sm.q-mr-lg
            q-input(v-model="patient.state" stack-label="Estado")
          .col-10.col-md-11.q-mb-sm.q-mr-lg
            q-input(v-model="patient.historic" type="textarea" float-label="Histórico" :max-height="100" rows="7")
        .row
          .col-12.q-mb-lg
            q-btn(label="Salvar" @click="addPatient" color="blue")
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
import Parse from 'parse'
export default {
  data () {
    return {
      patient: {
        code: '1',
        cpf: '111.111.111-00',
        rg: '1111111-1',
        date: '31/02/2000',
        username: 'Benedito',
        genre: 'm',
        address: 'Rua A',
        cep: '00000-000',
        complement: 'CA',
        neighborhood: 'Centro',
        city: 'Cidade',
        state: 'Estado',
        historic: 'Alergico a rémedio'
      },
      selectOptions: [
        {
          label: 'Masculino',
          value: 'm'
        },
        {
          label: 'Feminino',
          value: 'f'
        }
      ]
    }
  },
  methods: {
    addPatient () {
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
      this.$router.push('patientList')
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
