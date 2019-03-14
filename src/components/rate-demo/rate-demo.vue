<template>
  <div class="rate-demo">
    <cube-rate v-model="value"></cube-rate>
    <br>
    <cube-rate v-model="value" :disabled="disabled" :max="max"
               :justify="justify"></cube-rate>
    <br>
    <cube-rate v-model="value">
      <cube-rate-item v-for="n in max"
                      :key="n" :value="value" :index="n">
        <!--定制星星示例-->
        <div class="rate-item"></div>
      </cube-rate-item>
    </cube-rate>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'rate-demo',
    data () {
      return {
        value: 3,
        disabled: false,
        max: 5,
        justify: true
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .rate-item
    width: 100%
    height: 100%
    background-size 100%
    background-color #804556

  .cube-rate-item_active
    .rate-item
      background-color orange
</style>
