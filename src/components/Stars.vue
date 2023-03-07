<script>
export default{
  props:{
    VoteNumber: Number,
  },

  computed: {
    FullStars() {
      return Math.ceil(this.VoteNumber / 2);
    },
    EmptyStars() {
      return 5 - this.FullStars;
    },
  },
}
</script>

<template>
  <span>
    <font-awesome-icon
        class="full-star"
        v-for="star in FullStars"
        icon="fa-solid fa-star"
      /> 
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
