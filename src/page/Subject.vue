<template>
  <div class = "subject-com">
    <el-row>
      <el-image v-if="currentSubject.cover"  :src="Global.subBaseUrl + currentSubject.cover"></el-image>
    </el-row>
  </div>
</template>

<script>
import {getJson} from '@/utils/getJsonData.js'
export default{
  data: function () {
    return {
      currentSubject: {
        name: '',
        id: '',
        cover: ''
      }
    }
  },
  computed: {
    currentSubjectSoft: function () {
      if (this.currentSubject.id) {
        console.log('=====>')
      }
      return []
    }
  },
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
      handler: (val, old) => {
        console.log('=====>', val)
        console.log('=====>', old)
        if (!old.cover) {
          alert('1111')
        }
      }
    }
  }
}
</script>

<style>
</style>
