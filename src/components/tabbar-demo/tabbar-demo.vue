<template>
  <div class="tabbar-demo">
    <div class="default">
      <cube-tab-bar
        v-model="selectedLabelDefault"
        :data="tabs"
        show-slider
        @click="clickHandler"
        @change="changeHandler"></cube-tab-bar>
    </div>
    <div class="custom-slot">
      <cube-tab-bar
        v-model="selectedLabelSlots"
        show-slider
        @click="clickHandler">
        <cube-tab v-for="item in tabs"
                  :label="item.label"
                  :key="item.label">
          <!--name为icon的插槽-->
          <i slot="icon" :class="item.icon"></i>
          <!--默认插槽-->
          {{item.label}}
        </cube-tab>
      </cube-tab-bar>
    </div>
    <div class="tabbar-tabpanel">
      <cube-tab-bar v-model="selectedLabel" show-slider>
        <cube-tab v-for="item in tabDatas"
                  :icon="item.icon"
                  :label="item.label"
                  :key="item.label"></cube-tab>
      </cube-tab-bar>
      <cube-tab-panels v-model="selectedLabel">
        <cube-tab-panel
          v-for="item in tabDatas"
          :label="item.label"
          :key="item.label">
          <ul>
            <li class="tab-panel-li" v-for="(heroe, index) in item.heroes" :key="index">
              {{heroe}}
            </li>
          </ul>
        </cube-tab-panel>
      </cube-tab-panels>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  /* TODO
  * cube-tab-bar 还能搭配许多其他cube-ui的组件
  * (cube-slide ，cube-scroll)来做出类似
  * 原生 app 布局的效果
  * */
  export default {
    name: 'tabbar-demo',
    data () {
      return {
        selectedLabelDefault: 'Vip',
        selectedLabelSlots: 'Like',
        selectedLabel: '天辉',
        tabs: [
          {
            label: 'Home',
            icon: 'cubeic-home'
          },
          {
            label: 'Like',
            icon: 'cubeic-like'
          },
          {
            label: 'Vip',
            icon: 'cubeic-vip'
          },
          {
            label: 'Me',
            icon: 'cubeic-person'
          }
        ],
        tabDatas: [
          {
            label: '天辉',
            icon: 'cubeic-like',
            heroes: ['敌法师', '卓尔游侠', '主宰', '米拉娜', '变体精灵', '幻影长矛手', '复仇之魂', '力丸', '矮人狙击手', '圣堂刺客', '露娜', '赏金猎人', '熊战士']
          }, {
            label: '夜魇',
            icon: 'cubeic-star',
            heroes: ['血魔', '影魔', '剃刀', '剧毒术士', '虚空假面', '幻影刺客', '冥界亚龙', '克林克兹', '育母蜘蛛', '编织者', '幽鬼', '司夜刺客', '米波']
          }
        ]
      }
    },
    methods: {
      clickHandler (label) {
        console.log(label)
      },
      changeHandler (label) {
        console.log(label)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .tabbar-demo
    .default
      background: #000000
      margin: 15px 0

    .custom-slot
      background: #000
      margin: 15px 0

    .tab-panel-li
      padding: 8px 0
      border-bottom: 1px solid #f23c35

      &.last-child
        border-bottom: none
</style>
