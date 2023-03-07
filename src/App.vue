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
    // riceve il termine dal search e da il termine a request 
    GetReciveRequest(Request){
      this.SearchTerm = Request;
      // console.log(this.SearchTerm);
    }
  }
}
</script>

<template>
  <AppHeader @ReciveRequest="GetReciveRequest"/>

  <!-- request viene inviato per effettuare la ricerca e creare le card -->
  <main>
    <AppFilms  :SendTerm="SearchTerm"/>
    <hr>
    <AppTvSeries :SendTerm="SearchTerm"/>
  </main>

</template>

<style>
body{
  background-color: #333333;
}

hr{
  border: 2px solid black;
}
</style>
