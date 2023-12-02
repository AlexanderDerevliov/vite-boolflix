<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue"

export default{
    data() {
        return {

        }
    }, 

    components: { AppMain, AppHeader }
   

}

</script>

<template>

<AppHeader />
<AppMain />

</template>

<style lang="scss" >
@use "./style/general.sass";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
