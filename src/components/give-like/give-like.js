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
    }
  },

  data: {
    isActive: false,
    startAnimation: false
  },

  lifetimes: {
    attached() {},
    moved() { },
    detached() { },
  },

  pageLifetimes: {
    show() { },
    hide() { },
    resize() { },
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
