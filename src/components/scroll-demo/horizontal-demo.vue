<template>
  <div class="horizontal-demo">
    <cube-scroll
      ref="scroll"
      :data="items"
      direction="horizontal"
      class="horizontal-scroll-list-wrap">
      <ul class="list-wrapper">
        <li v-for="(item, index) in items" :key="index" class="list-item">{{ item }}</li>
      </ul>
    </cube-scroll>
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
    name: 'horizontal-demo',
    data () {
      return {
        items: _data
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .horizontal-scroll-list-wrap
    border: 1px solid rgba(0, 0, 0, 0.1)
    border-radius: 5px

    >>> .cube-scroll-content
      display: inline-block

    .list-wrapper
      padding: 0 10px
      line-height: 60px
      white-space: nowrap

    .list-item
      display: inline-block
</style>
