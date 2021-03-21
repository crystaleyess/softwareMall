<template>
  <div class="pannel-footer">
    <el-row :gutter="10">
      <el-col :span="8">
        <h5>特别鸣谢</h5>
        <el-link :underline="false"
          v-for="(item, index) in grateful"
          :key="index"
          target="_blank"
          :href="item.url">
          {{item.name}}
         </el-link>
      </el-col>
      <el-col :span="8">
        <h5>网站推荐</h5>
        <el-link :underline="false"
          v-for="(item, index) in recommend"
          :key="index"
          target="_blank"
          :href="item.url">
          {{item.name}}
         </el-link>
      </el-col>
      <el-col :span="8">
        <h5>在线工具</h5>
        <el-link :underline="false"
          v-for="(item, index) in utils"
          :key="index"
          target="_blank"
          :href="item.url">
          {{item.name}}
         </el-link>
      </el-col>
    </el-row>
    <el-row>
      <div v-for="(itemArray,index) in infor" :key="'row' + index">
        <span id='item' v-for="(item, index) in itemArray" :key="index">
          <span>
            <img v-if="item.icon" :src="iconBaseUrl+item.icon" width="10px"/></span>
            <span>{{item.pre}}:</span>
            <span id = 'item-aft' v-html="item.aft">
          </span>
        </span>
      </div>
    </el-row>
    <div>
      <el-image :src="Global.iconBaseUrl+'report.png'" @click='report'></el-image>
    </div>
  </div>
</template>

<script>
export default{
  name: 'appFooter',
  data: function () {
    return {
      iconBaseUrl: '../../static/img/thirdPart/',
      grateful: [
        {
          name: '小米应用商城',
          url: 'https://app.mi.com/'
        },
        {
          name: '百度图库',
          url: 'https://image.baidu.com/'
        },
        {
          name: '阿里矢量图库',
          url: 'https://www.iconfont.cn/'
        },
        {
          name: 'Element团队',
          url: 'https://element.eleme.cn/#/zh-CN'
        }
      ],
      recommend: [
        {
          name: 'Vue.js',
          url: 'https://cn.vuejs.org/v2/guide/'
        },
        {
          name: 'Web技术文档',
          url: 'https://developer.mozilla.org/zh-CN/'
        },
        {
          name: 'CNode社区',
          url: 'https://cnodejs.org/'
        },
        {
          name: 'BootCDN',
          url: 'https://www.bootcdn.cn/'
        }
      ],
      utils: [
        {
          'name': '检查浏览器兼容性',
          url: 'https://caniuse.com/'
        },
        {
          'name': '图片压缩',
          url: 'https://tinypng.com/'
        },
        {
          'name': '错误监控平台',
          url: 'https://www.fundebug.com/'
        },
        {
          'name': 'Favicon制作',
          'url': 'https://tool.lu/favicon/'
        }
      ],
      infor: [
        [
          {
            pre: '国家违法和不良信息举报电话',
            aft: '12377'
          },
          {
            pre: '互联网违法和不良信息举报中心',
            aft: '<a target="_blank" href="https://www.12377.cn/">https://www.12377.cn/</a>'
          }
        ],
        [
          {
            pre: '制作成员',
            aft: '风且思'
          },
          {
            pre: '联系邮箱',
            aft: 'liuctong@163.com'
          },
          {
            pre: '意向合作',
            aft: '请通过邮件联系'
          }
        ],
        [
          {
            icon: 'copyright.png',
            pre: '声明',
            aft: '此应用商城UI参考小米应用商城，且仅作为模板，供交流学习使用。' +
            '其中，网站的图片素材取自互联网，作者不享有图片的版权。如有侵权，请及时通过邮箱联系我们。另外，因作者个人能力有限，很多地方存在不足之处，              敬请谅解。'
          }
        ],
        [
          {
            'pre': '地址',
            'aft': '北京信息科技大学'
          }
        ]
      ]
    }
  },
  methods: {
    report: function () {
      window.open('https://www.12377.cn', '_blank')
    }
  }
}
</script>

<style scoped>
  h5 {
    font-size: 16px;
    color: #666666;
    margin-bottom: 8px;
  }
  .el-link.el-link--default {
    display: block;
  }
  .el-link.el-link--default:not(:first-child) {
    margin: 4px 0px;
  }
  #item {
    font-size: 12px;
    padding-top: 4px;
    display: inline-block;
    color: #A6A6A6;
  }
  #item span{
    vertical-align: middle;
  }
  #item span:last-child{
    margin: 0 50px 0 10px;
  }
  #item span:last-child>>>a{
    color: #A6A6A6;
    text-decoration: none;
  }
</style>
