<script>
export default {
  // funzione personalizzata
  emits: ["search"],
  data() {
    return {
      // contenuto della ricerca da inviare con emit 
      search: "",
    };
  },
};
</script>

<template>
    <div class="input-group">
      <!-- premendo enter emit manda il search sovrastritto con v-model e si resetta la stringa  -->
      <input
        type="text"
        class="form-control"
        placeholder="Cerca un film o una serie TV"
        v-model="search"
        @keyup.enter="
        $emit('search', search);
        search = '';"
      />
      <!-- al click si avrà la stessa funzione  -->
      <button
        class="btn btn-primary"
        type="button"
        @click="
        $emit('search', search);
        search = '';"
      >
        Cerca
      </button>
    </div>
</template>

<style scoped>
</style>
