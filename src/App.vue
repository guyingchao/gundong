<template>
  <div id="app">
    <Gohead></Gohead>
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
import Gohead from './components/headtail/head.vue'
export default {
  components: {Gohead},
  name: 'App'
}
</script>

<style>
@import 'assets/icon/iconfont.css';
*{margin:0;padding:0}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0
}
</style>
