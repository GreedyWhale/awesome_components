const AC_MENU_BUTTON_INFO = 'AC_MENU_BUTTON_INFO'

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
      let {
        bottom, right,
        height, top, width
      } = wx.getMenuButtonBoundingClientRect()
      if (bottom) {
        wx.setStorageSync(AC_MENU_BUTTON_INFO, {
          bottom,
          right,
          height,
          top,
          width
        })
      } else {
        const menuButtonInfo = wx.getStorageSync(AC_MENU_BUTTON_INFO)
        bottom = menuButtonInfo.bottom
        right = menuButtonInfo.right
        height = menuButtonInfo.height
        top = menuButtonInfo.top
        width = menuButtonInfo.width
      }
      const {windowWidth} = wx.getSystemInfoSync()
      const totalHeight = bottom + this.data.pillPaddingBottom
      const left = windowWidth - right
      this.setData({
        pillRight: left,
        pillwidth: width,
        height: totalHeight,
        navBarStyles: `height: ${totalHeight}px; padding-top: ${top}px;`,
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
