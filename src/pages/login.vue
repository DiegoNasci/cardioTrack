<template lang="pug">
  .row.justify-center.items-center.bg-login.marginLogin
    q-card.bg-white.q-ma-sm.q-pa-xl.shadow-5
      .row.justify-center.items-center
        div
          .col-8.col-sm-6
            img(src="statics/img/img_login.png" style="width: 350px; height: 500px;margin-top: -140px; margin-bottom: -52px")
        div.q-pl-lg
          .col-10.col-sm-6
            p.q-display-1.q-pt-xl.flex.flex-center.items-center
              |Bem vindo ao CardioTrack!
          .col-8.col-sm-6.q-pb-md
            q-input(v-model="user.matriculation" stack-label="Matrícula")
          .col-8.col-sm-6.q-pb-md
            q-input(v-model="user.password" type="password" stack-label="Senha")
          .col-8.col-sm-6
            q-btn(label="ENTRAR" @click="login" color="blue")
      
</template>
<script>
export default {
  data () {
    return {
      user: {
        matriculation: '',
        password: '',
        username: '',
        email: ''
      }
    }
  },
  methods: {
    // login (e, done) {
    //   let self = this
    //   let Parse = this.$parse

    //   Parse.User.logIn(self.user.matriculation, self.user.password).then(
    //     (user) => {
    //       self.$router.push('/main')
    //       return true
    //     },
    //     (error) => {
    //       this.$q.notify({
    //         message: 'Nao foi possivel logar: ' + error,
    //         color: 'negative',
    //         position: 'bottom-left'
    //       })
    //       return true
    //     }
    //   )
    // }
    login (){
      console.log(this.user.matriculation)
      if ((this.user.matriculation == 201410332) && (this.user.password == 123)){
        this.$router.push('/main')
      } else {
        this.$q.notify({
            message: 'Nao foi possivel logar: matrícula ou senha inválidos',
            color: 'negative',
            position: 'bottom'
          })
        this.$router.push('/')
      }
      
    }
  }
}
</script>

<style scoped>
.marginLogin{
  width: 100%;
  height: 950px;
  overflow: hidden;
}
.bg-login{
  background: linear-gradient(to right, rgb(162, 234, 255), rgb(0, 111, 178));
}
</style>