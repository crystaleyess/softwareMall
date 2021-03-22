<template>
  <div class="soft-contain">
    <el-card shadow="hover">
      <div slot="header">
        <div style="text-align: left;">{{name}}</div>
      </div>
      <div v-if="isShow" id="content">
       <el-row v-for="row in rows" :key="'row_'+row">
         <el-col v-for="(item, index) in softList.slice(start = (row-1)*rowNums , end = row*rowNums>isShow?isShow:row*rowNums)"
          :key="index"
          :span="spanValue">
          <el-image :src="baseUrl+item.logo" :style="{width: imgWidth+'px'}"></el-image>
          <div>
            <span>{{item.name}}</span>
            <span>{{item.category}}</span>
          </div>
        </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
export default{
  name: 'SoftContainer',
  props: {
    softList: Array,
    baseUrl: String,
    name: String,
    rowNums: Number,
    imgWidth: {
      type: Number,
      default: 60
    }
  },
  data: function () {
    return {
      subSoftList: this.softList,
      selfSpan: 4
    }
  },
  computed: {
    isShow: function () {
      return this.softList.length
    },
    rows: function () {
      return Math.ceil(this.isShow / this.rowNums)
    },
    spanValue: function () {
      return Math.floor(24 / this.rowNums)
    }
  },
  methods: {}
}
</script>

<style scoped>
  #content {
    margin: 20px 0px;
    text-align: center;
  }
  #content .el-row:not(:last-child){
    margin-bottom: 20px;
  }
  .el-image, .el-image~div span {
    cursor: pointer;
  }
  /*  文本内容超出一行显示省略号 */
  .el-image~div span {
    display: inline-block;
    width: 75%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
  }
  .el-image~div span:hover {
    font-weight: bold;
  }
  .el-image~div span:nth-child(2){
    color: #727272;
  }
</style>
