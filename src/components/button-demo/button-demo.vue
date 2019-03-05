<template>
  <div class="button-demo">
    <div class="btn-group">
      <cube-button>Button</cube-button>
      <cube-button type="submit">Submit Button</cube-button>
      <cube-button :active="true">Active Button</cube-button>
      <cube-button :disabled="true">Disable Button</cube-button>
      <cube-button icon="cubeic-right">Button with Icon</cube-button>
      <cube-button :light="true">Light Button</cube-button>
      <cube-button :inline="true" @click="onSubmitTest">Inline Button</cube-button>
      <cube-button :outline="true">Outline Button</cube-button>
      <cube-button :primary="true">Primary Button</cube-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'button-demo',
    methods: {
      onSubmitTest (e) {
        alert('submit')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .button-demo
    padding: 0 10px 10px 10px

    .btn-group
      button
        margin-bottom: 2vw
</style>
