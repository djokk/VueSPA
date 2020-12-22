<template>
  <v-container>
    <v-row no-gutters class="ml-16">
      <v-col cols="12" class="mb-16 mt-16">
        <v-btn
          elevation="2"
          to="/three"
        >Перейти на 3 экран</v-btn>
      </v-col>
      <v-col cols="12">
        <div id="maps">
          <GoogleMap />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GoogleMap from "../components/GoogleMap";

export default {
  name: "screenTwo",
  data: () => ({
  }),
  components: {
    GoogleMap
  },
  methods:{
    // three(){
    //   this.$router.push({name: 'screenThree'});
    // }
  }
};
</script>