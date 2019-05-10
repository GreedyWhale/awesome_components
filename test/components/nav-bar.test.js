const simulate = require('miniprogram-simulate')
const setcomponentPath = require('../methods')

const navBar = simulate.load(setcomponentPath('components/nav-bar/nav-bar'))
describe('nav-bar', () => {
  it('render', () => {
    const component = simulate.render(navBar, {title: '标题'})
    expect(component.dom.innerHTML).toContain('<wx-view class="ac-content-title custom-class-title" style="color: black;">标题</wx-view>')
  })
})
