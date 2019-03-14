<template>
  <div class="picker-demo">
    <cube-button @click="showPicker">Picker</cube-button>
    <br>
    <cube-button @click="showMutilPicker">Multi-column Picker</cube-button>
    <br>
    <cube-button @click="showUpdatePropsPicker">Use $updateProps</cube-button>
  </div>
</template>

<script type="text/ecmascript-6">
  const column1 = [ { text: '剧毒', value: '剧毒' }, { text: '蚂蚁', value: '蚂蚁' },
    { text: '幽鬼', value: '幽鬼' } ]
  const column2 = [ { text: '剧毒', value: '剧毒' }, { text: '蚂蚁', value: '蚂蚁' },
    { text: '幽鬼', value: '幽鬼' } ]
  const column3 = [ { text: '输出', value: '输出' }, { text: '控制', value: '控制' },
    { text: '核心', value: '核心' }, { text: '爆发', value: '爆发' } ]
  const column4 = [ { text: '梅肯', value: '梅肯' }, { text: '秘法鞋', value: '秘法鞋' },
    { text: '假腿', value: '假腿' }, { text: '飞鞋', value: '飞鞋' } ]
  const column5 = [ { text: '剧毒', value: '剧毒' }, { text: '蚂蚁', value: '蚂蚁' },
    { text: '幽鬼', value: '幽鬼' } ]
  const column6 = [ { text: '输出', value: '输出' }, { text: '控制', value: '控制' },
    { text: '核心', value: '核心' }, { text: '爆发', value: '爆发' } ]
  const column7 = [ { text: '梅肯', value: '梅肯' }, { text: '秘法鞋', value: '秘法鞋' },
    { text: '假腿', value: '假腿' }, { text: '飞鞋', value: '飞鞋' } ]
  export default {
    name: 'picker-demo',
    methods: {
      showPicker () {
        console.log(column1)
        if (!this.picker) {
          this.picker = this.$createPicker({
            title: 'Picker',
            data: [ column1 ],
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }
        this.picker.show()
      },
      selectHandle (selectedVal, selectedIndex, selectedText) {
        this.$createDialog({
          type: 'warn',
          content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
          icon: 'cubeic-alert'
        }).show()
      },
      cancelHandle () {
        this.$createToast({
          type: 'correct',
          txt: 'Picker canceled',
          time: 1000
        }).show()
      },
      showMutilPicker () {
        if (!this.mutiPicker) {
          this.mutiPicker = this.$createPicker({
            title: 'Multi-column Picker',
            data: [ column2, column3, column4 ],
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }
        this.mutiPicker.show()
      },
      showUpdatePropsPicker () {
        console.log(this.updatePropsPicker)
        if (!this.updatePropsPicker) {
          this.updatePropsPicker = this.$createPicker({
            title: 'Use $updateProps',
            data: [ column5 ],
            selectedIndex: [ 0 ],
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle,
            onChange: this.changeHandle
          })
        }
        this.updatePropsPicker.show()
        setTimeout(() => {
          this.updatePropsPicker.$updateProps({
            title: 'Updated',
            data: [ column5, column6, column7 ],
            selectedIndex: [ 1, 2, 3 ]
          })
        }, 1000)
      },
      changeHandle (index, selectedIndex) {
        console.log(index + '   -   ' + selectedIndex)
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
