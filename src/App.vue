<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {
    $route: {
      handler: function (to, from) {
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
      }
    }
  }
}
</script>
<style>
</style>
