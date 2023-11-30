<script>
import { store } from '../store';
export default {
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <div class="d-flex">
        <h1>BOOLFLIX</h1>
    <label for="title-film" class="form-label"></label>
    <input 
    type="text" 
    class="form-control" 
    id="title-film"
    v-model="this.store.title" >
    <button 
    class="btn btn-primary"
    @click="$emit('search')">cerca</button>
    </div>
    

</template>

<style lang="scss" scoped>
</style>