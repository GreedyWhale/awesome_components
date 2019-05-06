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
    console.log(e.detail)
  }
})
