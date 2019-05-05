Component({
  options: {
    multipleSlots: true
  },
  properties: {
    defaultActive: {
      type: Boolean,
      value: false,
      observer(newValue) {
        this.setData({
          isActive: newValue
        })
      }
    },
    tips: {
      type: String,
      value: '+1'
    },
    fontSize: {
      type: String,
      value: '',
      observer(newValue) {
        this.setData({
          iconFontSize: `font-size: ${newValue}rpx`
        })
      }
    }
  },

  data: {
    isActive: false,
    startAnimation: false,
    iconFontSize: ''
  },

  methods: {
    onClick(e) {
      const {isActive} = this.data
      this.setData({
        isActive: !isActive,
        startAnimation: !isActive
      })
      this.triggerEvent('onclick', Object.assign({}, e, {isActive: !isActive}))
    }
  }

})
