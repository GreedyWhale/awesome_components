/* eslint-disable no-unused-expressions */
function draw({
  bgUrl, width, height,
  text, color, fontSize,
  top, left
}, success) {
  const ctx = wx.createCanvasContext('ac-watermark-canvas', this)
  ctx.fillRect(0, 0, width, height)
  ctx.drawImage(bgUrl, 0, 0, width, height)
  ctx.setFontSize(fontSize)
  ctx.setFillStyle(color)
  ctx.setTextAlign('left')
  ctx.fillText(text, left, top + fontSize)
  ctx.draw(false)
  success && success()
}

module.exports = draw
