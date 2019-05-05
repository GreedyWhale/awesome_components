Page({
  data: {
    percent: 0
  },
  onShow() {
    setTimeout(() => {
      this.setData({
        percent: 50
      })
    }, 1000)
  }
})
