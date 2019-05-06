Page({
  data: {
    percent: 0,
    value: 0
  },
  onShow() {
    setTimeout(() => {
      this.setData({
        percent: 50
      })
    }, 1000)
  },
  a(e) {
    this.setData({
      value: e.detail
    })
  }
})
