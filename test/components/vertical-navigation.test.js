const simulate = require('miniprogram-simulate')
const setCompontentPath = require('../methods')

const verticalNavigation = simulate.load(setCompontentPath('components/vertical-navigation/vertical-navigation'))

describe('vertical-navigation', () => {
  it('render', () => {
    const root = simulate.load({
      template: `
        <ac-vertical-navigation nav-length="{{10}}" content-item-id="content-" nav-item-selector=".ac-nav-item">
          <view slot="nav">
            <view wx:for="{{10}}" wx:key="{{index}}">{{item}}</view>
          </view>
          <view slot="content">
            <view wx:for="{{10}}" wx:key="{{index}}" id="content-{{index}}">{{item}}</view>
          </view>
        </ac-vertical-navigation>
      `,
      usingComponents: {
        'ac-vertical-navigation': verticalNavigation
      }
    })
    const component = simulate.render(root)
    expect(component.dom.innerHTML).toContain('<wx-scroll-view class="ac-scroll-view ac-nav-bar" style=""><wx-view></wx-view></wx-scroll-view><wx-scroll-view class="ac-scroll-view ac-nav-content" style=""><wx-view></wx-view></wx-scroll-view>')
  })
  it('vertical-navigation 可以触发updateNav事件', async () => {
    const component = simulate.render(verticalNavigation, {navLength: 10})
    const fakeCollectContentTop = jest.fn()
    const fakeGetNavItemHeight = jest.fn()
    const fakeTriggerEvent = jest.fn()
    component.topList = [{id: '#content-0', top: 10, bottom: 20}, {id: '#content-1', top: 20, bottom: 100}]
    component.triggerEvent = fakeTriggerEvent
    component.instance.collectContentTop = fakeCollectContentTop
    component.instance.getNavItemHeight = fakeGetNavItemHeight
    const parent = document.createElement('parent-wrapper')
    component.attach(parent)
    expect(fakeCollectContentTop).toBeCalled()
    expect(fakeGetNavItemHeight).toBeCalled()
    const {onScroll} = component.instance
    onScroll.call(component, {detail: {scrollTop: 21}})
    simulate.sleep(10)
    expect(component.data.currentIndex).toEqual(1)
    expect(fakeTriggerEvent).toBeCalled()
    component.detach()
  })
  it('vertical-navigation 组件的内容区域scrollTop会随着activeIndex改变而改变', async () => {
    const component = simulate.render(verticalNavigation, {
      navLength: 3,
      contentItemId: 'content-'
    })
    const fakeCollectContentTop = jest.fn()
    const fakeGetNavItemHeight = jest.fn()
    const fakeTriggerEvent = jest.fn()
    component.topList = [
      {id: '#content-0', top: 10, bottom: 20},
      {id: '#content-1', top: 20, bottom: 100},
      {id: '#content-2', top: 100, bottom: 300}
    ]
    component.triggerEvent = fakeTriggerEvent
    component.instance.collectContentTop = fakeCollectContentTop
    component.instance.getNavItemHeight = fakeGetNavItemHeight
    // eslint-disable-next-line max-len
    component.instance.updateContentScrollTop = component.instance.updateContentScrollTop.bind(component)
    const parent = document.createElement('parent-wrapper')
    component.attach(parent)
    component.setData({
      navItemHeight: 10,
      scrollHeight: 200,
      activeIndex: 1
    })
    simulate.sleep(10)
    const {updateContentScrollTop} = component.instance
    updateContentScrollTop.call(component, 2)
    simulate.sleep(10)
    expect(component.data.contentScrollTop).toEqual(100)
    expect(component.data.navScrollTop).toEqual(10)
    component.detach()
  })
})
