<script>
import AppHeader from "./components/AppHeader.vue"
import AppFilms from "./components/AppFilms.vue"
import AppTvSeries from "./components/AppTvSeries.vue"
import AppLoad from "./components/AppLoading.vue"
import { store } from "./data/store"

export default {
  components:{AppHeader, AppFilms, AppTvSeries, AppLoad },

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
    <div v-if="!store.isLoading">
      <AppFilms  :SendTerm="SearchTerm"/>
      <hr class="my-5">
      <AppTvSeries :SendTerm="SearchTerm"/>
    </div>
    <div v-else>
      <AppLoad />
    </div>
  </main>

</template>

<style>
body{
  background-color: #333333;
}

hr{
  border: 2px solid grey;
}
</style>
