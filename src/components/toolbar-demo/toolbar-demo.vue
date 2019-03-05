<template>
  <div class="toolbar-demo">
    <cube-toolbar
      :actions="actions"
      @click="clickHandler"
      :more-actions="moreActions"
      @more-click="moreClickHandler"></cube-toolbar>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'toolbar-demo',
    data () {
      return {
        money: 10,
        actions: [
          {
            text: '完成订单',
            action: 'showText'
          },
          {
            text: '打车来接',
            checked: false,
            type: 'checkbox'
          },
          {
            text: '一口价<span class="orange">10元</span>',
            action: 'moreMoney'
          }
        ],
        moreActions: [
          {
            text: '操作a',
            action: 'showText'
          },
          {
            text: '操作b',
            action: 'showText'
          },
          {
            text: '操作c',
            icon: 'cubeic-right',
            action: 'showText'
          }
        ]
      }
    },
    methods: {
      showText (item) {
        this.$createToast({
          type: 'correct',
          txt: 'clicked ' + item.text,
          time: 1000
        }).show()
      },
      moreMoney (item) {
        this.money += 10
        item.text = '一口价<span class="orange">' + this.money + '元</span>'
      },
      clickHandler (item) {
        if (item.action) {
          this[item.action](item)
        }
      },
      moreClickHandler (active) {
        console.log(active)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .toolbar-demo
    >>> .orange
      color: #fc9153
      font-weight: 700
</style>
