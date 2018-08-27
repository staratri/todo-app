<script>
    export default {
        data(){
            return {
                navItems : [
                    {
                        label : 'Tasks',
                        route : '/tasks'
                    },
                    {
                        label : 'Trash',
                        route : '/trash'
                    },
                    {
                        label : 'Archives',
                        route : '/archivedTasks'
                    }
                ]
            }
        }
    }
</script>

<template>
    <div class="nav-container">
        <ul v-for="items in navItems" v-bind:key="items.label">
            <router-link :to="items.route">
                <li>
                    {{items.label}}
                </li>
            </router-link>
        </ul>
    </div>
</template>

<style scoped>

    a {
        text-decoration: none;
    }
    .nav-container{
        padding: 10px;
        display: flex;
        flex-flow: column;
    }

    .nav-container ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .nav-container ul li{
        padding: 15px;
        color: wheat;
        
    }

    .nav-container ul li:hover{
        background: #dcdce6;
        color : black;
    }
    
    

</style>