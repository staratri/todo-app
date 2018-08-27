<script>
    import TaskCardComponent from "./TaskCardComponent.vue";
    import TrashCardComponent from "./TrashCardComponent.vue";
    import ArchivedTaskCardComponent from "./ArchivedTaskCardComponent.vue";
    export default {
        components:{
            'task-card' : TaskCardComponent,
            'trash-card' : TrashCardComponent,
            'archive-card' : ArchivedTaskCardComponent
        },
        data(){
            return {
                taskPage : false,
                trashPage : false,
                archivePage : false
            }
        },
        beforeMount() {
            if( this.$route.path === '/tasks'){
                this.taskPage = true
            }else if(this.$route.path === '/trash'){
                this.trashPage = true
            }else if(this.$route.path === '/archivedTasks'){
                this.archivePage = true
            }
        }
    }
</script>

<template>
    <div class="tasks" >
        <task-card v-if="taskPage"></task-card>
        <trash-card v-if="trashPage"></trash-card>
        <archive-card v-if="archivePage"></archive-card>
    </div>
</template>

<style>
.tasks .task-card{
    background: #f5f5f5;
    min-height: 100px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px;
}

.task-card  h2{
    flex-grow: 11;
    padding: 10px;
    align-self: center;
}
.icon {
    flex-grow : 1;
    min-width : 100px;
    max-width: 140px;
    background: aqua;
    padding: 5px;
    display: flex;
    justify-content: space-evenly;
}
.icon img{
    cursor: pointer;
    min-width: 32px;
    align-self: center;
    
}
.icon img:hover{
    opacity: 0.7;
}
@media only screen and (max-width: 707px) {
    .icon {
        max-width: initial;
    }
}

</style>