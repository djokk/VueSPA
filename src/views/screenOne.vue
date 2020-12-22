<template>
  <div>
    <v-container class="grey lighten-5 mt-16">
      <v-row no-gutters class="d-flex justify-center align-center">
        <v-col cols="6">
          <v-img
            :src="logo"
          ></v-img>
        </v-col>
        <v-col cols="5" class="ml-10">
          <form>
            <v-text-field
              label="Login"
              required
              :disabled= "isdisabled"
            ></v-text-field>
            <v-text-field
              label="Password"
              required
              :disabled= "isdisabled"
            ></v-text-field>

            <v-btn color="primary" class="mr-4" @click="two">
              submit
            </v-btn>
          </form>
        </v-col>
      </v-row>
    </v-container>
    <Loader v-if="!isloader"/>
  </div>
</template>

<script>
import Loader from '../components/Loader'
export default {
  name: "screenOne",
  data: () => ({
    logo: require("../assets/img/material.jpg"),
    isloader: true,
    isdisabled: false
  }),
  components:{
    Loader
  },
  methods: {
    two() {
      this.isdisabled = true;
      this.isloader = false;
      setTimeout(()=>{
        this.$router.push({name: 'screenTwo'});
      }, 3000)
    }
  },
};
</script>
