<template>
  <div class="header-box">
    <div>
      <el-image :src = "iconUrl" style="width: 85px;"></el-image>
      <div><h3>{{headCh}}</h3><h4>{{headEg}}</h4></div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'Header',
  data: function () {
    return {
      'iconUrl': '/static/img/title_icon.png',
      'headCh': '软件应用商城',
      'headEg': 'Software Mall'
    }
  }
}
</script>

<style scoped>
  .header-box{
    height: 120px;
    background-color: #ecf5f7;
  }
  .header-box>div:first-child {
    padding: 20px 0px 0px 155px;
    color: #737373
  }
  .header-box>div:first-child>*{
    display: inline-block;
    vertical-align: middle
  }
</style>
