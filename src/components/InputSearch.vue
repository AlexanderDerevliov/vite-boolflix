<script>
export default {
    data() {
        return {
         
        }
    },
  
}
</script>

<template>
    
    <div class="container_nav">
        
        <form >
            <input type="text" placeholder="Cerca qui">
            <button>Cerca</button>
        </form>
    </div>
</template>

<style scoped lang="scss">
input {
    width: 250px;
    padding: .5rem;
    border: 2px black;
    border-radius: 30px;
   


    &:focus {
        outline: none;
    }
}




button {
    padding: .5rem 1rem;
    background-color: red;
    color: white;
    border-radius: 30px;
    margin: 0 .5rem;
}

.container_nav {
    margin-right: 1rem;
}
</style>