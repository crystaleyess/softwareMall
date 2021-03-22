<template>
  <div class = "subject-com">
    <el-row>
      <el-image v-if="currentSubject.cover"  :src="Global.subBaseUrl + currentSubject.cover"></el-image>
    </el-row>
    <el-row>
      <soft-container :name="currentSubject.name" :rowNums = '6'
        :softList="this.currentSoftList"
        :baseUrl="Global.logoBaseUrl">
      </soft-container>
    </el-row>
  </div>
</template>

<script>
import {getJson} from '@/utils/getJsonData.js'
import softContainer from '@/components/SoftContainer'
export default{
  components: {
    softContainer
  },
  data: function () {
    return {
      currentSubject: {
        name: '',
        id: '',
        cover: ''
      },
      currentSoftList: []
    }
  },
  computed: {},
  mounted: function () {
    var subjectId = this.$route.query.subjectId
    getJson('/static/fakeData/subject.json').then((res) => {
      this.currentSubject = res.data.filter((item) => item.id === subjectId)[0]
    })
  },
  methods: {
  },
  watch: {
    currentSubject: {
      deep: true,
      handler: function (val, old) {
        if (val.id) {
          getJson('/static/fakeData/software.json').then((res) => {
            this.currentSoftList = res.data.filter((item) => item.subjectId === val.id)
          })
        }
      }
    }
  }
}
</script>

<style>
</style>
