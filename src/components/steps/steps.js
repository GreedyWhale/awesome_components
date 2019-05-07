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
    currentStep: {
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
    attached() {
      if (!this.data.stepsData.length) {
        this.formattedSteps(this.data.currentStep)
      }
    }
  },
  methods: {
    formattedSteps(currentStep) {
      const {steps} = this.data
      let newSteps = []
      // eslint-disable-next-line max-len
      newSteps = steps.map((value, index) => Object.assign({}, {title: value}, this.setStepsItem(currentStep, index)))
      this.setData({
        stepsData: newSteps
      })
    },
    setStepsItem(currentStep, index) {
      const newIndex = index + 1
      const {colors} = this.data
      const item = {
        stepStyle: '',
        stepClass: '',
        stepsIconStyle: ''
      }
      if (currentStep === newIndex) {
        item.stepStyle = colors.active ? `color: ${colors.active};` : ''
        item.stepsIconStyle = colors.active ? `color: ${colors.active};` : ''
        item.stepClass = 'ac-active'
      }
      if (currentStep > newIndex) {
        item.stepStyle = colors.finished ? `color: ${colors.finished};` : ''
        item.stepsIconStyle = colors.finished ? `color: ${colors.finished};` : ''
        item.stepClass = 'ac-finished'
      }
      return item
    },
  }
})
