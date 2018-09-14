<template>
  <div id="app">
    <!-- 存储缓存的组件 -->
    <transition name="fade" mode="">
        <keep-alive>
            <router-view v-if="$route.meta.keepalive"></router-view>
        </keep-alive>
    </transition>
    <!-- 存储不缓存的组件 -->
    <transition name="fade" mode="">
      <router-view v-if="!$route.meta.keepalive"></router-view>
    </transition>
    <mynav></mynav>
  </div>
</template>

<script>
import mynav from './base/mynav.vue'
export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
    mynav
  }
}
</script>

<style>
*{margin:0;padding:0}
ul,li{list-style:none}
a{text-decoration:none}
input,button{
  -webkit-appearance:none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50;
  margin-top: 60px; */
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
