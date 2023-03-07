<script>
export default{
  props:{
    VoteNumber: Number,
  },

  // il numero viene appossimato ad fino ad essere un intero 
  computed: {
    FullStars() {
      // viene diso per due per avere un numero da 1 a 5 
      return Math.ceil(this.VoteNumber / 2);
    },
    // si determina il numero di stelle vuote 
    EmptyStars() {
      return 5 - this.FullStars;
    },
  },
}
</script>

<template>
  <span>
    <!-- con un v-for conpaiono le stelle colorate  -->
    <font-awesome-icon
        class="full-star"
        v-for="star in FullStars"
        icon="fa-solid fa-star"
      /> 
      <!-- con un ultro subito vicino quelle rimanenti vuote  -->
      <font-awesome-icon
        class="empty-star"
        v-for="star in EmptyStars"
        icon="fa-solid fa-star"
      />
  </span>
</template>

<style lang="scss">
.full-star {
  color: orange;
}
.empty-star {
  color: grey;
}
</style>
