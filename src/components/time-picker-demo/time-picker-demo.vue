<template>
  <div class="time-picker-demo">
    <cube-button @click="showTimePicker">TimePicker</cube-button>
    <br>
    <cube-button @click="showConfigTimePicker">TimePicker - day options</cube-button>
    <br>
    <cube-button @click="showFormatPicker">Config format</cube-button>
    <br>
    <cube-button @click="showMinuteStepPicker">Config minute step</cube-button>
    <br>
    <cube-button @click="showMinPicker">Config min</cube-button>
    <br>
    <cube-button @click="showAlert">showSlot</cube-button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'time-picker-demo',
    methods: {
      showTimePicker () {
        this.$createTimePicker({
          showNow: true,
          minuteStep: 5,
          delay: 5,
          onSelect: (selectedTime, selectedText, formatedTime) => {
            this.$createDialog({
              type: 'warn',
              title: `selected time: ${selectedTime}`,
              content: `selected text: ${selectedText}<br>format time: ${formatedTime}`,
              icon: 'cubeic-alert'
            }).show()
          },
          onCancel: () => {
            this.$createToast({
              type: 'correct',
              txt: 'Picker canceled',
              time: 1000
            }).show()
          }
        }).show()
      },
      showConfigTimePicker () {
        this.$createTimePicker({
          showNow: true,
          minuteStep: 10,
          delay: 10,
          day: {
            len: 5,
            filter: ['今天', '明天'],
            format: 'M月d日'
          },
          onSelect: (selectedTime, selectedText, formatedTime) => {
            this.$createDialog({
              type: 'warn',
              title: `selected time: ${selectedTime}`,
              content: `selected text: ${selectedText}<br>format time: ${formatedTime}`,
              icon: 'cubeic-alert'
            }).show()
          },
          onCancel: () => {
            this.$createToast({
              type: 'correct',
              txt: 'Picker canceled',
              time: 1000
            }).show()
          }
        }).show()
      },
      showFormatPicker () {
        if (!this.formatPicker) {
          this.formatPicker = this.$createTimePicker({
            format: 'M:dd:hh:mm',
            onSelect: this.selectHandler,
            onCancel: this.cancelHandler
          })
        }
        this.formatPicker.show()
      },
      selectHandler (selectedTime, selectedText, formatedTime) {
        this.$createDialog({
          type: 'warn',
          title: `selected time: ${selectedTime}`,
          content: `selected text: ${selectedText}<br>format time: ${formatedTime}`,
          icon: 'cubeic-alert'
        }).show()
      },
      cancelHandler () {
        this.$createToast({
          type: 'correct',
          txt: 'Picker canceled',
          time: 1000
        }).show()
      },
      showMinuteStepPicker () {
        if (!this.minuteStepPicker) {
          this.minuteStepPicker = this.$createTimePicker({
            showNow: false,
            minuteStep: {
              rule: 'ceil',
              step: 15
            },
            onSelect: this.selectHandler,
            onCancel: this.cancelHandler
          })
        }
        this.minuteStepPicker.show()
      },
      showMinPicker () {
        if (!this.minPicker) {
          console.log(new Date() - (2 * 60 + 20) * 60 * 1000)
          this.minPicker = this.$createTimePicker({
            min: new Date() - (2 * 60 + 20) * 60 * 1000,
            onSelect: this.selectHandler,
            onCancel: this.cancelHandler
          })
        }
        this.minPicker.show()
      },
      showAlert () {
        this.dialog = this.$createDialog({
          type: 'alert',
          title: '我是标题',
          content: '我是内容',
          icon: 'cubeic-alert'
        })
        this.dialog.show()
      },
      showSlot () {
        this.dialog = this.$createDialog({
          type: 'alert',
          confirmBtn: {
            text: '我知道了',
            active: true
          }
        }, (createElement) => {
          return [
            createElement('div', {
              'class': {
                'my-title': true
              },
              slot: 'title'
            }, [
              createElement('div', {
                'class': {
                  'my-title-img': true
                }
              }),
              createElement('p', '附近车少,优选出租车将来接您')
            ]),
            createElement('p', {
              'class': {
                'my-content': true
              },
              slot: 'content'
            }, '价格仍按快车计算')
          ]
        })
        this.dialog.show()
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
