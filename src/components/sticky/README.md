## Sticky 粘性定位

### 引入

```
{
  "navigationBarTitleText": "sticky",
  "usingComponents": {
    "ac-sticky": "@csr/awesome_components/sticky/sticky"
  }
}

<view>
  <ac-sticky scroll-top="{{scrollTop}}">
    <view>内容</view>
  </ac-sticky>
</view>

Page({
  onPageScroll(e) {
    this.setData({
      scrollTop: e.scrollTop
    })
  }
})
```

### 指定sticky定位的元素离顶部的距离

```
<ac-sticky scroll-top="{{scrollTop}}" distance="{{100}}">
  <view>内容</view>
</ac-sticky>
```

### API
| 属性 | 类型 | 说明 | 默认值 |
| :---: | :----: | :----: | :----: |
| scrollTop | Number | 页面滚动距离 |
| distance | Number | sticky定位的元素离顶部的距离 |

### slot

| 名称 | 说明 |
| :---: | :----: |
|  | 默认展示内容 |


### tips
由于在scroll-view元素中实现Sticky定位存在性能问题，暂时只支持在页面中Sticky定位。
