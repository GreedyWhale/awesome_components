## 进度条 Progress

### 引入

```
{
  "navigationBarTitleText": "Progress",
  "usingComponents": {
    "ac-progress": "@csr/awesome_components/components/progress/progress"
  }
}

<view>
  <ac-progress percent="80"></ac-progress>
</view>
```


### 显示进度
```
<ac-progress percent="20">20%</ac-progress>
```

### 自定义进度条宽高背景色
```
<ac-progress percent="20" custom-style="{{ {width: '150rpx', height: '20rpx', background: 'blue'} }}">20%</ac-progress>
```

### 自定义进度颜色
```
<ac-progress percent="20" progress-color="pink">20%</ac-progress>
```

### 开启动态条纹效果
```
<ac-progress percent="20" stripe="{{true}}">20%</ac-progress>
```

### API
| 属性 | 类型 | 说明 | 默认值 |
| :---: | :----: | :----: | :----: |
| percent | String \| Number | 进度百分比 |
| customStyle | Object | 自定义进度条样式的对象，如果有background属性，改变的是进度条下面的背景色而不是进度条本身的背景色 | 
| progress-color | String | 进度条颜色 | #289428
| stripe | Boolean | 是否开启动态条纹效果 | false

### slot

| 名称 | 说明 |
| :---: | :----: |
|  | 会显示在进度条中间的文字 | 
