## 步骤条 Steps

### 引入

```
{
  "navigationBarTitleText": "Steps",
  "usingComponents": {
    "ac-steps": "@csr/awesome_components/steps/steps"
  }
}

<view>
  <ac-steps steps="{{steps}}" current-step="{{currentStep}}"></ac-steps>
</view>

Page({
  data: {
    steps: ['任务1', '任务二', '任务三'],
    currentStep: 2
  }
})
```


### 自定义颜色
```
<view>
  <ac-steps steps="{{steps}}" current-step="{{currentStep}}" colors="{{colors}}"></ac-steps>
</view>

Page({
  data: {
    steps: ['任务1', '任务二', '任务三'],
    currentStep: 2,
    colors: {
      finished: 'fuchsia',
      active: 'mediumslateblue'
    }
  }
})
```

### 自定义步骤名样式 & 步骤图标样式

```
<view>
  <ac-steps
    steps="{{steps}}"
    current-step="{{currentStep}}"
    colors="{{colors}}"
    custom-class-title="title"
    custom-class-icon="icon"></ac-steps>
</view>

Page({
  data: {
    steps: ['任务1', '任务二', '任务三'],
    currentStep: 2,
    colors: {
      finished: 'fuchsia',
      active: 'mediumslateblue'
    }
  }
})

// 原图标使用iconfont实现，所以覆盖需要使用同样的iconfont方式进行覆盖
@import './wxss/iconfont.wxss';
.title {
  font-size: 40rpx;
}
.icon {
  font-family: "current-iconfont" !important;
}
.icon::before {
  content: '\e7d6'
}
```

### API
| 属性 | 类型 | 说明 | 默认值 |
| :---: | :----: | :----: | :----: |
| steps | Array | 步骤数据 | 
| current-step | Number | 当前步骤 | 
| colors | Object | 自定义完成步骤的颜色和当前步骤的颜色 | {active: '#1f68f1', finished: '#158b15'}

### 外部样式类

| 名称 | 说明 |
| :---: | :----: |
| custom-class-title | 步骤名样式类 | 
| custom-class-icon | 步骤图标样式类 | 

## 注意：
currentStep从1开始
