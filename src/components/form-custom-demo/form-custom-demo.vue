<template>
  <div class="form-custom-demo">
    <cube-form :model="model" @validate="validateHandler" @submit="submitHandler">
      <cube-form-group>
        <cube-form-item :field="fields[0]"></cube-form-item>
        <cube-form-item :field="fields[1]"></cube-form-item>
        <cube-form-item :field="fields[2]">
          <cube-button @click="showDatePicker">{{model.dateValue || 'Please select date'}}</cube-button>
          <date-picker ref="datePicker" :min="[2008, 8, 8]" :max="[2020, 10, 20]"
                       @select="dateSelectHandler"></date-picker>
        </cube-form-item>
      </cube-form-group>
      <cube-form-group>
        <cube-button type="submit">Submit</cube-button>
      </cube-form-group>
    </cube-form>
  </div>
</template>

<script type="text/ecmascript-6">
  import DatePicker from 'cube-ui/src/components/date-picker/date-picker'
  import { provinceList, cityList, areaList } from '../../common/area'
  // province, city, area
  const cityData = provinceList
  cityData.forEach(province => {
    province.children = cityList[province.value]
    province.children.forEach(city => {
      city.children = areaList[city.value]
    })
  })
  // select component
  const PCA = {
    props: {
      value: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {
        selected: []
      }
    },
    render (createElement) {
      return createElement('cube-button', {
        on: {
          click: this.showPicker
        }
      }, this.selected.length ? this.selected.join(' ') : 'placeholder')
    },
    mounted () {
      this.picker = this.$createCascadePicker({
        title: 'PCA Select',
        data: cityData,
        selectedIndex: this.value,
        onSelect: this.selectHandler
      })
    },
    methods: {
      showPicker () {
        this.picker.show()
      },
      selectHandler (selectedVal, selectedIndex, selectedTxt) {
        this.selected = selectedTxt
        this.$emit('input', selectedVal)
      }
    }
  }
  export default {
    name: 'form-custom-demo',
    data () {
      return {
        validity: {},
        valid: undefined,
        model: {
          inputValue: '',
          pcaValue: [],
          dateValue: ''
        },
        fields: [
          {
            type: 'input',
            modelKey: 'inputValue',
            label: 'Input',
            props: {
              placeholder: '请输入'
            },
            rules: {
              required: true
            }
          },
          {
            component: PCA,
            modelKey: 'pcaValue',
            label: 'PCASelect',
            rules: {
              required: true
            },
            messages: {
              required: '请选择'
            }
          },
          {
            modelKey: 'dateValue',
            label: 'Date',
            rules: {
              required: true
            }
          }
        ]
      }
    },
    methods: {
      submitHandler (e) {
        console.log('submit')
      },
      validateHandler (result) {
        this.validity = result.validity
        this.valid = result.valid
        console.log('validity', result.validity, result.valid, result.dirty, result.firstInvalidFieldIndex)
      },
      showDatePicker () {
        this.$refs.datePicker.show()
      },
      dateSelectHandler (selectedVal) {
        this.model.dateValue = new Date(selectedVal).toDateString()
      }
    },
    components: {
      DatePicker
    }
  }
</script>

<style lang="stylus" scoped>
  .form-custom
    .cube-form-item
      .cube-btn
        padding-left: 0
        padding-right: 0
        text-align: left
        color: inherit
        background: none
        border: none
</style>
