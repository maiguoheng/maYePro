<template>
  <div id="login" >
    <div class="a">
      <div class="login"></div>
    </div>
  </div>
</template>

<script>
import abc from '@components/abc.vue'

export default {
  name: 'login',
  components: {
  },
  data(){
    return {
      bgImg:require('@assets/img/bg.jpg'),
      msg:'前修改'
    }
  }
}
</script>

<style lang="scss" scoped>
.a{
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  .login{

  }
}
#login{
  width: 100vw;
  height: 100vh;
  background: url('../assets/img/bg.jpg') center/cover;
}
</style>
