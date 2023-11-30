<script>
import { store } from '../store';
import FilmSection from './filmSection.vue';
export default{
    data() {
        return {
            store
        };
    },
    components: { FilmSection }
}
</script>

<template>
<div class="container">
    <div class="row">
        <div class="col"
        v-for="film in store.filmList">
        <FilmSection :film="film" />

        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
</style>