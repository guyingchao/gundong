<template>
  <div id="app">
    <Gohead></Gohead>
    <!--<img src="./assets/logo.png">-->
    <router-view/>
    <tail></tail>
  </div>
</template>

<script>
import Gohead from './components/headtail/head.vue'
import tail from './components/headtail/tail.vue'
export default {
  components: {Gohead, tail},
  name: 'App'
}
</script>

<style>
@import 'assets/icon/iconfont.css';
/*全局引入方块字体*/
@font-face {
  font-family: myfont;
  src: url('./fonts/6PX2BUS.ttf');
}
body{
  background-color: #F4F5F7;
}
*{margin:0;padding:0;
/*改变盒模型 width包含 content padding border*/
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0
}
thead tr{
  background-image: linear-gradient(to right, #85cffa, rgb(48,166,253))!important;
  color: #ffffff;
}
thead tr th{
  background-color: transparent!important;
}
  a{text-decoration: none;}
</style>
