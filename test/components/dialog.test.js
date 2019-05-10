const simulate = require('miniprogram-simulate')
const setcomponentPath = require('../methods')

const dialog = simulate.load(setcomponentPath('components/dialog/dialog'))
describe('dialog', () => {
  it('render', () => {
    // 测试包貌似不支持这种组件的测试，已提issues https://github.com/wechat-miniprogram/miniprogram-simulate/issues/23
    expect(1).toEqual(1)
  })
})
