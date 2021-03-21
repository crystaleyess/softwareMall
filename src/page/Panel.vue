<template>
  <div class='pannel'>
    <el-row :gutter="8">
      <el-col :span="4" class="category">
        <div v-for="(item, index) in categoryList" :key='index'>
          <el-row :gutter="10">
            <el-col :span="12">{{categoryName[index]}}</el-col>
          </el-row>
          <el-divider></el-divider>
          <el-row :gutter="10" @click.native='selectItem($event), routerGo($event)'>
          <el-col :span="12">
            <a :class="{'not-active': subItem.forbidden, 'category-item': true}"
              v-for="(subItem, subIndex) in item.filter((value, index) => index%2==0)"
              :key="subIndex"
              :style="subItem.forbidden ? {} : {'font-weight': subItem.select ? 'bold' : 'normal'}"
              :data-index="subItem.index">
              {{subItem.name}}
            </a>
           </el-col>
          <el-col :span="12">
            <a :class="{'not-active': subItem.forbidden,'category-item': true}"
              v-for="(subItem, subIndex) in item.filter((value, index) => index%2!==0)"
              :style="subItem.forbidden ? {} : {'font-weight': subItem.select ? 'bold' : 'normal'}"
              :data-index="subItem.index"
              :key='subIndex'>
              {{subItem.name}}
            </a>
          </el-col>
        </el-row>
        </div>
      </el-col>
      <el-col :span="15">
        <router-view></router-view>
      </el-col>
      <el-col :span="5">
        <news-contain :topWords="temptopwords"></news-contain>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import newsContain from '@/components/NewsContainer'
import {getBaiduTop} from '@/api/thirdService.js'
import {getJson} from '@/utils/getJsonData.js'
export default{
  name: 'pannel',
  components: {
    newsContain
  },
  data: function () {
    return {
      selectedIndex: '',
      categoryName: ['软件分类', '游戏分类'],
      categoryList: [],
      topWords: [],
      temptopwords: [
        {topic: '外交部谈中美高层对话:将表明立场', trend: 'rise'},
        {topic: '中美军舰11日同时现身台东兰屿外海', trend: 'rise'},
        {topic: '延迟退休实施原则公布', trend: 'false'},
        {topic: '婴幼儿戴儿童口罩有窒息风险 ', trend: 'false'},
        {topic: '2021考研国家线发布', trend: 'true'}
      ]
    }
  },
  created: function () {
    // 通过JSON文件获取分类的数据，并初始化。
    getJson('/static/fakeData/category.json').then((res) => {
      var temp = (res.data).map((row) => {
        return (row).map((item) => {
          item.select = false
          return item
        })
      })
      this.categoryList = temp
    })
  },
  methods: {
    selectItem: function (event) {
      var target = event.target
      if (target.className.indexOf('not-active') > 0) {
        return false
      }
      if (target.nodeName.toLowerCase() === 'a' && this.selectedIndex !== target.dataset.index) {
        var currentIndex = target.dataset.index
        this.changeSelected(currentIndex, true)
        if (this.selectedIndex !== '') {
          this.changeSelected(this.selectedIndex, false)
        }
        this.selectedIndex = currentIndex
      }
    },
    changeSelected: function (index, status) {
      this.categoryList[parseInt(index.split('_')[0])][parseInt(index.split('_')[1])].select = status
    },
    routerGo: function (event) {
      var target = event.target
      if (target.className.indexOf('not-active') > 0) {
        return false
      } else {
        this.$router.push({path: '/app/panel/category', query: {category: target.dataset.index, name: target.textContent.trim()}})
      }
    },
    getTopWords: function () {
      getBaiduTop({
        key: '2b1b73e3ba66f484'
      }, (resData) => {
        if (resData.success === 1) {
          this.topwords = resData.result.topwords.filter((value, index) => index < 10).map((item) => ({
            topic: item.keyword,
            trend: item.trend
          }))
        }
        console.log(this.topwords)
      })
    }
  },
  watch: {
    $route: {
      deep: true,
      handler: function (to, from) {
        if (!('category' in to.query) && this.selectedIndex !== '') {
          this.changeSelected(this.selectedIndex, false)
          this.selectedIndex = ''
        }
      }
    }
  }
}
</script>

<style>
</style>
