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

  watch: {
    SendTerm(NewTerm) {
      this.StartSearch(NewTerm);
    },
  },

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
      <h2 v-if="store.series.length > 0" class="text-white">
        Ho trovato: {{ store.series.length }} serie
      </h2>
      <div class="row row-cols-4 justify-content-center">
        <div v-for="serie in store.series" class="p-2 d-flex flex-column">
          <AppCard
            :Name="serie.original_name"
            :Title="serie.name"
            :Language="serie.original_language"
            :Vote="serie.vote_average"
            :BackCover="serie.backdrop_path"
            :FrontCover="serie.poster_path"
            :Overview="serie.overview"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>