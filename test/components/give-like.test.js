const simulate = require('miniprogram-simulate')
const setCompontentPath = require('../methods')

const giveLike = simulate.load(setCompontentPath('give-like/give-like'))
describe('give-like', () => {
  it('render', () => {
    const component = simulate.render(giveLike)
    expect(component.dom.innerHTML).toContain('<wx-view class="ac-iconfont icon-like" style=""></wx-view>')
  })
  it('give-like组件 支持默认激活', () => {
    const component = simulate.render(giveLike, {defaultActive: true})
    const childComp = component.dom.querySelector('.icon-like-active')
    expect(childComp.classList).toContain('visible')
  })
  it('give-like组件 支持自定义提示文字', () => {
    const component = simulate.render(giveLike, {tips: '赞'})
    const tipsElem = component.querySelector('.give-like-text')
    expect(tipsElem.dom.innerHTML).toEqual('赞')
  })
  it('give-like组件 支持改变按钮尺寸', () => {
    const component = simulate.render(giveLike, {fontSize: 100})
    let icons = component.querySelectorAll('.ac-iconfont')
    icons = Array.from(icons)
    icons.forEach(elem => {
      expect(elem.dom.style._values['font-size']).toEqual('100px')
    })
  })
  it('give-like组件 可以响应onclick事件', async () => {
    const component = simulate.render(giveLike)
    let number = 1
    component.instance.onClick = () => {
      number += 1
    }
    const ele = component.querySelector('.give-like')
    ele.dispatchEvent('tap')
    await simulate.sleep(10)
    expect(number).toEqual(2)
  })
})
