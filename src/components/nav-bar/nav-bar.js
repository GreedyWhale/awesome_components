Component({
  options: {
    multipleSlots: true
  },
  externalClasses: ['custom-class-title', 'custom-class-img'],
  properties: {
    title: {
      type: String,
      value: ''
    },
    navBarTextColor: {
      type: String,
      value: 'black'
    },
    navBarIconColor: {
      type: String,
      value: ''
    },
    pillPaddingBottom: {
      type: Number,
      value: 5
    },
    customLeftCorner: {
      type: Boolean,
      value: false
    },
    homePath: {
      type: String,
      value: ''
    },
    backgroundColor: {
      type: String,
      value: 'transparent'
    },
    zIndex: {
      type: String,
      optionalTypes: [Number],
      value: 3
    },
    bgImage: {
      type: String,
      value: ''
    },
    imgMode: {
      type: String,
      value: 'widthFix'
    },
    enablePlaceholder: {
      type: Boolean,
      value: true
    }
  },
  lifetimes: {
    attached() {
      this.initStyle()
      this.setData({
        visibleLeftCornerBtns: getCurrentPages().length > 1
      })
    },
    ready() {
      this.triggerEvent('onlayout', {height: this.data.height})
    }
  },
  data: {
    height: 0,
    left: 0
  },
  methods: {
    initStyle() {
      const {
        bottom, right,
        height, top, width
      } = wx.getMenuButtonBoundingClientRect()
      const {windowWidth} = wx.getSystemInfoSync()
      const totalHeight = bottom + this.data.pillPaddingBottom
      const left = windowWidth - right
      const {backgroundColor, zIndex} = this.data
      this.setData({
        pillRight: left,
        pillwidth: width,
        height: totalHeight,
        navBarStyles: `height: ${totalHeight}px; padding-top: ${top}px;background-color: ${backgroundColor}; z-index: ${zIndex}`,
        titleStyles: `height: ${height}px;`,
        leftCornerStyles: `height: ${height}px; padding-left: ${left}px`
      })
    },
    goBack() {
      wx.navigateBack()
    },
    goHome() {
      wx.reLaunch({url: this.data.homePath})
    }
  }
})
