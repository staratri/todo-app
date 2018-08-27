<template>
    <div class="tasks-container">
        <div class = "header-span">
            <h2> Deleted Task </h2>
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
