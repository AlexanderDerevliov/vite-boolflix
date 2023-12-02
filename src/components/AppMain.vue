<script>
import { store } from '../store';



export default {
    data() {
        return {
            text: "Non mi da nessuna risposta",
            store,
        };
    },
 
}
</script>

<template>
   <section>
    <div v-for="movie in store.MovieList">
        <h3>{{ movie.title }}</h3>
    </div>
    <h2>{{ text }}</h2>
   </section>

  
</template>

<style lang="scss" scoped>
section {
    background-color: aqua;
    min-height: 200px;
}
</style>