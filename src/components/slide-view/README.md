## SlideView 水平滑动组件

### 引入

```
{
  "navigationBarTitleText": "SlideView",
  "usingComponents": {
    "ac-slide-view": "@csr/awesome_components/slide-view/slide-view"
  }
}

<view>
  <ac-slide-view height="100">
    <view slot="left">默认展示内容</view>
    <view slot="right">滑动展示内容</view>
  </ac-slide-view>
</view>
```

### 自定义高度

```
<ac-slide-view height="100">
  <view slot="left">默认展示内容</view>
  <view slot="right">滑动展示内容</view>
</ac-slide-view>
```

### API
| 属性 | 类型 | 说明 | 默认值 |
| :---: | :----: | :----: | :----: |
| height | String \| Number | 高度，单位rpx，不需要传递单位 | 80rpx

### slot

| 名称 | 说明 |
| :---: | :----: |
| left | 默认展示内容 |
| right | 滑动后展示内容 | 


### tips
该组件的宽度默认撑满父元素的宽，如需指定宽度改变父元素宽度即可
