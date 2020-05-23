<template>
  <div id="app">
    <abc :msg.sync="msg"></abc>
    fromHomePage
    <router-view/>
  </div>
</template>

<script>
import abc from './components/abc.vue'

export default {
  name: 'App',
  components: {
    abc
  },
  data(){
    return {
      msg:'前修改'
    }
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
