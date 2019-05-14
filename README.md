# awesome_components

一款包含了小程序开发中常用的组件以及动画效果的库

使用

1. 安装
```
yarn add @csr/awesome_components
```

2. 开启在微信开发者工具中的 详情 -> npm构建

3. 在微信开发者工具中 工具 -> 构建npm

4. page.json
```
{
  "usingComponents": {
    "ac-avatar": "@csr/awesome_components/components/avatar/avatar"
  }
}
```

5. page.wxml
```
<ac-avatar>头像</ac-avatar>
```
