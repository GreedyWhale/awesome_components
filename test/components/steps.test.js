const simulate = require('miniprogram-simulate')
const setCompontentPath = require('../methods')

const steps = simulate.load(setCompontentPath('components/steps/steps'))
// 由于无法获取到正确的dom元素，只能测试js
describe('steps', () => {
  it('测试 steps', () => {
    const component = simulate.render(steps, {steps: ['任务1', '任务2'], currentStep: 1})
    const parent = document.createElement('parent-wrapper')
    component.attach(parent)
    expect(component.data.stepsData.length).toEqual(2)
    expect(component.data.stepsData[0].stepClass).toEqual('ac-active')
  })
})
