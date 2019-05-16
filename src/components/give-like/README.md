## 喜欢按钮 GiveLike

### 引入

```
{
  "navigationBarTitleText": "GiveLike",
  "usingComponents": {
    "ac-give-like": "@csr/awesome_components/components/give-like/give-like"
  }
}

<view>
  <ac-give-like></ac-give-like>
</view>
```

### 默认激活

```
<ac-give-like default-active="{{true}}"></ac-give-like>
```

### 自定义提示文字
```
<ac-give-like tips="like + 1"></ac-give-like>
```

### API
| 属性 | 类型 | 说明 | 默认值 |
| :---: | :----: | :----: | :----: |
| default-active | Boolean | 是否默认激活 |
| tips | String | 点击时的提示 | +1
| font-size | String \| Number | 按钮尺寸，因为使用的是字体图标，所以尺寸由元素的font-size决定，不用传单位 | 32rpx 

### 事件
| 事件名  | 说明 | 参数 |
| :---: | :----: | :----: |
| onclick | 点击按钮时触发，可以从`event.detail.isActive`获取当前激活状态 | event: Event
