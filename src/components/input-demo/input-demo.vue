<template>
  <div class="input-demo">
    <div class="wrapper">
      <cube-input v-model="value"
                  :placeholder="placeholder"
                  :type="type"
                  :maxlength="maxlength"
                  :readonly="readonly"
                  :disabled="disabled"
                  :autofocus="autofocus"
                  :autocomplete="autocomplete"
                  :eye="eye"
                  :clearable="clearable">
      </cube-input>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'input-demo',
    data () {
      return {
        value: '',
        placeholder: '请输入内容',
        type: 'password',
        readonly: false,
        maxlength: 100,
        disabled: false,
        autofocus: true,
        autocomplete: true,
        eye: {
          open: true,
          reverse: true
        },
        clearable: {
          visible: true,
          blurHidden: true
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .input-demo
    padding: 10px

    .wrapper
      padding: 10px
      color: #fff
      margin: 10px 0
</style>
