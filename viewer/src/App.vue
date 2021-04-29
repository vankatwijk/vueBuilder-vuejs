<template>
  <div id="app">
    <PageComponent />
  </div>
</template>

<script>
//https://vuejs.org/v2/guide/components-registration.html
//https://harin76.medium.com/generate-vue-js-components-from-a-json-javascript-dom-structure-a76534478d15
//http://jsbin.com/teqoxi/edit?html,js,output

import PageComponent from './components/PageComponent.vue'

export default {
  name: 'App',
  components: {
    PageComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
