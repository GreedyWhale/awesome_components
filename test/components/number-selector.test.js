const simulate = require('miniprogram-simulate')
const setcomponentPath = require('../methods')

const numberSelector = simulate.load(setcomponentPath('components/number-selector/number-selector'))
describe('number-selector', () => {
  it('render', () => {
    const component = simulate.render(numberSelector)
    expect(component.dom.innerHTML).toContain('<wx-input class="number-input"></wx-input>')
  })
  it('number-selector 组件支持设置默认值', () => {
    const component = simulate.render(numberSelector, {defaultValue: 100})
    expect(component.data.value).toEqual(100)
  })
  it('number-selector 组件支持设置最大值', async () => {
    const component = simulate.render(numberSelector, {maxNum: 100})
    component.instance.onBlur({detail: {value: 200}})
    await simulate.sleep(10)
    expect(component.data.value).toEqual(100)
  })
  it('number-selector 组件支持设置最小值', async () => {
    const component = simulate.render(numberSelector, {minNum: 10})
    component.instance.onBlur({detail: {value: 1}})
    await simulate.sleep(10)
    expect(component.data.value).toEqual(10)
  })
  it('number-selector 组件支持设置增加数量', async () => {
    const component = simulate.render(numberSelector, {addNum: 10, defaultValue: 5})
    component.instance.add()
    await simulate.sleep(10)
    expect(component.data.value).toEqual(15)
  })
  it('number-selector 组件支持设置减少数量', async () => {
    const component = simulate.render(numberSelector, {reduceNum: 10, defaultValue: 20})
    component.instance.reduce()
    await simulate.sleep(10)
    expect(component.data.value).toEqual(10)
  })
  it('number-selector 组件支持设置手动', async () => {
    const component = simulate.render(numberSelector, {manual: true})
    component.instance.onInput({detail: {value: '100'}})
    await simulate.sleep(10)
    expect(component.data.displayedValue).toEqual('100')
  })
  it('number-selector 组件支持设置宽度自适应 & 最大宽度', () => {
    const component = simulate.render(numberSelector, {adaptation: true, maxWidth: 200})
    const input = component.querySelector('.number-input')
    const wrapper = component.querySelector('.number-input-wrapper')
    expect(input.dom.classList).toContain('hide')
    expect(wrapper.dom.style._values['max-width']).toEqual('200px')
  })
  it('number-selector 会触发oninput，onblur, onconfirm事件', async () => {
    const fakeOnInput = jest.fn()
    const fakeOnBlur = jest.fn()
    const fakeOnConfirm = jest.fn()
    const component = simulate.render(numberSelector, {manual: true})
    component.instance.onInput = fakeOnInput
    component.instance.onBlur = fakeOnBlur
    component.instance.onConfirm = fakeOnConfirm
    const input = component.querySelector('.number-input')
    input.dispatchEvent('input')
    input.dispatchEvent('blur')
    input.dispatchEvent('confirm')
    await simulate.sleep(10)
    const fnArr = [fakeOnInput, fakeOnBlur, fakeOnConfirm]
    fnArr.forEach(fn => {
      expect(fn).toBeCalled()
    })
  })
  it('number-selector 会触发add, reduce事件', async () => {
    const component = simulate.render(numberSelector)
    const add = component.querySelector('.icon-add')
    add.dispatchEvent('tap')
    await simulate.sleep(10)
    expect(component.data.value).toEqual(1)
    const reduce = component.querySelector('.icon-subtract')
    reduce.dispatchEvent('tap')
    await simulate.sleep(10)
    expect(component.data.value).toEqual(0)
  })
})
