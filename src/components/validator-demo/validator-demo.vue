<template>
  <div class="validator-demo">
    <cube-input v-model="text" placeholder="E-mail"></cube-input>
    <cube-validator v-model="valid" :model="text" :rules="rules"
                    :messages="messages"></cube-validator>
    <cube-validator :model="text" :rules="rulesT" v-model="valid">
      <cube-input v-model="text"></cube-input>
    </cube-validator>
    <cube-validator v-model="valid" :model="textT" :rules="rulesE"
                    :messages="messagesE">
      <cube-input v-model="textT" placeholder="component name"></cube-input>
      <div slot="message" class="custom-msg" slot-scope="props">
        <div v-if="(props.dirty || props.validated) && !valid">
          <i class="cubeic-important"></i> {{ props.message }}
          <div>
            <span v-for="(item, index) in Object.values(props.result)"
                  :key="index" v-if="item.inValid">
              {{ item.message + ' ' }}
            </span>
          </div>
        </div>
      </div>
    </cube-validator>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'validator-demo',
    data () {
      return {
        text: '',
        textT: '',
        valid: undefined,
        rules: {
          required: true,
          type: 'email',
          pattern: /didi.com$/,
          custom: (val) => {
            return val.length >= 12
          }
        },
        messages: {
          pattern: 'The E-mail suffix need to to didi.com',
          custom: 'The E-mail need contain at least 12 characters'
        },
        rulesT: {
          required: true,
          type: 'email',
          min: 12
        },
        rulesE: {
          type: 'string',
          pattern: /^cube-/,
          min: 8,
          max: 10
        },
        messagesE: {
          pattern: 'The component name need start with "cube-"'
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .validator-demo
    padding: 10px

    .cube-validator_invalid
      input
        border: solid 1px yellow

    .custom-msg
      color: orange
</style>
