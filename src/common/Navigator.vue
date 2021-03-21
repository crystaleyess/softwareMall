<template>
  <div>
    <el-menu
      :default-active="activeNav"
      class="el-menu"
      mode="horizontal"
      background-color="#ff644F"
      text-color="#fff"
      router
      active-text-color="#ffffaf">
      <span v-for = "(item, index) in naviList" :key = 'index' style="display: inline-block;">
        <template v-if = "item.sub">
          <el-submenu :index="item.index">
            <template slot="title" style="width: 500px">{{item.title}}</template>
            <span v-for="(subItem, subIndex) in item.sub" :key = 'subIndex'>
              <el-menu-item :index="subItem.title">{{subItem.title}}</el-menu-item>
            </span>
          </el-submenu>
        </template>
        <template v-else>
            <el-menu-item :index="item.index">{{item.title}}</el-menu-item>
        </template>
      </span>
    </el-menu>

  </div>
</template>

<script>
export default{
  name: 'Navigator',
  data: function () {
    return {
      'activeNav': '/app/panel',
      'naviList': [
        {
          title: '首页',
          index: '/app/panel'
        },
        {
          title: '系列专题',
          index: '/app/series'
        },
        {
          title: '下载排行',
          index: '/app/rankList'
        },
        {
          title: '用户中心',
          index: '/app/userCenter'
        }
      ]
    }
  },
  mounted: function () {
    this.activeNav = this.getIndex(this.$route.path)
  },
  methods: {
    getIndex: function (path) {
      var pathList = path.split('/')
      pathList = pathList.filter((value, index) => index === 1 || index === 2)
      return '/' + pathList.join('/')
    }
  }
}
</script>

<style scoped>
  .el-menu {
    padding-left: 160px;
  }
  .el-menu-item {
    font-size: 18px;
  }
  /deep/ .el-submenu__icon-arrow {
    display: none
  }
</style>
