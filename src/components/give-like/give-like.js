Component({
  options: {
    multipleSlots: true
  },
  externalClasses: ['custom-class-icon'],
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
    }
  },

  data: {
    isActive: false,
    startAnimation: false
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
