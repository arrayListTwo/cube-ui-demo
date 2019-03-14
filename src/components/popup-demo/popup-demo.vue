<template>
  <div class="popup-demo">
    <cube-popup type="my-popup" ref="myPopup" :mask="true"
                content="<i>my content</i>"
                :mask-closable="true"
                :position='position'>
    </cube-popup>
    <cube-button @click="showPopup('myPopup')">
      Show Popup
    </cube-button>
    <my-extend-popup :content="content" ref="extendPopup">
    </my-extend-popup>
    <cube-button @click="$refs.extendPopup.show()">
      Extend popup
    </cube-button>
  </div>
</template>

<script type="text/ecmascript-6">
  import MyExtendPopup from '@/components/my-extend-popup'

  const positions = ['top', 'right', 'bottom', 'left', 'center']
  let cur = 0
  export default {
    name: 'popup-demo',
    data () {
      return {
        position: '',
        content: 'click here hide'
      }
    },
    methods: {
      showPopup (ref) {
        this.position = positions[cur++]
        if (cur === positions.length) {
          cur = 0
        }
        const component = this.$refs[ref]
        component.show()
        setTimeout(() => {
          component.hide()
        }, 2000)
      }
    },
    components: {
      MyExtendPopup
    }
  }
</script>

<style lang="stylus" scoped>
  .popup-demo
    .content
      >
      div
        margin: 10px 0

  >>> .cube-my-popup
    .cube-popup-center
      .cube-popup-content
        padding: 20px

    .cube-popup-content
      padding: 80px 20px
      color: #fff
      background-color: rgba(0, 0, 0, .8)

  .cube-extend-popup
    .cube-extend-popup-content
      padding: 20px
      color: #fff
      background-color: rgba(0, 0, 0, .8)

  .cube-btn
    margin-bottom: 10px
</style>
