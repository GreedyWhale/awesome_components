const simulate = require('miniprogram-simulate')
const setCompontentPath = require('../methods')

const progress = simulate.load(setCompontentPath('progress/progress'))
describe('progress', () => {
  it('render', () => {
    const component = simulate.render(progress)
    expect(component.dom.innerHTML).toContain('<wx-view class="progress" style=""></wx-view>')
  })
  it('progress 组件接受percent', () => {
    const component = simulate.render(progress, {percent: 80})
    const progressElem = component.querySelector('.progress')
    expect(progressElem.dom.style._values.width).toEqual('80%')
  })
  it('progress 组件支持自定义样式', () => {
    const component = simulate.render(progress, {
      customStyle: {
        'border-radius': '20px',
        background: 'blue'
      }
    })
    const progressElem = component.querySelector('.progress-wrapper')
    expect(progressElem.dom.style._values['border-radius']).toEqual('20px')
    expect(progressElem.dom.style._values.background).toEqual('blue')
  })
  it('progress 组件支持修改进度条颜色', () => {
    const component = simulate.render(progress, {progressColor: 'pink'})
    const progressElem = component.querySelector('.progress')
    expect(progressElem.dom.style._values.background).toEqual('pink')
  })
  it('progress 组件支持动态条纹', () => {
    const component = simulate.render(progress, {stripe: true})
    expect(component.dom.innerHTML).toContain('</wx-view><wx-view class="progress-stripe progress-position-absolute" style="width: 0%">')
  })
  it('progress 组件支持显示进度', async () => {
    const root = simulate.load({
      template: '<ac-progress>80%</ac-progress>',
      usingComponents: {
        'ac-progress': progress
      }
    })
    const component = simulate.render(root)
    await simulate.sleep(10)
    const text = component.dom.querySelector('.progress-text')
    expect(text.innerHTML).toContain('80%')
  })
})
