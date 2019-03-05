<template>
  <div class="select-demo">
    <cube-select
      v-model="value"
      :title="title"
      :options="options"
      :placeholder="placeholder"
      :auto-pop="autoPop"
      :disabled="disabled"
      @change="change"></cube-select>
  </div>
</template>

<script>
  export default {
    name: 'select-demo',
    data () {
      return {
        value: '',
        options: [2013, 2014, 2015, 2016, 2017, 2018],
        title: '入职时间',
        placeholder: '请选择入职时间',
        autoPop: false,
        disabled: false
      }
    },
    methods: {
      change (value, index, text) {
        console.log('change ', value, index, text)
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
