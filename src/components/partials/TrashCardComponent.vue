<script>
    export default {
        computed :{
            trashedTasks(){
                return this.$store.state.trashedTasks
            }
        },
        methods : {
            onRestoreClick : function(event){
                let payload = event.target.attributes.taskId.value
                this.$store.dispatch('restoreTask', payload)
            },
            onPermanentDeleteClick : function(event){
                let payload = event.target.attributes.taskId.value
                this.$store.dispatch('permanentDeleteTask', payload)
            },
        }
    }
</script>

<template>
    <div>
        <div class = "task-card shadow"
            v-for = "task in trashedTasks" 
            v-bind:key = "task.id">
            <h2> {{task.message}}</h2>
            <span class="icon">
                <img  
                    @click = "onRestoreClick($event)" 
                    :taskId = "task.id" 
                    src = "../../../public/icons/restore.png" 
                    alt = "trash" 
                >
                <img  
                    @click = "onPermanentDeleteClick($event)" 
                    :taskId = "task.id" 
                    src = "../../../public/icons/permanent-delete.png" 
                    alt = "trash" 
                >
            </span>
        </div>
    </div>
</template>


