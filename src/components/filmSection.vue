<script>
export default {
    props: {
        film: Object
    }
}
</script>

<template>
  <div class="card h-100">
  
  <div class="card-body text-center">
    <h5 class="card-title">{{film.title}}</h5>
    <h6>{{ film.original_title }}</h6>
    <p>{{ film.original_language }}</p>
    <p>{{ film.overview }}</p>
    
    
  </div>
</div>
</template>

<style lang="scss" scoped>
</style>