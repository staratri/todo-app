<template>
  <div id="app">
    <todo-app></todo-app>
  </div>
</template>

<script>
  import TodoApp from './components/TodoApp.vue';
  export  default {
    components : {
      'todo-app' : TodoApp
    },
    data (){
      return {

      }
    }
  }
</script>

<style>
  * {
    font-family: 'Courier New', Courier, monospace;
  }
  body,html {
    margin: 0;
    height: 100%;
  }
  #app {
    display: flex;
    height: 100%;
  }
  .shadow {
    -webkit-box-shadow: 3px 7px 16px -1px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow: 3px 7px 16px -1px #ccc;  /* Firefox 3.5 - 3.6 */
    box-shadow: 3px 7px 16px -1px #ccc;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
  }
  .center{
    position: relative;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%)
  }
</style>
