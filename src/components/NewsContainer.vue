<template>
  <div class="new-contain">
    <el-card>
      <div slot="header">
        <span>新闻资讯</span>
      </div>
      <div v-if="twLength" class="new-content" @click="detailTopic($event)">
        <div v-for="(item, index) in topWords" :key="index">
          <el-row>
            <el-col :span="2">{{index + 1}}</el-col>
            <el-col :span="22">
              <span id='content'>{{item.topic}}</span>
              <img width="12px" :src="iconBaseUrl+(item.trend=='rise'?'up.png':'down.png')"/>
            </el-col>
          </el-row>
          <div style="height:1px;margin: 5px 0px;border:none;" />
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'newsConatainer',
  props: {
    topWords: Array
  },
  data: function () {
    return {
      iconBaseUrl: this.Global.iconBaseUrl
    }
  },
  computed: {
    twLength: function () {
      return this.topWords.length
    }
  },
  methods: {
    detailTopic: function (ev) {
      if (ev.target.tagName.toLocaleLowerCase() === 'span') {
        window.open('https://www.baidu.com/s?wd=' + ev.target.textContent, '_blank')
      }
    }
  }
}
</script>

<style scoped>
  .new-content {
    color: #737373;
  }
  .el-row .el-col:nth-child(2) span{
    cursor: pointer;
  }
  .new-content>div:nth-child(1) .el-col:nth-child(1){
    color: #fe2d46;
  }
  .new-content>div:nth-child(2) .el-col:nth-child(1){
    color: #f60;
  }
  .new-content>div:nth-child(3) .el-col:nth-child(1){
    color: #faa90e;
  }
</style>
