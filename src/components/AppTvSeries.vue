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
      store.isLoading = true;
      axios
      .get(
        `${store.baseUrl}tv?api_key=${store.apiKey}&query=${Term}&language=it`
      )
      .then((response) => {
        store.series = response.data.results;
      })
      .finally(() => (store.isLoading = false));

    },

  },
}
</script>

<template>
  <section>
    <div class="container" v-if="store.series.length != 0">
      <h2 v-if="store.series.length > 0" class="text-white fs-2 py-4">
        Ho trovato: {{ store.series.length }} Serie Tv
      </h2>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-5">
        <AppCard v-for="serie in store.series" class="d-flex flex-columm" 
          :Name="serie.original_title"
          :Title="serie.title" 
          :Language="serie.original_language" 
          :Vote="serie.vote_average"
          :BackCover="serie.backdrop_path" 
          :FrontCover="serie.poster_path" 
          :Overview="serie.overview" 
        />
      </div>
    </div>
    <div class="container" v-else>
      <h3 class="text-white fs-2 py-4">Non ho trovato alcuna serie</h3>
    </div>
  </section>
</template>

<style scoped></style>