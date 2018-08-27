<script>
    export default {
        computed :{
            availableTasks(){
                return this.$store.state.availableTasks
            },
        },
        methods : {
            onDeleteClick : function(event){
                let payload = event.target.attributes.taskId.value
                this.$store.dispatch('deleteTask', payload) 
            },
            onCompleteClick : function(event){
                let payload = event.target.attributes.taskId.value
                this.$store.dispatch('completeTask', payload)
            }
        }
    }
</script>

<template>
    <div>
        <div class="task-card shadow "
            v-for="task in availableTasks" 
            v-bind:key="task.id" 
            >
            <h2> {{task.message}} </h2>
            <span class="icon">
                <img  
                    @click="onDeleteClick($event)" 
                    :taskId="task.id" 
                    src="../../../public/icons/rubbish-bin.png" 
                    alt="trash"  
                >
                <img  
                    @click="onCompleteClick($event)" 
                    :taskId="task.id" 
                    src="../../../public/icons/task-complete.png" 
                    alt="trash" 
                >
            </span>
        </div>
    </div>
</template>


