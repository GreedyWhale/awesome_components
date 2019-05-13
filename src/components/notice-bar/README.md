## 数字选择器 NoticeBar

### 引入

```
{
  "navigationBarTitleText": "NoticeBar",
  "usingComponents": {
    "ac-notice-bar": "@csr/awesome_components/notice-bar/notice-bar"
  }
}

<view>
  <ac-notice-bar text="我是输给了地球的重力"></ac-notice-bar>
</view>
```

### 自定义背景色和字体颜色

```
<ac-notice-bar text="我是输给了地球的重力" color="red" bg-color="yellow"></ac-notice-bar>
```

### 不滚动

```
<ac-notice-bar text="我是输给了地球的重力" autoplay="{{false}}"></ac-notice-bar>
```

### 不展示关闭按钮和前缀图标

```
<ac-notice-bar text="我是输给了地球的重力" close="{{false}}" visible-icon="{{false}}"></ac-notice-bar>
```


### API
| 属性 | 类型 | 说明 | 默认值 |
| :---: | :----: | :----: | :----: |
| top | String\| Number | 距离顶部距离 | 0
| color | String | 字体颜色 | #FFFFFF
| bg-color | String | 背景色 | #19c019
| visible-icon | Boolean | 是否展示前缀图标  | true
| icon-color | String | 图标颜色  | 默认和字体颜色相同
| close | Boolean | 是否显示关闭按钮 | true
| autoplay | Boolean | 是否滚动 | true
| speed | String\| Number | 滚动速度，单位s。单位不用传  | 10s

### 事件
| 事件名  | 说明 | 参数 |
| :---: | :----: | :----: |
| onclick | 点击NoticeBar时触发 | event: Event
| onclose | 点击关闭按钮时触发 | event: Event
