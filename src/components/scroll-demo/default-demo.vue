<template>
  <div class="defaulu-demo">
    <cube-button
      @click="scrollTo">scroll
    </cube-button>
    <div class="scroll-list-wrap">
      <cube-scroll
        ref="scroll"
        :data="items"
        :options="options"
        @pulling-down="onPullingDown"></cube-scroll>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const _data = [
    '😀 😁 😂 🤣 😃 😄 ',
    '🙂 🤗 🤩 🤔 🤨 😐 ',
    '👆🏻 scroll up/down 👇🏻 ',
    '😔 😕 🙃 🤑 😲 ☹️ ',
    '🐣 🐣 🐣 🐣 🐣 🐣 ',
    '👆🏻 scroll up/down 👇🏻 ',
    '🐥 🐥 🐥 🐥 🐥 🐥 ',
    '🤓 🤓 🤓 🤓 🤓 🤓 ',
    '👆🏻 scroll up/down 👇🏻 ',
    '🦔 🦔 🦔 🦔 🦔 🦔 ',
    '🙈 🙈 🙈 🙈 🙈 🙈 ',
    '👆🏻 scroll up/down 👇🏻 ',
    '🚖 🚖 🚖 🚖 🚖 🚖 ',
    '✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ',
    '😀 😁 😂 🤣 😃 😄 ',
    '🙂 🤗 🤩 🤔 🤨 😐 ',
    '👆🏻 scroll up/down 👇🏻 ',
    '😔 😕 🙃 🤑 😲 ☹️ ',
    '🐣 🐣 🐣 🐣 🐣 🐣 ',
    '👆🏻 scroll up/down 👇🏻 ',
    '🐥 🐥 🐥 🐥 🐥 🐥 ',
    '🤓 🤓 🤓 🤓 🤓 🤓 ',
    '👆🏻 scroll up/down 👇🏻 ',
    '🦔 🦔 🦔 🦔 🦔 🦔 ',
    '🙈 🙈 🙈 🙈 🙈 🙈 ',
    '👆🏻 scroll up/down 👇🏻 ',
    '🚖 🚖 🚖 🚖 🚖 🚖 ',
    '✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 '
  ]
  export default {
    name: 'default-demo',
    data () {
      return {
        items: _data,
        options: {
          scrollbar: true,
          startY: 0,
          pullDownRefresh: {
            threshold: 60,
            txt: 'success'
          }
        }
      }
    },
    methods: {
      scrollTo () {
        this.$refs.scroll.scrollTo(0, -200, 700)
      },
      onPullingDown () {
        console.log('pull down')
        setTimeout(() => {
          this.$refs.scroll.forceUpdate()
          console.log('force update')
        }, 1000)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .scroll-list-wrap
    position: fixed
    top: 220px
    bottom: 0
    right: 0
    left: 0
</style>
