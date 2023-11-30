<script>
import axios from "axios"
import {store} from "./store.js"
import AppTesta from "./components/AppTesta.vue"
import AppMain from "./components/AppMain.vue"
export default {
  data(){
    return{
      store
    }
  },
  components: {
    AppTesta,
    AppMain
},
  methods:{
    cercaFilm(){
      console.log(this.store.filmList);
      axios
      .get(this.store.apiUrlFilm,{
        params:{
          query: this.store.title, 
          
        },
      })
      .then((resp) => {
        this.store.filmList = resp.data.results
      })
    }

  }
}
</script>

<template>
 <AppTesta @search="cercaFilm" />
 <AppMain />
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
