<template>
  <div class="textarea-demo">
    <cube-textarea v-model="value"
                   indicator="indicator"
                   :placeholder="placeholder"
                   :maxlength="maxlength"
                   :readonly="readonly"
                   :disabled="disabled"
                   :autofocus="autofocus">
    </cube-textarea>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'textarea-demo',
    data () {
      return {
        value: '',
        indicator: {
          negative: false,
          remain: false
        },
        placeholder: '请输入内容',
        readonly: false,
        maxlength: 100,
        disabled: false,
        autofocus: true
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
