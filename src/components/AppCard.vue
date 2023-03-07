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
        store,
      }
    }
  }
</script>

<template>
    <div class="col">
      <div class="card-custom">
        <!-- imagine di copertina -->
        <div class="front">
          <img :src="`${store.BaseImgUrl}${FrontCover}`" class="img-fluid img-h-max" alt="">
        </div>
  
        <!-- contenuto nel retro -->
        <div class="back pb-5">
          <div>
            <img :src="`${store.BaseImgUrl}${BackCover}`" class="img-fluid" alt="">
          </div>
          <div class="px-3">
            <h4 class="fs-4">
              Titolo: {{ Title }}
            </h4>
            <div class="py-1 fs-4">
              Voto: {{ Vote }}
            </div>
            <div class="py-1 fs-5">
              Lingia originale: {{ Language }}
            </div>

            <div class="over my-3">
              <h4 class="fs-5 py-3">
                Original Name: {{ Name }}
              </h4>
              <p class="fs-5">
                {{ Overview }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.card-custom{
  border: 3px solid white;
  color: white;
  height: 510px;
}
.front, .back{
  height: 100%;
}

.col:hover{
  .front{
    display: none;
  }

  .back{
    display: block;
  }
}
/* 
.front{display: none;} */

.back{display: none;}

.img-h-max{
  height: 100%;
  
}

.over{
  height: 150px;
  overflow: auto;
}
</style>