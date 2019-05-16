## 数字选择器 NumberSelector

### 引入

```
{
  "navigationBarTitleText": "NumberSelector",
  "usingComponents": {
    "ac-number-selector": "@csr/awesome_components/components/number-selector/number-selector"
  }
}

<view>
  <ac-number-selector></ac-number-selector>
</view>
```

### 默认值

```
<ac-number-selector default-value="{{100}}"></ac-number-selector>
```

### 限制最大值 & 最小值
```
<ac-number-selector max-num="{{10}}" min-num="{{1}}"></ac-number-selector>
```


### 递增量 & 递减量
```
<ac-number-selector add-num="{{5}}" reduce-num="{{10}}"></ac-number-selector>
```

### 开启手动输入
```
<ac-number-selector manual></ac-number-selector>
```

### 数字展示区宽度自适应
```
<ac-number-selector adaptation max-width="300"></ac-number-selector>
```


### API
| 属性 | 类型 | 说明 | 默认值 |
| :---: | :----: | :----: | :----: |
| default-value | String | 默认值 | 0
| max-num | Number | 最大值 | 
| min-num | Number | 最小值  |
| add-num | Number | 每次增加的值  |
| reduce-num | Number | 每次减少的值  |
| manual | Boolean | 是否开启手动输入  | false
| adaptation | Boolean | 数字显示区的宽度随着数字改变二改变, 需要配合max-width一起使用 | false
| max-width | Boolean | 数字显示区的宽度的最大值  | 

### 事件
| 事件名  | 说明 | 参数 |
| :---: | :----: | :----: |
| oninput | 手动输入数字时触发，可以从`event.detail`中获取当前输入内容 | event: Event
| onblur | 输入框失去焦点时触发，可以从`event.detail`中获取当前输入内容 | event: Event
| onconfirm | 点击键盘确认按钮时触发，可以从`event.detail`中获取当前输入内容 | event: Event
| add | 点击加按钮时触发，可以从`event.detail`中获取当前输入内容 | event: Event
| reduce | 点击减按钮时触发，可以从`event.detail`中获取当前输入内容 | event: Event
