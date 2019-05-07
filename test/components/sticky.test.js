const simulate = require('miniprogram-simulate')
const setCompontentPath = require('../methods')

const sticky = simulate.load(setCompontentPath('components/sticky/sticky'))
// 由于无法模拟页面滚动，只能测试js
describe('sticky', () => {
  it('测试 steps', async () => {
    const component = simulate.render(sticky, {scrollTop: 100})
    const parent = document.createElement('parent-wrapper')
    component.attach(parent)
    expect(component.data.scrollTop).toEqual(100)
    component.setData({
      top: 200
    })
    const {updateStickyElement} = component.instance
    updateStickyElement.call(component, 300)
    await simulate.sleep(10)
    expect(component.data.sticky).toEqual(true)
  })
})
