## 喜欢按钮 Dialog

### 引入

```
{
  "navigationBarTitleText": "Dialog",
  "usingComponents": {
    "ac-dialog": "@csr/awesome_components/components/dialog/dialog"
  }
}

<view>
  <ac-dialog visible="{{true}}" title="标题" content="内容"></ac-dialog>
</view>
```

### 自定义按钮文案

```
<view>
  <ac-dialog visible="{{true}}" title="标题" content="内容" confirm-desc="知道了" cancel-desc="退下"></ac-dialog>
</view>
```

### 无标题
```
<view>
  <ac-dialog visible="{{true}}"  content="内容"></ac-dialog>
</view>
```

### 隐藏取消按钮
```
<view>
  <ac-dialog visible="{{true}}" title="标题" content="内容" visible-cancel-btn="{{false}}"></ac-dialog>
</view>
```

### 隐藏关闭图标
```
<view>
  <ac-dialog visible="{{true}}" title="标题" content="内容" visible-close-icon="{{false}}"></ac-dialog>
</view>
```

### 自定义弹窗
```
<view>
  <ac-dialog visible="{{true}}" visible-footer="{{false}}">
    <view> 自定义内容 </view>
  </ac-dialog>
</view>
```

### API
| 属性 | 类型 | 说明 | 默认值 |
| :---: | :----: | :----: | :----: |
| visible | Boolean | 是否展示弹窗 | false
| title | String | 弹窗标题 | 
| content | String | 弹窗内容 |
| confirm-desc | String | 确认按钮文案 | 确认
| cancel-desc | String | 取消按钮文案 | 取消
| visible-cancel-btn | Boolean | 是否展示取消按钮 | true
| visible-close-icon | Boolean | 是否展示关闭图标 | true
| visible-footer | Boolean | 是否显示按钮 | true
| z-index | string | 弹窗z-index值 | 1


### 事件
| 事件名  | 说明 | 参数 |
| :---: | :----: | :----: |
| onclose | 点击关闭图标时触发 | event: Event
| oncancel | 点击取消按钮时触发 | event: Event
| onconfirm | 点击确认按钮时触发 | event: Event

### slot

| 名称 | 说明 |
| :---: | :----: |
|  | 自定义弹窗内容 |

