<script>
    import SideNav from "./partials/SideNav.vue";
    import TaskList from "./partials/TaskList.vue";
    export default {
        data() {
            return {

            }
        },
        components : {
            'side-nav' : SideNav,
            'task-list' : TaskList
        }
    }
</script>

<template>
    <div class="container">
        <side-nav></side-nav>
        <router-view></router-view>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    display: flex;
}
    
.tasks-container {
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-flow: column;
    width: 100%;
    padding: 35px;
}
.tasks-container .header-span {
    display: flex;
    justify-content: space-between;
}
.header-span span {
    align-self: center;
}
.tasks-container h2 {
    align-self : center;
}
</style>