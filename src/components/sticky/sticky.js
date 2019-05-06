Component({
  options: {
    multipleSlots: true,
  },
  properties: {
    scrollTop: {
      type: Number,
      value: 0,
      observer(newValue) {
        this.updateStickyElement(newValue)
      }
    },
    distance: {
      type: Number,
      value: 0,
    }
  },
  data: {
    placeholderStyle: '',
    sticky: false,
  },
  lifetimes: {
    ready() {
      this.getContentStyle()
    }
  },
  methods: {
    getContentStyle() {
      wx.createSelectorQuery()
        .in(this)
        .select('.sticky-content')
        .boundingClientRect(rect => {
          this.setStickyStyle(rect)
        })
        .exec()
    },
    updateStickyElement(scrollTop) {
      const {top, sticky, distance} = this.data
      if (scrollTop >= (top - distance) && !sticky) {
        this.setData({
          sticky: true
        })
      } else if (scrollTop <= (top - distance) && sticky) {
        this.setData({
          sticky: false
        })
      }
    },
    setStickyStyle(rect) {
      const {
        top, width,
        height, left
      } = rect
      this.setData({
        top,
        stickyContentStyle: `position: fixed; width: ${width}px; top: ${this.data.distance}px; left: ${left}px`,
        placeholderStyle: `display: block; width: ${width}px; height: ${height}px;`
      })
    }
  }
})
