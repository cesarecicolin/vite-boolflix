<script>
import axios from "axios"
import {store} from "./store.js"
export default {
  data(){
    return{
      store
    }
  }
}
</script>

<template>
 <h1>ciao bro <i class="fa-solid fa-magnifying-glass"></i></h1>
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
