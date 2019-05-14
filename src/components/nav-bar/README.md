## 自定义导航栏 NavBar

### 引入

```
// app.json
{
  "window":{
    "navigationStyle": "custom"
  }
}

// page.json
{
  "navigationBarTitleText": "NavBar",
  "usingComponents": {
    "ac-nav-bar": "@csr/awesome_components/nav-bar/nav-bar"
  }
}

<ac-nav-bar
  title="页面标题"
  home-path="/pages/home/home"
></ac-nav-bar>
```

### 改变导航栏背景色

```
<ac-nav-bar
  title="页面标题"
  home-path="/pages/home/home"
  background-color="red"
></ac-nav-bar>
```

### 改变导航栏字体颜色

```
<ac-nav-bar
  title="页面标题"
  home-path="/pages/home/home"
  nav-bar-text-color="white"
></ac-nav-bar>
```

### 使导航栏字体icon颜色和字体颜色不同

```
<ac-nav-bar
  title="页面标题"
  home-path="/pages/home/home"
  nav-bar-icon-color="pink"
  nav-bar-text-color="white"
></ac-nav-bar>
```

### 使用图片作为背景

```
<ac-nav-bar
  title="页面标题"
  home-path="/pages/home/home"
  bg-image="xxx.png"
></ac-nav-bar>
```

### 自定义左上角按钮

```
<ac-nav-bar
  title="页面标题"
  home-path="/pages/home/home"
  custom-left-corner="{{true}}"
>
  <view slot="left-corner" style="height: 100%;">返回</view>
</ac-nav-bar>
```

### 自定义中间内容

```
<ac-nav-bar home-path="/pages/home/home">
  <view slot="content">自定义内容</view>
</ac-nav-bar>
```



### API
| 属性 | 类型 | 说明 | 默认值 |
| :---: | :----: | :----: | :----: |
| title | String | 页面标题 | 
| nav-bar-text-color | String | 页面标题颜色 | black
| nav-bar-icon-color | String | 左上角按钮颜色，如不传默认和标题颜色相同 |
| pill-padding-bottom | Number | 右上角胶囊按钮的padding-left，单位px | 5
| custom-left-corner | Boolean | 开启自定义左上角内容 | false
| home-path | String | 首页路径 | 
| background-color | String | 导航栏背景色 | transparent
| z-index | String \| Number | 导航栏的z-index | 3
| bg-image | string | 导航栏背景图 | 
| img-mode | string | 导航栏背景图，裁剪模式 | widthFix
| enable-placeholder | Boolean | 是否开启占位元素，该元素的高度和navbar的高度相同 | true


### 事件
| 事件名  | 说明 | 参数 |
| :---: | :----: | :----: |
| onlayout | 导航栏ready生命周期时触发，返回导航栏的高度，单位px，event.detail = {height: xx} | event: Event


### slot

| 名称 | 说明 |
| :---: | :----: |
| left-corner | 左上角内容 |
| content | 中间内容 |

### 外部样式类

| 名称 | 说明 |
| :---: | :----: |
| custom-class-title | 导航栏标题样式类 | 
| custom-class-img | 导航栏背景图片样式类 | 
