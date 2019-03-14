<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/Button">Button</router-link>
      |
      <router-link to="/Loading">Loading</router-link>
      |
      <router-link to="/Tip">Tip</router-link>
      |
      <router-link to="/Toolbar">Toolbar</router-link>
      |
      <router-link to="/TabBar">TabBar</router-link>
      |
      <router-link to="/Checkbox">Checkbox</router-link>
      |
      <router-link to="/CheckboxGroup">CheckboxGroup</router-link>
      |
      <router-link to="/Radio">Radio</router-link>
      |
      <router-link to="/Checker">Checker</router-link>
      |
      <router-link to="/Input">Input</router-link>
      |
      <router-link to="/Textarea">Textarea</router-link>
      |
      <router-link to="/Select">Select</router-link>
      |
      <router-link to="/Rate">Rate</router-link>
      |
      <router-link to="/Validator">Validator</router-link>
      |
      <router-link to="/Upload">Upload</router-link>
      |
      <router-link to="/FormStandard">FormStandard</router-link>
      |
      <router-link to="/FormCustom">FormCustom</router-link>
      |
      <router-link to="/Popup">Popup</router-link>
      |
      <router-link to="/Picker">Picker</router-link>
    </div>
    <router-view/>
  </div>
</template>
<style lang="stylus" scoped>
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    background: #f2f2f2

  #nav
    padding 30px

    a
      font-weight bold
      color #2c3e50

      &.router-link-exact-active
        color #42b983
</style>
