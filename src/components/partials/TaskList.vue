<template>
    <div class="tasks-container">
        <div class = "header-span">
            <h2> My Tasks </h2>
            <router-link to = "/addTask">
                <span><img src="../../../public/icons/plus.png" alt="add task"></span>
            </router-link>
        </div>
        <task-card></task-card>
    </div>
</template>

<script>
    import TaskCard from "./TaskCard.vue";
    export default {
        components : {
            'task-card' : TaskCard
        }
    }
</script>

<style scoped>
.tasks-container .header-span {
    display: flex;
    justify-content: space-between;
}
</style>