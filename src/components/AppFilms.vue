<script>
    import AppCard from "./AppCard.vue"
    import { store } from "../data/store"

    export default {
    components: { AppCard },

    data(){
        return{
            store,
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row row-cols-4">
            <AppCard />
        </div>
    </div>
</template>

<style scoped></style>