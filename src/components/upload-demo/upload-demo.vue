<template>
  <div class="upload-demo">
    <cube-upload
      action="//jsonplaceholder.typicode.com/photos/"
      :simultaneous-uploads="1"
      @files-added="filesAdded"
    ></cube-upload>
    <br>
    <cube-upload
      ref="upload"
      :action="action"
      :simultaneous-uploads="1"
      :process-file="processFile"
      @file-submitted="fileSubmitted"></cube-upload>
  </div>
</template>

<script type="text/ecmascript-6">
  import compress from '@/common/image'

  export default {
    name: 'upload-demo',
    data () {
      return {
        action: {
          target: '//jsonplaceholder.typicode.com/photos/',
          prop: 'base64Value'
        }
      }
    },
    methods: {
      filesAdded (files) {
        let hasIgnore = false
        const maxSize = 1 * 1024 * 1024 // 1M
        for (let k in files) {
          const file = files[k]
          if (file.size > maxSize) {
            file.ignore = true
            hasIgnore = true
          }
        }
        hasIgnore && this.$createToast({
          type: 'warn',
          time: 1000,
          txt: 'You selected >1M files'
        }).show()
      },
      processFile (file, next) {
        compress(file, {
          compress: {
            width: 1600,
            height: 1600,
            quality: 0.5
          }
        }, next)
      },
      fileSubmitted (file) {
        file.base64Value = file.file.base64
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
