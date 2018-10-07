<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="blue-5"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="fas fa-bars" />
        </q-btn>

        <q-toolbar-title>
          {{display}}
        </q-toolbar-title>
        <q-icon name="fas fa-sign-out-alt" @click.native="logOut" color="white" class="flex right"></q-icon>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-primary' : null"
    >
    
    <div class="text-white text-bold q-display-1 q-pa-sm flex flex-center">
      Menu
    </div>
    <div class="bg-white q-pt-lg q-pb-lg flex flex-center">
      <div class="q-mb-sm round dense">
        <img src="statics/img/logindoctor.png" alt="">
        <div class="q-headline q-mt-md flex flex-center">{{userLoged}}</div>
      </div>
      <div class="row" >
        <div class="col">
          <q-item @click.native="$router.push('/main')">
          <q-item-side icon="fas fa-users-cog" color="primary" />
        </q-item>
        </div>
        <div class="col">
          <q-item @click.native="logOut">
          <q-item-side icon="fas fa-sign-out-alt" color="primary" />
        </q-item>
        </div>
      </div>
    </div>
      <q-list
        no-border
        link
        inset-delimiter
        class="bg-blue-9 text-white"      
      >
       <q-item @click.native="$router.push('/main')">
          <q-item-side icon="fa fa-home" />
          <q-item-main label="Página Inicial"/>
        </q-item>
        <!--Usuario-->
        <q-collapsible v-if="grupo === 0" icon="fas fa-user" label="Usuários">
          <div>
            <q-item @click.native="$router.push('/main/userList')">
              <q-item-main label="Listar"/>
            </q-item>
          </div>
          <div>
            <q-item @click.native="$router.push('/main/userAdd')">
              <q-item-main label="Adicionar" />
            </q-item>
          </div>
        </q-collapsible>
        <!--Paciente-->
        <q-collapsible v-if="grupo === 0" icon="fas fa-users" label="Pacientes">
          <div>
            <q-item @click.native="$router.push('/main/patientList')">
              <q-item-main label="Listar"/>
            </q-item>
          </div>
          <div>
            <q-item @click.native="$router.push('/main/patientAdd')">
              <q-item-main label="Adicionar" />
            </q-item>
          </div>
        </q-collapsible>
        <!--Exames-->
        <q-item v-if="grupo === 0" @click.native="$router.push('/main/examList')">
          <q-item-side icon="fas fa-clipboard-list" />
          <q-item-main label="Exames"/>
        </q-item>
        <!--BAMs-->
        <q-collapsible icon="fas fa-file-signature" label="BAMs">
          <div>
            <q-item @click.native="$router.push('/main/bamsList')">
              <q-item-main label="Listar"/>
            </q-item>
          </div>
          <div>
            <q-item v-if="grupo === 0" @click.native="$router.push('/main/bamsAdd')">
              <q-item-main label="Adicionar" />
            </q-item>
          </div>
        </q-collapsible>
        <!-- Relatorio
        <q-item v-if="grupo === 0" @click.native="$router.push('/main/reportList')">
          <q-item-side icon="fas fa-chart-area" />
          <q-item-main label="Relatório"/>
        </q-item> -->
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      display: 'Página Inicial',
      userLoged: 'Administrador',
      grupo: 0
    }
  },
  mounted () {
    //this.checkUser ()
  },
  methods: {
    logOut () {
      let Parse = this.$parse
      Parse.User.logOut().then(() => {
        this.$router.push('/')
      })
    },
    checkUser (){
      let Parse = this.$parse
      let user = Parse.User.current()
      if (user) {
        let params = {
          objectId: user.id
        }
        console.log('a carregar grupos: ' + user.id)
        Parse.Cloud.run('getUserInfo', params).then((user) => {
          this.userLoged = user.username
          console.log("Usuario Logado: " + this.userLoged)
        })
      } else {
        this.$router.push('/')
      }

      
    
      
      }
    
  }
}
</script>

<style>
.q-list-header, .q-item-icon{
  color: white
}
</style>
