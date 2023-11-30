import { reactive } from "vue";
export const store = reactive({
    filmList:[],
    apiUrlFilm:"https://api.themoviedb.org/3/search/movie?api_key=8c95b5aa7d94094b2a5d3a16febd81c0",
    title:""
})