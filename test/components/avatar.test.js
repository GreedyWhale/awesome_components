const simulate = require('miniprogram-simulate')
const setCompontentPath = require('../methods')

const avatar = simulate.load(setCompontentPath('components/avatar/avatar'), 'ac-avatar')
describe('avatar', () => {
  test('render', () => {
    const root = simulate.load({
      template: '<ac-avatar>Allen</ac-avatar>',
      usingComponents: {
        'ac-avatar': avatar
      }
    })
    const component = simulate.render(root)
    expect(simulate.match(component.dom, '<wx-view class="ellipsis">Allen</wx-view>'))
  })
  test('avatar 组件接受url', () => {
    const component = simulate.render(avatar, {url: 'xxx.png'})
    const avatarElem = component.querySelector('.single-avatar')
    expect(avatarElem.dom.dataset.url).toEqual('xxx.png')
  })
  test('avatar 组件支持多头像', () => {
    const component = simulate.render(avatar, {urls: ['xxx.png', 'xxx.png', 'xxx.png']})
    const avatarsElem = component.querySelectorAll('.avatar-img-wrapper')[0]
    expect(avatarsElem.dom.style._values['z-index']).toEqual('3')
  })
  test('avatar 组件支持改变宽高', () => {
    const component = simulate.render(avatar, {url: 'xxx.png', height: 200, width: 200})
    const avatarsElem = component.querySelector('.single-avatar')
    expect(avatarsElem.dom.style._values.height).toEqual('200px')
    expect(avatarsElem.dom.style._values.width).toEqual('200px')
  })
  test('avatar 组件支持改变形状', () => {
    const component = simulate.render(avatar, {url: 'xxx.png', shape: 'square'})
    const roundedComponent = simulate.render(avatar, {url: 'xxx.png', shape: 'rounded'})
    const circleComponent = simulate.render(avatar, {url: 'xxx.png', shape: 'circle'})

    const avatarElem = component.querySelector('.single-avatar')
    const avatarElem1 = roundedComponent.querySelector('.single-avatar')
    const avatarElem2 = circleComponent.querySelector('.single-avatar')

    expect(avatarElem.dom.classList[2]).toEqual('square')
    expect(avatarElem1.dom.classList[2]).toEqual('rounded')
    expect(avatarElem2.dom.classList[2]).toEqual('circle')
  })
  test('avatar 组件支持消息模式', () => {
    const root = simulate.load({
      template: '<ac-avatar count="10">Allen</ac-avatar>',
      usingComponents: {
        'ac-avatar': avatar
      }
    })
    const component = simulate.render(root)
    expect(component.dom.innerHTML).toContain('10')
  })
  test('avatar 组件支持自定义左上角标签', () => {
    const root = simulate.load({
      template: '<ac-avatar visibleDot="{{true}}"><view slot="tag">tag</view></ac-avatar>',
      usingComponents: {
        'ac-avatar': avatar
      }
    })
    const component = simulate.render(root)
    expect(component.dom.innerHTML).toContain('<wx-view class="avatar-dot flex-align-center"></wx-view>')
  })
  test('avatar 组件支持改变背景颜色', () => {
    const component = simulate.render(avatar, {url: 'xxx.png', bgColor: '#ffffff'})
    const avatarElem = component.querySelector('.single-avatar')
    expect(avatarElem.dom.style._values['background-color']).toEqual('rgb(255, 255, 255)')
  })
  test('avatar 组件支持onclick事件', async () => {
    const component = simulate.render(avatar, {url: 'xxx.png'})
    let number = 1
    component.instance.onClick = () => {
      number += 1
    }
    const ele = component.querySelector('.single-avatar')
    ele.dispatchEvent('tap')
    await simulate.sleep(10)
    expect(number).toEqual(2)
  })
})
