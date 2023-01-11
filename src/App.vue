<template>
  <div id="app">
    <Header/>
<!-- 路由组件位置-->
    <router-view></router-view>
<!-- v-show绑定了路由的isShow属性 是为了事路由为登录和注册时 Footer组件不显示-->
    <Footer v-show="$route.meta.isShow"/>
  </div>
</template>

<script>

import Header from "@/components/Header/index.vue";
import Footer from "@/components/Footer/index.vue";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    console.log('@route',this.$route)
  }
}
</script>

<style>
</style>
