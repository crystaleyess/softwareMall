<template>
  <div class="pannel-main">
    <el-row>
      <el-carousel indicator-position="outside" class="carousel">
        <el-carousel-item
          v-for="(item, index) in carouselList" :key="index">
          <img :src = "Global.carBaseUrl+item.name"/>
        </el-carousel-item>
      </el-carousel>
    </el-row>
    <el-row>
      <soft-container :softList = "supermeList" :rowNums = '6'
        :name="'精品推荐'"
        :baseUrl = "Global.logoBaseUrl">
      </soft-container>
    </el-row>
    <el-row :gutter="15">
      <el-col :span="8"
        v-for="(item, index) in mainSubjectList"
        :key="index"
        @click.native = "subjectRoute(item.id)">
        <el-image :src="Global.subBaseUrl+item.cover"></el-image>
        <span>{{item.name}}</span>
      </el-col>
    </el-row>
    <el-row>
      <soft-container :softList = "hotList" :rowNums = '6'
        :name="'热门软件'"
        :baseUrl = "Global.logoBaseUrl">
      </soft-container>
    </el-row>
  </div>
</template>

<script>
import softContainer from '@/components/SoftContainer.vue'
import {getJson} from '@/utils/getJsonData.js'
export default {
  components: {
    softContainer
  },
  data: function () {
    return {
      softwareList: [],
      subjectList: [],
      carouselList: [{name: '1.jpg'}, {name: '2.jpg'}, {name: '3.jpg'}, {name: '4.jpg'}]
    }
  },
  computed: {
    supermeList: function () {
      return this.softwareList.filter((item) => item.recommend === '1')
    },
    hotList: function () {
      return this.softwareList.filter((item) => item.recommend === '2')
    },
    mainSubjectList: function () {
      return this.subjectList.filter((_, index) => index < 3)
    }
  },
  created: function () {
    // 通过axios获取JSON文件中的假数据
    getJson('/static/fakeData/software.json').then((res) => {
      this.softwareList = res.data
    })
    getJson('/static/fakeData/subject.json').then((res) => {
      this.subjectList = res.data
    })
  },
  methods: {
    // router跳转
    subjectRoute: function (id) {
      this.$router.push({path: '/app/panel/subject', query: {subjectId: id}})
    }
  }
}
</script>

<style scoped>
  .el-row:nth-child(3){
    margin: 20px 0px;
    font-size: 14px;
    color: #7f0919
  }
  .el-row:nth-child(3) span{
    cursor: pointer
  }
  /deep/.el-row:nth-child(3) img{
    height: 160px;
    cursor: pointer
  }
</style>
