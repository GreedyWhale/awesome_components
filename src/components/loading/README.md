## 加载 Loading

### 引入

```
{
  "navigationBarTitleText": "Loading",
  "usingComponents": {
    "ac-loading": "@csr/awesome_components/loading/loading"
  }
}

<ac-loading></ac-loading>
```

### 不同类型的loading

```
<ac-loading></ac-loading>
<ac-loading type="grow"></ac-loading>
<ac-loading type="flood"></ac-loading>
<ac-loading type="ring"></ac-loading>
<ac-loading type="pendulum"></ac-loading>
<ac-loading type="boomerang"></ac-loading>
<ac-loading type="dots"></ac-loading>
<ac-loading type="square"></ac-loading>
<ac-loading type="sudoku"></ac-loading>
<ac-loading type="snake"></ac-loading>
<ac-loading type="wave"></ac-loading>
```

### 改变宽、高、颜色

```
<ac-loading width="200" height="200" color="pink"></ac-loading>
```




### API
| 属性 | 类型 | 说明 | 默认值 |
| :---: | :----: | :----: | :----: |
| type | String | loading类型，可选值有：loading，grow，flood，ring，pendulum，boomerang，dots，square，sudoku，snake，wave | loading
| width | String\| Number | 宽度 | 
| height | String\| Number | 高度 | 
| color | String | 颜色 | black |

### 不同类型loading的宽高比
| 类型 | 宽高比 |
| :---: | :----: |
| loading | 1:1 |
| grow | 2:1 |
| flood | 1:1 |
| ring | 1:1 |
| pendulum | 5:1 |
| boomerang | 3:4 |
| dots | 4:1 |
| square | 1:1 |
| sudoku | 1:1 |
| snake | 1:1 |
| wave | 4:1 |


### 外部样式类

| 名称 | 说明 |
| :---: | :----: |
| custom-class-root | loading根元素样式类 | 
