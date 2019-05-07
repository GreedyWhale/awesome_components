const simulate = require('miniprogram-simulate')
const setCompontentPath = require('../methods')

const slideView = simulate.load(setCompontentPath('components/slide-view/slide-view'))
describe('slide-view', () => {
  it('render', () => {
    const component = simulate.render(slideView)
    expect(component.dom.innerHTML).toContain('<movable-area class="slide-view-wrapper" style="height: 80px"><wx-movable-view class="slide-view" style="height: 80px;"><wx-view class="slide-left" style="width: 0px;"></wx-view><wx-view class="slide-right"></wx-view></wx-movable-view></movable-area>')
  })
  it('slide-view组件 可以改变高度', () => {
    const component = simulate.render(slideView, {height: 100})
    const wrapperElem = component.querySelector('.slide-view-wrapper')
    const slideViewElem = component.querySelector('.slide-view')
    expect(wrapperElem.dom.style._values.height).toEqual('100px')
    expect(slideViewElem.dom.style._values.height).toEqual('100px')
  })
  it('slide-view组件会触发 ready生命周期 & touch时间', async () => {
    const fakeGetElemStyle = jest.fn()
    const fakeOnTouchStart = jest.fn()
    const fakeOnTouchEnd = jest.fn()
    const component = simulate.render(slideView)
    component.instance.getElemStyle = fakeGetElemStyle
    component.instance.onTouchStart = fakeOnTouchStart
    component.instance.onTouchEnd = fakeOnTouchEnd
    const parent = document.createElement('parent-wrapper') // 创建父亲节点
    component.attach(parent)
    expect(fakeGetElemStyle).toBeCalled()
    const slideViewElem = component.querySelector('.slide-view')
    slideViewElem.dispatchEvent('touchstart')
    slideViewElem.dispatchEvent('touchend')
    await simulate.sleep(10)
    expect(fakeOnTouchStart).toBeCalled()
    expect(fakeOnTouchEnd).toBeCalled()
  })
  it('slide-view组件 的touch事件会触发滑动', async () => {
    const component = simulate.render(slideView)
    const {onTouchStart, onTouchEnd} = component.instance
    let fakeTouchStartEvent = {changedTouches: [{pageX: 180}]}
    let fakeTouchEndEvent = {changedTouches: [{pageX: 10}]}
    component.setData({
      threshold: 50,
      sildeRightWidth: 100
    })
    simulate.sleep(10)
    // 左滑超过阈值
    onTouchStart.call(component, fakeTouchStartEvent)
    onTouchEnd.call(component, fakeTouchEndEvent)
    expect(component.data.offsetX).toEqual(-100)
    // 右滑
    fakeTouchStartEvent = {changedTouches: [{pageX: 180}]}
    fakeTouchEndEvent = {changedTouches: [{pageX: 370}]}
    onTouchStart.call(component, fakeTouchStartEvent)
    onTouchEnd.call(component, fakeTouchEndEvent)
    expect(component.data.offsetX).toEqual(0)
    // 左滑未超过阈值
    fakeTouchStartEvent = {changedTouches: [{pageX: 180}]}
    fakeTouchEndEvent = {changedTouches: [{pageX: 170}]}
    onTouchStart.call(component, fakeTouchStartEvent)
    onTouchEnd.call(component, fakeTouchEndEvent)
    expect(component.data.offsetX).toEqual(0)
  })
})
