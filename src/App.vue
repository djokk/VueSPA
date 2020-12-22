<template>
  <v-app>
    <v-navigation-drawer app width="130">
      <v-list color="teal darken-1" height="64">
        <v-list-item class="d-flex justify-center align-center">
          <v-list-item-avatar class="Profil">
            <v-img :src="profilFoto.url"></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
      <v-list nav dense class="text-center">
        <v-list-item links to="/">
          <v-list-item-title>screenOne</v-list-item-title>
        </v-list-item> 
        <v-list-item link  to="/two">
          <v-list-item-title>screenTwo</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/three">
          <v-list-item-title>screenThree</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <router-view />
  </v-app>
</template>

<script>

export default {
  name: "App",
  data: () => ({
  }),
  computed: {
    profilFoto(){
      return this.$store.getters.profilFoto
    }
  },
};
</script>

<style lang="css" scoped>
.Profil {
  border: 2px solid #000;
  margin-right: 50px;
  background: url('./assets/logo.png');
  background-size: cover;
}
</style>