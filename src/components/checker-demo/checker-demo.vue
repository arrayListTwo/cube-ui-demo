<template>
  <div class="checker-demo">
    <div class="wrapper">
      <cube-checker
        v-model="checkerValue"
        :options="options"></cube-checker>
    </div>
    <p>Checker value {{checkerValue}}</p>
    <div class="wrapper">
      <cube-checker
        v-model="checkerRadioValue"
        :options="options"
        type="radio"></cube-checker>
    </div>
    <p>Checker value {{checkerRadioValue}}</p>
    <div class="wrapper">
      <cube-checker
        :v-model="checkerList"
        :options="optionList"
        type="radio">
        <cube-checker-item
          v-for="item in optionList"
          :key="item.value"
          :option="item">
          <span class="orange"><i class="cubeic-alert"></i>{{item.text}}</span>
        </cube-checker-item>
      </cube-checker>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'checker-demo',
    data () {
      return {
        checkerValue: [],
        checkerRadioValue: '',
        checkerList: '',
        options: [
          {
            value: 1,
            text: 'red'
          },
          {
            value: 2,
            text: 'yellow'
          },
          {
            value: 3,
            text: 'blue'
          },
          {
            value: 4,
            text: 'green'
          }
        ],
        optionList: [
          {
            value: 0,
            text: 'AAAA'
          },
          {
            value: 1,
            text: 'BBBB'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .checker-demo
    padding: 15px

    .wrapper
      padding: 10px
      border: 1px solid orange
      margin-bottom: 10px
</style>
