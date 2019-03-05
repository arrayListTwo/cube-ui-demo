<template>
  <div class="checkbox-demo">
    <div class="wrapper">
      <cube-checkbox v-model="checked">
        Checkbox
      </cube-checkbox>
    </div>
    <p>Checked value: {{checked}} </p>
    <div class="wrapper">
      <cube-checkbox v-model="checked"
                     position="right"
                     shape="square"
                     :hollow-style="true">
        Styled Checkbox
      </cube-checkbox>
    </div>
    <div class="wrapper">
      <cube-checkbox v-model="checked" :option="option">
      </cube-checkbox>
    </div>
    <div class="wrapper">
      <cube-checkbox shape="square" :hollow-style="false" v-model="checked" :option="{disabled:true}">
        Disabled Checkbox
      </cube-checkbox>
    </div>
    <div class="wrapper">
      <cube-checkbox class="with-click" v-model="checked">
        Agree<a href="javascript:" @click.stop="test">《XXX》</a>
      </cube-checkbox>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'checkbox-demo',
    data () {
      return {
        checked: false,
        option: {
          label: 'Option Checkbox',
          value: 'optionValue',
          disabled: false
        }
      }
    },
    methods: {
      test () {
        console.log('test')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .checkbox-demo
    padding: 10px

    .wrapper
      padding: 5px
      background: #fff
      margin: 10px 0

      .with-click
        .cube-checkbox-label
          a
            position: relative
            z-index: 1
</style>
