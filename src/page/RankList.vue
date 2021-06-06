<template>
  <div>
    <ul>
      <li v-for="(item, index) in ranks" :key = 'index'>
        <div style="width: 80%; display: inline-block;">
          <span>{{index + 1}}.</span>
          <span>{{item.name}}</span>
          <span>{{item.mainCategory}}</span>
        </div>
        <div class = "counts">
          <span>下载量：{{item.download}}</span>
        </div>
        <hr/>
      </li>
      <div v-if = "easier" @click="swap(1)" style="text-align: center;color: #727272; margin-top: 25px;">
        <el-image style="width: 30px;vertical-align: middle;" :src="Global.iconBaseUrl+'more.png'"></el-image>
        <span>查看更多</span>
      </div>
      <div v-else>收起</div>
    </ul>
  </div>
</template>

<script>
import {getJson} from '@/utils/getJsonData.js'
export default{
  name: 'RankList',
  data: function () {
    return {
      ranks: [],
      easier: true
    }
  },
  mounted: function () {
    // 通过JSON文件获取分类的数据，并初始化。
    let tmp = []
    getJson('/static/fakeData/software.json').then((res) => {
      tmp = res.data
      return getJson('/static/fakeData/rank.json')
    }).then((res) => {
      this.ranks = tmp.filter((item) => res.data.indexOf(item.id) !== -1)
    })
  },
  methods: {

  }
}
</script>

<style scoped>
  ul {
    margin: 3% 20% 0 20%;
    width: 60%;
  }
  hr {
    border: 0;
    height: 1px;
    background-color: #C6C5C4;
    opacity: 0.6
  }
  li {
    font-size: 20px;
    line-height: 3;
    list-style: none
  }
  li span:nth-child(1) {
    color: #A6A6A6;
  }
  li span:nth-child(2) {
    color: #666666;
    margin-left: 10px
  }
  li span:nth-child(3) {
    color: rgb(253, 122, 96);
    font-size: 14px
  }
  li:nth-child(1) span:nth-child(1){
    font-size: 22px;
    color: rgb(255, 0, 61)
  }
  li:nth-child(2) span:nth-child(1){
    font-size: 21px;
    color: rgb(255, 0, 61)
  }
  li:nth-child(3) span:nth-child(1){
    font-size: 20px;
    color: rgb(255, 167, 61)
  }
  .counts {
    display: inline-block;
  }
  .counts span{
    font-size: 12px !important;
    color: #A6A6A6 !important;
  }
</style>
