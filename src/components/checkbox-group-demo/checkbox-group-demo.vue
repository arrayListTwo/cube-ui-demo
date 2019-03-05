<template>
  <div class="checkbox-group-demo">
    <div class="wrapper">
      <cube-checkbox-group
        v-model="checkList"
        :options="options"
        :min="2"></cube-checkbox-group>
    </div>
    <p>CheckList value: {{checkList}}</p>
    <div class="wrapper">
      <cube-checkbox-group
        v-model="checkList"
        :options="options"
        :horizontal="true"
        shape="square"
        :hollow-style="true"></cube-checkbox-group>
    </div>
    <div class="wrapper">
      <cube-checkbox-group v-model="checkList">
        <cube-checkbox position="right" option="1"><i>Checkbox 1</i></cube-checkbox>
      </cube-checkbox-group>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'checkbox-group-demo',
    data () {
      return {
        checkList: ['1', '4'],
        options: [
          '1',
          '2',
          {
            label: '3',
            value: '3',
            disabled: true
          },
          {
            label: '4',
            value: '4',
            disabled: true
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .checkbox-group-demo
    padding: 10px

    .wrapper
      background: #fff
      padding: 15px
      margin: 10px 0
</style>
