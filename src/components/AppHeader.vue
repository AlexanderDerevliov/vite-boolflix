<script>

import InputSearch from '../components/InputSearch.vue';
import axios from 'axios';
import {store} from "../store"

export default {
    data(){
        return {
            store,
        }
    },
    
    components: { InputSearch },
    methods: {
    search() {
      axios.get("https://api.themoviedb.org/3/search/movie", {
        params: {
            api_key: "096570577eb21eaeac1a4912f0810d8c",
            query: this.store.searchKey,

        }
        }) 
        .then ((resp ) => {
           this.store.MovieList = resp.data.results;
        });
    }

  }
}
</script>

<template>
    
    <header>
        
        <h1>BOOLFLIX</h1>
        
        <InputSearch @perform-search="search ()" />
    </header>
</template>

<style lang="scss" scoped>
header {
    height: 150px;
    background-color: rgb(39, 39, 39);
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        color: rgb(234, 12, 12);
        margin-left: 20px;
        text-shadow: 0 0 20px rgb(184, 179, 179);
    }
}
</style>