/* eslint-disable no-restricted-syntax */
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    percent: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    customStyle: {
      type: Object,
      value: null,
      observer(newValue) {
        this.setProgressStyle(newValue)
      }
    },
    progressColor: {
      type: String,
      value: ''
    }
  },

  data: {
    progressStyle: '',
  },

  methods: {
    setProgressStyle(customStyle) {
      let styles = ''
      for (const [key, value] of Object.entries(customStyle)) {
        styles += `${key}: ${value};`
      }
      this.setData({
        progressStyle: styles
      })
    }
  }

})
