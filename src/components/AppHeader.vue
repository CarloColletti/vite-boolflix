<script>
import AppSearch from "./AppSearch.vue"
export default{
  components:{ AppSearch },
};
</script>

<template>
  <header>
    <div class="container">
      <div class="row row-cols-2 justify-content-between align-items-center py-4">
        <div class="col">
          <h2 class="text-danger fs-1 fw-bold ">
            BOOLFLIX
          </h2>
        </div>
        
        <div class="col">
          <AppSearch />
        </div>

      </div>
    </div>
  </header>
</template>

<style scoped>
</style>