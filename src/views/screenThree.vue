<template>
  <div>
    <v-app-bar app color="teal darken-1">
      <v-spacer></v-spacer>
      <v-list-item-avatar class="btnProfil" @click="openTakeFoto">
        <v-img :src="profilFoto.url"></v-img>
      </v-list-item-avatar>
    </v-app-bar>
    <TakeFoto v-if="!isTakeFoto" @taken="isTakeFoto = $event"/>
  </div>
</template>

<script>
import TakeFoto from '../components/TakeFoto'

export default {
  data: () => ({
    isTakeFoto: true,
    // src: null
  }),
  components: {
    TakeFoto
  },
  computed: {
    profilFoto(){
      return this.$store.getters.profilFoto
    }
  },
  mounted(){
  },
  methods: {
    openTakeFoto() {
      this.isTakeFoto = false;
    },
  },
};
</script>

<style lang="css">
.btnProfil {
  border: 2px solid #000;
  margin-right: 50px;
  cursor: pointer;
  background: url('../assets/logo.png');
  background-size: cover;
}
</style>
