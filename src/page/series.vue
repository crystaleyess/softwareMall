<template>
  <div class="series">
    <ul>
      <li @click="subjectRoute(item.id)" v-for="(item, index) in subjectList" :key="index">
        <el-image :src = "Global.subBaseUrl + item.cover" :data-id = "item.id"
          style="width: 200px;height: 126px;"></el-image>
        <div>
          <span :data-id = "item.id">{{item.name}}</span>
          <span :data-id = "item.id">{{item.time}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {getJson} from '@/utils/getJsonData.js'
export default {
  data: function () {
    return {
      subjectList: []
    }
  },
  mounted: function () {
    getJson('/static/fakeData/subject.json').then((res) => {
      this.subjectList = res.data
    })
  },
  methods: {
    subjectRoute: function (id) {
      this.$router.push({path: '/app/panel/subject', query: {subjectId: id}})
    }
  }
}
</script>

<style scoped>
  .series {
    width: 900px;
    margin: 25px auto;
    font-size: 12px;
  }
  .el-image {
    border-radius: 4px
  }
  ul {
    border-left: 1px solid #e3e3e3;
    display: table
  }
  ul > li:nth-child(-n+3) {
    border-top: 1px solid #e3e3e3;
  }
  ul > li {
    cursor: pointer;
    display: inline-block;
    padding: 25px 35px;
    border-right: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3
  }

  li span:first-child {
    float: left;
    font-weight: bold
  }
  li span:last-child {
    float: right;
    color: #A6A6A6
  }
</style>
