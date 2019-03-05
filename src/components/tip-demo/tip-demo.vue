<template>
  <div class="tip-demo" style="padding: 10px;">
    <cube-button
      :inline="true"
      :outline="true"
      :primary="true"
      @click="$refs.tip.show()">Show Tip
    </cube-button>
    <cube-tip
      ref="tip"
      direction="bottom"
      style="left:123px; top:50px">Tip
    </cube-tip>
    <div class="test" style="background-color: antiquewhite;margin: 20px;">
      <p class="tip-eg">
        <span ref="lslsl" style="display: inline-block;padding: 5px 10px; border: 1px orange solid;margin: 20px;">cube-ui</span>
      </p>
    </div>
    <cube-tip
      ref="tip2"
      :direction="direction"
      :style="tipStyle"
      @close="close"
      @click="clickHandler">
      <div>我是弹窗</div>
    </cube-tip>
    <cube-button @click="showTip('bottom')" style="margin-bottom: 10px;">top</cube-button>
    <cube-button @click="showTip('top')" style="margin-bottom: 10px;">bottom</cube-button>
    <cube-button @click="showTip('right')" style="margin-bottom: 10px;">left</cube-button>
    <cube-button @click="showTip('left')" style="margin-bottom: 10px;">right</cube-button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'tip-demo',
    data () {
      return {
        direction: '',
        tipStyle: ''
      }
    },
    methods: {
      showTip (direction) {
        console.log(this.$refs.lslsl.offsetLeft)
        console.log(this.$refs.lslsl.offsetTop)
        this.direction = direction
        this.$refs.tip2.show()

        switch (direction) {
          case 'top':
            this.tipStyle = 'left: ' + this.$refs.lslsl.offsetLeft + 'px; top:' + this.$refs.lslsl.offsetTop + 'px;'
            break
          case 'bottom':
            this.tipStyle = 'left: ' + this.$refs.lslsl.offsetLeft + 'px; top:' + this.$refs.lslsl.offsetTop + 'px;'
            break
          case 'left':
            this.tipStyle = 'left: ' + this.$refs.lslsl.offsetLeft + 'px; top:' + this.$refs.lslsl.offsetTop + 'px;'
            break
          case 'right':
            this.tipStyle = 'left: ' + this.$refs.lslsl.offsetLeft + 'px; top:' + this.$refs.lslsl.offsetTop + 'px;'
            break
        }
        console.log(this.tipStyle)
      },
      close () {
        console.log('click close button')
      },
      clickHandler () {
        console.log('click tip area')
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
