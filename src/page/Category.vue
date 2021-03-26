<template>
  <div class="category">
    <soft-container :softList = "softwareList" :rowNums = '6'
      :name="currentCategory.name"
      :baseUrl = "Global.logoBaseUrl">
    </soft-container>
  </div>
</template>

<script>
import {getJson} from '@/utils/getJsonData.js'
import softContainer from '@/components/SoftContainer.vue'
export default {
  name: 'category',
  components: {
    softContainer
  },
  data: function () {
    return {
      categoryIndex: '',
      currentCategory: {
        name: '',
        index: ''
      },
      softwareList: []
    }
  },
  mounted: function () {
    this.init(this.$route)
  },
  methods: {
    init: function (to) {
      this.categoryIndex = to.query.category
      getJson('/static/fakeData/category.json').then((res) => {
        var pos = parseInt(this.categoryIndex.split('_')[0])
        this.currentCategory = res.data[pos].filter((item) => item.index === this.categoryIndex).map((item) => ({
          name: item.name,
          index: item.index
        }))[0]
      })
      getJson('/static/fakeData/software.json').then((res) => {
        this.softwareList = res.data.filter((item) => item.categoryIndex.indexOf(this.categoryIndex) > -1)
      })
    }
  },
  watch: {
    $route: {
      deep: true,
      handler: function (to, from) {
        this.init(to)
      }
    }
  }
}
</script>

<style>
  .category {
    margin-top: 20px;
  }
</style>
