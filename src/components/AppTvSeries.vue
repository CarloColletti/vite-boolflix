<script>
import AppCard from "./AppCard.vue"
import { store } from "../data/store"
import axios from "axios"

export default {
  components: { AppCard },
  props: {
    SendTerm: String
  },

  data() {
    return {
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
  methods: {
    StartSearch(Term) {
      axios
        .get(
          `${store.baseUrl}tv?api_key=${store.apiKey}&query=${Term}&language=it`
        )
        .then((response) => {
          store.series = response.data.results;
        })

    },

  },
}
</script>

<template>
  <section>
    <div class="container">
      <h2 v-if="store.series.length > 0" class="text-white fs-2 py-4">
        Ho trovato: {{ store.series.length }} Serie Tv
      </h2>
      <div class="row row-cols-4 g-5">
        <AppCard v-for="serie in store.series" class="d-flex flex-columm" 
        :Name="serie.original_title"
        :Title="serie.title" 
        :Language="serie.original_language" 
        :Vote="serie.vote_average"
        :BackCover="serie.backdrop_path" 
        :FrontCover="serie.poster_path" 
        :Overview="serie.overview" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>