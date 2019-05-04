## 头像 Avatar

### 引入

```
{
  "navigationBarTitleText": "Avatar",
  "usingComponents": {
    "ac-avatar": "@csr/awesome_components/avatar/avatar"
  }
}

<view>
  <ac-avatar url="xxx.png"></ac-avatar>
</view>
```

### 不同的形状

```
<!-- 直角矩形 -->
<ac-avatar url="xxx.png"></ac-avatar>
<!-- 圆角矩形 -->
<ac-avatar url="xxx.png" shape="rounded"></ac-avatar>
<!-- 圆形 -->
<ac-avatar url="xxx.png" shape="circle"></ac-avatar>
```

### 文字类头像
```
<ac-avatar>Allen</ac-avatar>
```

### 带有消息提示
```
<ac-avatar count="1">Jack</ac-avatar>
<ac-avatar count="10" url="xxx.png"></ac-avatar>
<ac-avatar count="999">Allen</ac-avatar>
```

### 自定义右上角标签
```
<ac-avatar url="xxx.png" visibleDot="{{true}}">
  <iamge src="xxx.png" style="width: 20rpx; height: 20rpx; border-radius: 50%"></view>
</ac-avatar>
```

### 头像组
wxml文件
```
<ac-avatar urls="{{urls}}"></ac-avatar>
```
js文件
Page({
  data: {
    urls: ['xxx.png', 'xxx.png', 'xxx.png', 'xxx.png']
  }
})

### 自定义宽高
```
<ac-avatar url="xxx.png" width="100" height="200"></ac-avatar>
```
### 自定义颜色
```
<ac-avatar bg-color="#F17F42"></ac-avatar>
<ac-avatar bg-color="#D7FFF1"></ac-avatar>
<ac-avatar bg-color="#C5C6B6"></ac-avatar>
```

### API
| 属性 | 类型 | 说明 | 默认值 |
| :---: | :----: | :----: | :----: |
| url | String | 头像url |
| urls | Array | 头像组的url数组 | []
| width | String \| Number | 头像宽度，单位是rpx，不用传单位 | 100rpx
| height | String \| Number | 头像高度，单位是rpx，不用传单位 | 100rpx
| shape | String | 头像形状，可选值：square（直角矩形），rounded（圆角矩形），circle（圆形） | square
| count | String \| Number | 消息数量 | 
| visible-dot | Boolean | 自定义右上角标签时，需要传入true | false
| bg-color | String | 自定义文字头像时的颜色，格式为十六进制 | 

### 事件
| 事件名  | 说明 | 参数 |
| :---: | :----: | :----: |
| onClick | 点击头像时触发 | event: Event


### slot

| 名称 | 说明 |
| :---: | :----: |
| tag | 用于自定义右上角标签 | 