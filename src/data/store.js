import { reactive } from "vue";
export const store = reactive({
  movies: [],
  series: [],
  baseUri: "https://api.themoviedb.org/3/search/",
  apiKey: "1a755b30c0afe126efe04aff8a1c1369",
  isLoading: false,
});