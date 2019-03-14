<template>
  <div class="hello">
    <router-link to="/Button">button</router-link>
    <router-link to="/Loading">Loading</router-link>
    <router-link to="/Tip">Tip</router-link>
    <router-link to="/Toolbar">Toolbar</router-link>
    <router-link to="/TabBar">TabBar</router-link>
    <router-link to="/Checkbox">Checkbox</router-link>
    <router-link to="/CheckboxGroup">CheckboxGroup</router-link>
    <router-link to="/Radio">Radio</router-link>
    <router-link to="/Checker">Checker</router-link>
    <router-link to="/Input">Input</router-link>
    <router-link to="/Textarea">Textarea</router-link>
    <router-link to="/Select">Select</router-link>
    <router-link to="/Rate">Rate</router-link>
    <router-link to="/Validator">Validator</router-link>
    <router-link to="/Upload">Upload</router-link>
    <router-link to="/FormStandard">FormStandard</router-link>
    <router-link to="/FormCustom">FormCustom</router-link>
    <router-link to="/Popup">Popup</router-link>
    <router-link to="/Picker">Picker</router-link>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .hello
    a
      display: block
      padding: 5px
</style>
