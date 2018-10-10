<template lang="pug">
div
  .row.q-ml-xl.q-mt-lg
    .col-10.col-md-2.q-mb-sm.q-mr-sm
      q-item(@click.native="$router.push('/main/userList')")
        q-card.bg-white.q-pa-xl.shadow-5.cardT
          |Usuario > Listar
    .col-10.col-md-2.q-mb-sm
      q-item(@click.native="$router.push('/main/userAdd')")
        q-card.bg-white.q-pa-xl.shadow-5.cardT
          |Usuario > Adicionar
</template>

<style>
.cardT{
  min-width: 250px;
}
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
