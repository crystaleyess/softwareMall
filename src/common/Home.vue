<template>
  <div class="wrapper">
    <app-header></app-header>
    <app-nav></app-nav>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>
<script>
import appHeader from './Header.vue'
import appNav from './Navigator.vue'
import appFooter from './Footer.vue'
export default{
  name: 'home',
  data: function () {
    return {}
  },
  components: {
    appHeader,
    appNav,
    appFooter
  }
}
</script>
<style>
</style>
