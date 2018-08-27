<script>
    export default {
        methods : {
            onDeleteClick : function(event){
                let payload = event.target.attributes.taskId.value
                this.$store.dispatch('deleteTask', payload)
            }
        }
    }
</script>
<template>
    <span class="icon">
        <img  @click="onDeleteClick($event)" :taskId="task.id" src="../../../public/icons/rubbish-bin.png" alt="trash" class="center" >
    </span>
</template>
<style scoped>
.icon {
    flex-grow : 1;
    min-width : 100px;
    background: aqua;
    padding: 5px;
    
}
.icon img{
    cursor: pointer;
}
.icon img:hover{
    opacity: 0.7;
}
</style>