<template>
  <div class="radio-demo">
    <div class="wrapper">
      <cube-radio-group
        v-model="selected"
        :options="options"></cube-radio-group>
    </div>
    <p>Selected value {{selected}}</p>
    <div class="wrapper">
      <cube-radio-group
        v-model="selected2"
        :options="option2"
        position="right"
        :hollow-style="true"></cube-radio-group>
    </div>
    <p>Selected value {{selected2}}</p>
    <div class="wrapper">
      <cube-radio-group v-model="selected2"
                        :options="option2"
                        :horizontal="true">
      </cube-radio-group>
    </div>
    <div class="wrapper">
      <cube-radio-group>
        <cube-radio
          v-for="(option, index) in options4"
          :key="index"
          :option="option"
          v-model="selected4">
          <img :src="option.src" width="120" height="120">
        </cube-radio>
      </cube-radio-group>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'radio-demo',
    data () {
      return {
        selected: '',
        selected2: 3,
        selected4: '1',
        options: ['Option1', 'Option2'],
        option2: [
          {
            label: 'Option1',
            value: 1
          },
          {
            label: 'Option2',
            value: 2
          }, {
            label: 'Option3',
            value: 3,
            disabled: true
          }
        ],
        options4: [
          {
            label: '1',
            value: '1',
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516805611092&di=80d0f229dd999ffa3be79d6e317832b0&imgtype=0&src=http%3A%2F%2Fimglf0.ph.126.net%2F1EnYPI5Vzo2fCkyy2GsJKg%3D%3D%2F2829667940890114965.jpg'
          },
          {
            label: '2',
            value: '2',
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516805611092&di=80d0f229dd999ffa3be79d6e317832b0&imgtype=0&src=http%3A%2F%2Fimglf0.ph.126.net%2F1EnYPI5Vzo2fCkyy2GsJKg%3D%3D%2F2829667940890114965.jpg'
          },
          {
            label: '3',
            value: '3',
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516805611092&di=80d0f229dd999ffa3be79d6e317832b0&imgtype=0&src=http%3A%2F%2Fimglf0.ph.126.net%2F1EnYPI5Vzo2fCkyy2GsJKg%3D%3D%2F2829667940890114965.jpg',
            disabled: true
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .radio-demo
    padding: 10px

    .wrapper
      background: #fff
      padding: 15px
      margin: 10px 0
</style>
