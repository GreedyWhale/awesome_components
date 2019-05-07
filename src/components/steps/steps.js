Component({
  options: {
    multipleSlots: true,
  },
  externalClasses: ['custom-class-title', 'custom-class-icon'],
  properties: {
    steps: {
      type: Array,
      value: []
    },
    activeIndex: {
      type: Number,
      value: 1,
      observer(newValue) {
        this.formattedSteps(newValue)
      }
    },
    colors: {
      type: Object,
      value: {
        active: '#1f68f1',
        finished: '#158b15'
      }
    }
  },
  data: {
    stepsData: []
  },
  lifetimes: {
    ready() {
      if (!this.data.stepsData.length) {
        this.formattedSteps(this.data.activeIndex)
      }
    }
  },
  methods: {
    formattedSteps(activeIndex) {
      const {steps} = this.data
      let newSteps = []
      // eslint-disable-next-line max-len
      newSteps = steps.map((value, index) => Object.assign({}, value, this.setStepsItem(activeIndex, index)))
      this.setData({
        stepsData: newSteps
      })
    },
    setStepsItem(activeIndex, index) {
      const newIndex = index + 1
      const {colors} = this.data
      const item = {
        stepStyle: '',
        stepClass: '',
        stepsIconStyle: ''
      }
      if (activeIndex === newIndex) {
        item.stepStyle = colors.active ? `color: ${colors.active};` : ''
        item.stepsIconStyle = colors.active ? `color: ${colors.active};` : ''
        item.stepClass = 'ac-active'
      }
      if (activeIndex > newIndex) {
        item.stepStyle = colors.finished ? `color: ${colors.finished};` : ''
        item.stepsIconStyle = colors.finished ? `color: ${colors.finished};` : ''
        item.stepClass = 'ac-finished'
      }
      return item
    },
  }
})
