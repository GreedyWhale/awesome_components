Component({
  options: {
    multipleSlots: true,
  },
  properties: {
    height: {
      type: String,
      optionalTypes: [Number],
      value: 80
    }
  },
  data: {
    sildeRightWidth: 0,
    sildeWrapperWidth: 0,
    offsetX: 0,
    threshold: 0
  },
  lifetimes: {
    ready() {
      this.getElemStyle('.slide-right', (rect) => {
        this.setData({
          sildeRightWidth: rect.width,
          threshold: rect.width / 2
        })
      })
      this.getElemStyle('.slide-view-wrapper', (rect) => {
        this.setData({sildeWrapperWidth: rect.width})
      })
    }
  },
  methods: {
    getElemStyle(selector, callBack) {
      wx.createSelectorQuery()
        .in(this)
        .select(selector)
        .boundingClientRect(rect => {
          callBack(rect)
        })
        .exec()
    },
    onTouchStart(e) {
      this.setData({
        startX: e.changedTouches[0].pageX
      })
    },
    onTouchEnd(e) {
      const endX = e.changedTouches[0].pageX
      const {startX, threshold} = this.data
      if (startX - endX >= threshold) {
        this.setData({
          offsetX: -this.data.sildeRightWidth
        })
        return
      }
      this.setData({
        offsetX: 0
      })
    },
    onTap() {
      // this.setData({
      //   offsetX: 0
      // })
    }
  }
})
