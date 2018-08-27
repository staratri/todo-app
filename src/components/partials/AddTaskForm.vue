<script>
    export default {
        data(){
            return{
                text: ''
            }
        },
        methods : {
            addTask : function(){
                if(this.text){
                    this.$store.dispatch('addTask', this.text)
                    this.$router.push('/tasks')
                }else{
                    alert('Enter Message !')
                }
            }
        }
    }
</script>
<template>
    <div class="form-card-container">
        <h2>Create ToDo</h2>
        <div class="card-input">
            <textarea type="text" v-model="text"></textarea>
        </div>
        <div class="card-input">
            <button class="card-button" @click="addTask">
                Add Todo
            </button>
        </div>
    </div>
</template>
<style scoped>
.form-card-container{
    margin: 0 auto;
    float: left;
    height: 50%;
    padding: 10px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}
.form-card-container h2{
    text-align: center;
}

.form-card-container .card-input{
    display: flex;
    padding: 5px;
    justify-content: center;
}

.card-input textarea{
    height:auto;
    max-width:600px;
    color:#999;
    font-weight:400;
    font-size:30px;
    font-family:'Ubuntu', Helvetica, Arial, sans-serif;
    width:100%;
    background:#fff;
    border-radius:3px;
    line-height:2em;
    border:none;
    box-shadow:0px 0px 5px 1px rgba(0,0,0,0.1);
    padding:30px;
    -webkit-transition: height 2s ease;
    -moz-transition: height 2s ease;
    -ms-transition: height 2s ease;
    -o-transition: height 2s ease;
    transition: height 2s ease;
}

.form-card-container .card-input label{
    align-self: center;
}

button {
    border: none;
    display: inline-block;
    padding: 8px 16px;
    vertical-align: middle;
    overflow: hidden;
    text-decoration: none;
    color: white;
    background-color: green;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;
}
</style>