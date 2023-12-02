<script>

import InputSearch from '../components/InputSearch.vue';

export default {
    
    components: { InputSearch },
    
}
</script>

<template>
    
    <header>
        
        <h1>BOOLFLIX</h1>
        
        <InputSearch />
    </header>
</template>

<style scoped lang="scss">
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