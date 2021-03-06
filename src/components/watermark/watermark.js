const draw = require('./draw.js')

Component({
  properties: {
    width: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    height: {
      type: String,
      optionalTypes: [Number],
      value: 0
    }
  },
  data: {
    canvasWidth: 0,
    canvasHeight: 0,
    color: '#FFFFFF',
    watermarkText: '',
    textTop: 0,
    textLeft: 0,
    imageTop: 0,
    fontSize: 32,
    disabled: false,
    canMove: false
  },
  lifetimes: {
    ready() {
      this.getElemStyle('.ac-watermark-img-wrapper', (rect) => {
        this.setData({
          imageTop: rect.top
        })
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
    onPreview() {
      const {canvasWidth, canvasHeight} = this.data
      wx.canvasToTempFilePath({
        canvasId: 'ac-watermark-canvas',
        width: canvasWidth,
        height: canvasHeight,
        success: (res) => {
          wx.previewImage({
            current: res.tempFilePath, // 当前显示图片的http链接
            urls: [res.tempFilePath], // 需要预览的图片http链接列表
          })
        }
      }, this)
    },
    onLoad(e) {
      const {windowWidth} = wx.getSystemInfoSync()
      const {height: imgHeight, width: imgWidth} = e.detail
      const canvasWidth = imgWidth > windowWidth ? windowWidth : imgWidth
      const canvasHeight = canvasWidth * (imgHeight / imgWidth)
      this.setData({
        canvasWidth,
        canvasHeight,
        canMove: true
      })
    },
    onInput(e) {
      this.setData({
        watermarkText: e.detail.value
      })
    },
    onTouchMove(e) {
      const {
        imageTop, canvasHeight, fontSize, watermarkText,
        canMove
      } = this.data
      if (!canMove) {
        return
      }
      const delta = (fontSize * watermarkText.length) / 2
      const {pageY, pageX} = e.changedTouches[0]
      if ((pageY <= imageTop) || (pageY >= (imageTop + canvasHeight))) {
        return
      }
      this.setData({
        textTop: pageY - imageTop - (fontSize / 2),
        textLeft: pageX - delta,
      })
    },
    setwatermarkColor(e) {
      this.setData({
        color: e.detail.value
      })
    },
    setwatermarkFontSize(e) {
      if (e.detail.value) {
        this.setData({
          fontSize: parseFloat(e.detail.value, 10)
        })
      }
    },
    chooseImg() {
      wx.chooseImage({
        count: 1,
        success: (res) => {
          this.setData({
            bgUrl: res.tempFilePaths[0]
          })
        }
      })
    },
    generate() {
      if (this.data.disabled) { return }
      if (!this.data.bgUrl) {
        wx.showToast({
          title: '请先选择图片',
          icon: 'none',
          duration: 1000
        })
        return
      }
      if (!this.data.watermarkText) {
        wx.showToast({
          title: '请输入水印文字',
          icon: 'none',
          duration: 1000
        })
        return
      }
      this.setData({
        disabled: true
      })
      draw.call(this, {
        bgUrl: this.data.bgUrl,
        width: this.data.canvasWidth,
        height: this.data.canvasHeight,
        top: this.data.textTop,
        left: this.data.textLeft,
        text: this.data.watermarkText,
        color: this.data.color,
        fontSize: this.data.fontSize
      }, () => {
        this.setData({
          disabled: false
        })
        this.onPreview()
      })
    }
  }
})
