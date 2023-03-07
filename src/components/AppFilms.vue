<script>
import AppCard from "./AppCard.vue"
import { store } from "../data/store"
import axios from "axios"

export default {
  components: { AppCard },
  props:{
    SendTerm: String
  },

  data(){
    return{
      store,
    }
  },

  // al cambio del dom si attiva questa funzione 
  watch: {
    SendTerm(NewTerm) {
      this.StartSearch(NewTerm);
    },
  },

  // funzione di ricerca 
  methods:{
    StartSearch(Term){
      axios
      .get(
        `${store.baseUrl}movie?api_key=${store.apiKey}&query=${Term}&language=it`
      )
      .then((response) => {
        store.movies = response.data.results;
      })
      
    },
    
  },
}
</script>

<template>
  <section>
    <div class="container">
      <h2 v-if="store.movies.length > 0" class="text-white text-white fs-2 py-4">
        Ho trovato: {{ store.movies.length }} Film
      </h2>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-5">
        <AppCard v-for="movie in store.movies" class="d-flex flex-column"
          :Name="movie.original_title"
          :Title="movie.title"
          :Language="movie.original_language"
          :Vote="movie.vote_average"
          :BackCover="movie.backdrop_path"
          :FrontCover="movie.poster_path"
          :Overview="movie.overview"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>