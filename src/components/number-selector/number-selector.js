Component({
  options: {
    multipleSlots: true
  },
  properties: {
    defaultValue: {
      type: Number,
      value: 0,
      observer(newValue) {
        if (newValue && typeof newValue === 'number') {
          this.setData({value: newValue})
        }
      }
    },
    maxNum: {
      type: Number,
      value: 0,
    },
    minNum: {
      type: Number,
      value: 0,
    },
    addNum: {
      type: Number,
      value: 1,
    },
    reduceNum: {
      type: Number,
      value: 1,
    },
    isManual: {
      type: Boolean,
      value: false
    },
    widthAdaptation: {
      type: Boolean,
      value: false
    },
    maxWidth: {
      type: String,
      optionalTypes: [Number],
      value: 650
    }
  },

  data: {
    value: 0,
    displayedValue: 0
  },
  lifetimes: {
    attached() {
      if (!this.value && this.data.minNum) {
        this.setData({
          value: this.data.minNum
        })
      }
    }
  },
  methods: {
    // eslint-disable-next-line consistent-return
    onInput({detail: {value}}) {
      const reg = /^0/
      let result = value ? parseInt(value, 10) : 0
      if (result) {
        result = value.replace(reg, '')
      }
      this.setData({displayedValue: result})
      this.triggerEvent('oninput', result)
      return result
    },
    onBlur({detail: {value}}) {
      this.triggerEvent('onblur', this.setValue(value))
    },
    onConfirm({detail: {value}}) {
      this.triggerEvent('onconfirm', this.setValue(value))
    },
    setValue(value) {
      let result = value ? parseInt(value, 10) : 0
      if (this.data.minNum && result < this.data.minNum) {
        result = this.data.minNum
      }
      if (this.data.maxNum && result > this.data.maxNum) {
        result = this.data.maxNum
      }
      this.setData({value: result, displayedValue: result})
      return result
    },
    add() {
      const {value, maxNum, addNum} = this.data
      if (maxNum && value >= maxNum) {
        return
      }
      let result = value + addNum
      if (maxNum) {
        result = result > maxNum ? maxNum : result
      }
      this.setData({
        value: result,
        displayedValue: result
      })
      this.triggerEvent('add', result)
    },
    reduce() {
      const {value, minNum, reduceNum} = this.data
      if (minNum && value <= minNum) {
        return
      }
      let result = value - reduceNum
      result = result < minNum ? minNum : result
      this.setData({
        value: result,
        displayedValue: result
      })
      this.triggerEvent('reduce', result)
    }
  }
})
