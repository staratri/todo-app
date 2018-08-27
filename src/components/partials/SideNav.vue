<script>
    import NavItems from "./NavItems.vue";
    export default {
        data(){
            return{

            }
        },
        components : {
            'nav-items' : NavItems
        }
    }
</script>

<template>
    <div class="sideNav">
        <nav-items></nav-items>
    </div>
</template>

<style lang="css" scoped>
    .sideNav {
        position: relative;
        background: #313154;
        width: 30%;
        max-width: 250px;
        height: 100%;
    }
</style>
