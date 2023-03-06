<script>
import AppHeader from "./components/AppHeader.vue"
import AppFilms from "./components/AppFilms.vue"
import AppTvSeries from "./components/AppTvSeries.vue"
import { store } from "./data/store"

export default {
  components:{AppHeader, AppFilms, AppTvSeries },

  data(){
    return{
      SearchTerm: "",
      store,
    }
  },
  

  methods:{
    GetReciveRequest(Request){
      this.SearchTerm = Request;
      console.log(this.SearchTerm);
    }
  }
}
</script>

<template>
  <AppHeader @ReciveRequest="GetReciveRequest"/>

  <main>
    <AppFilms />
    <hr>
    <AppTvSeries />
  </main>

</template>

<style>
body{
  background-color: #333333;
}
</style>
