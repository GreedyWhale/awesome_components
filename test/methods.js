const path = require('path')
const config = require('../tools/config')

const srcPath = config.srcPath

const setCompontentPath = (componentPath) => path.join(srcPath, componentPath)

module.exports = setCompontentPath
