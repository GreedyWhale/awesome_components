const simulate = require('miniprogram-simulate')
const setCompontentPath = require('../methods')

const giveLike = simulate.load(setCompontentPath('give-like/give-like'))
describe('give-like', () => {
  it('render', () => {
    const component = simulate.render(giveLike)
    expect(component.dom.innerHTML).toContain('<wx-view class="ac-iconfont icon-like"></wx-view>')
  })
  it('give-like组件 支持默认激活', () => {
    const root = simulate.load({
      template: '<ac-give-like defaultActive="{{true}}"></ac-give-like>',
      usingComponents: {
        'ac-give-like': giveLike
      }
    })
    const component = simulate.render(root)
    const childComp = component.dom.querySelector('.icon-like-active')
    expect(childComp.classList).toContain('visible')
  })
  it('give-like组件 支持自定义提示文字', () => {
    const root = simulate.load({
      template: '<ac-give-like tips="赞"></ac-give-like>',
      usingComponents: {
        'ac-give-like': giveLike
      }
    })
    const component = simulate.render(root)
    const childComp = component.dom.querySelector('.give-like-text')
    expect(childComp.innerHTML).toEqual('赞')
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
