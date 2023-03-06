<script>
  import { store } from "../data/store"
  export default {
    props: {
      Name: String,
      Title: String,
      Language: String,
      Vote: String,
      BackCover: String,
      FrontCover: String,
      Overview: String,
    },

    data(){
      return{
        BaseImgUrl: "https://image.tmdb.org/t/p/w342",
      }
    }
  }
</script>

<template>
    <div class="col">
       <div class="front">
        <img :src="`${BaseImgUrl}${FrontCover}`" alt="">
       </div>
    </div>
</template>

<style scoped>

</style>