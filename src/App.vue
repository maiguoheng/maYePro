<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import abc from './components/abc.vue'

export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      msg:'前修改'
    }
  }
}
</script>

<style>
body{
  margin:0;
  padding:0
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding:0;
  margin:0;
}
</style>
