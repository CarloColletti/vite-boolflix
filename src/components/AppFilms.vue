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

  watch: {
    SendTerm(NewTerm) {
      this.StartSearch(NewTerm);
    },
  },

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
      <h2 v-if="store.movies.length > 0" class="text-white">
        Ho trovato: {{ store.movies.length }} Film
      </h2>
      <div class="row row-cols-4 g-5 py-4">
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