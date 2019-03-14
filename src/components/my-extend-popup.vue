<template>
  <cube-popup type="my-extend-popup" ref="popup">
    <div class="cube-extend-popup-content" @click="hide">
      <slot>{{content}}</slot>
    </div>
  </cube-popup>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'my-extend-popup',
    props: {
      content: {
        type: String
      }
    },
    methods: {
      show () {
        this.$refs.popup.show()
      },
      hide () {
        this.$refs.popup.hide()
        this.$emit('hide')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  >>> .extend-popup
    .extend-popup-content
      padding: 20px
      color: #fff
      background-color: rgba(0, 0, 0, .8)
</style>
