<script>
    export default {
        computed :{
            archivedTasks(){
                return this.$store.state.archivedTasks
            }
        },
        methods : {
            onIncompleteClick : function(event){
                let payload = event.target.attributes.taskId.value
                this.$store.dispatch('unArchiveTask', payload)
            }
        }
    }
</script>

<template>
    <div>
        <div class = "task-card shadow"
            v-for = "task in archivedTasks" 
            v-bind:key = "task.id">
            <h2> {{task.message}}</h2>
            <span class="icon">
                <img  
                    @click = "onIncompleteClick($event)" 
                    :taskId = "task.id" 
                    src = "../../../public/icons/document.png" 
                    alt = "trash" 
                >
            </span>
        </div>
    </div>
</template>


