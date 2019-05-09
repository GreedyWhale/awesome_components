const simulate = require('miniprogram-simulate')
const setcomponentPath = require('../methods')

const tabs = simulate.load(setcomponentPath('components/tabs/tabs'))
const tabsPanel = simulate.load(setcomponentPath('components/tabs-panel/tabs-panel'))

describe('tabs', () => {
  it('render', () => {
    const root = simulate.load({
      template: `
        <ac-tabs>
          <ac-tabs-panel title="标题一">内容一</ac-tabs-panel>
          <ac-tabs-panel title="标题二">内容二</ac-tabs-panel>
          <ac-tabs-panel title="标题三">内容三</ac-tabs-panel>
        </ac-tabs>
      `,
      usingComponents: {
        'ac-tabs': tabs,
        'ac-tabs-panel': tabsPanel
      }
    })
    const component = simulate.render(root)
    const parent = document.createElement('parent-wrapper')
    component.attach(parent)
    expect(component.dom.innerHTML).toContain('<wx-view style="ac-tabs-header">内容二</wx-view>')
    component.detach()
  })
  it('tabs 组件clickTab', () => {
    const component = simulate.render(tabs, {defaultActive: 2})
    component.setData({
      disabled: [true, false]
    })
    component.updateActiveIndex = jest.fn()
    component.instance.clickTab.call(component, {currentTarget: {dataset: {index: 1}}})
    expect(component.updateActiveIndex).toBeCalled()
  })
  it('tabs 组件getScrollY', () => {
    const component = simulate.render(tabs, {defaultActive: 2})
    component.setData({
      scrollY: 100
    })
    let scrollY = component.instance.getScrollY.call(component, {scrollLeft: 200})
    expect(scrollY).toEqual(200)
    scrollY = component.instance.getScrollY.call(component, {scrollLeft: 100, right: 20},
      {right: 40, width: 40})
    expect(scrollY).toEqual(140)
    scrollY = component.instance.getScrollY.call(component, {scrollLeft: 100, left: 20},
      {left: 10, width: 40})
    expect(scrollY).toEqual(70)
  })
  it('tabs 组件onTouchStart & onTouchEnd', async () => {
    const component = simulate.render(tabs, {swipeable: true})
    component.setData({
      activeIndex: 0,
      disabled: [false, true, false]
    })
    component.updateActiveIndex = (activeIndex) => {
      component.data.activeIndex = activeIndex
    }
    simulate.sleep(10)
    const {onTouchStart, onTouchEnd} = component.instance
    onTouchStart.call(component, {touches: [{clientX: 50}]})
    expect(component.data.startX).toEqual(50)
    component.data.titles = [1, 2, 3]
    onTouchEnd.call(component, {changedTouches: [{clientX: 10}]})
    expect(component.data.activeIndex).toEqual(2)
    simulate.sleep(10)
    onTouchEnd.call(component, {changedTouches: [{clientX: 100}]})
    expect(component.data.activeIndex).toEqual(0)
  })
})
