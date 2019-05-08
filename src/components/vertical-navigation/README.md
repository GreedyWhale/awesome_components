## VerticalNavigation 垂直导航

### 引入

```
// page.json
{
  "navigationBarTitleText": "vertical-navigation",
  "usingComponents": {
    "ac-vertical-navigation": "@csr/awesome_components/vertical-navigation/vertical-navigation"
  }
}

// page.wxml
<view>
  <ac-vertical-navigation bindupdateNav="updateActiveNav" activeIndex="{{navIndex}}" nav-length="{{6}}" content-item-id="content-" nav-item-selector=".ac-nav-item">
    <view slot="nav">
      <view
        id="nav-{{index}}" bindtap="onTapNav" data-index="{{index}}"
        wx:for="{{navs}}" wx:key="{{index}}" class="ac-nav-item {{navIndex === index ? 'ac-nav-item-active' : ''}}" >
        {{item}}
      </view>
    </view>
    <view slot="content" class="ac-nav-scroll-right">
      <view
        wx:for="{{contents}}" wx:key="{{index}}"
        id="content-{{index}}" class="ac-nav-scroll-right-item">
        {{item}}
      </view>
    </view>
  </ac-vertical-navigation>
</view>

// page.js
Page({
  data: {
    navIndex: 0
    navs: ['nav-1','nav-2','nav-3','nav-4','nav-5','nav-6'],
    contents: ['content-1','content-2','content-3','content-4','content-5','content-6']
  },
  methods: {
    onTapNav({currentTarget: {dataset: {index}}}) {
      this.setData({
        navIndex: index
      })
    },
    updateActiveNav(e) {
      this.setData({
        navIndex: e.detail
      })
    }
  }
})

// page.wxss
@import '../../wxss/vertical-navigation/vertical-navigation.wxss';
```

### API
| 属性 | 类型 | 说明 | 默认值 |
| :---: | :----: | :----: | :----: |
| scrollHeight | Number | 导航高度，单位rpx，不需要传单位 | 100vh
| nav-length | Number | 左边导航数组的长度 | 
| content-item-id | String | 右边内容区包裹内容元素id，id的格式为xxx-当前展示面板的下标（index）,例如第一个导航对应的面板就是'xxx-0'，不用传递`#` | content-
| nav-item-selector | String | 导航区导航元素的选择器，用于确定每个导航的高度，需要传递`.或者#` | `.ac-nav-item`
| activeIndex | Number | 激活的导航下标（index） | 0

### 事件
| 事件名  | 说明 | 参数 |
| :---: | :----: | :----: |
| updateNav | 当右边区域滚动到对应左边区域中的导航时，触发。event.detail = index | event: Event

### slot

| 名称 | 说明 |
| :---: | :----: |
| nav | 左边可滚动内容 |
| content | 右边可滚动内容 |

### wxss

| 名称 | 说明 |
| :---: | :----: |
| ac-nav-item | 导航条的样式
| ac-nav-item-active | 导航条激活的样式
| ac-nav-item-active | 导航条激活的样式
| ac-nav-scroll-right | 右边整个可滚动区域的样式
| ac-nav-scroll-right-item | 右边可滚动区域中每一项包裹内容元素的样式


### tips
左右两边联动的功能需要组件使用者监听updateNav事件，然后在使用组件的页面改动当前激活的导航下标，该组件提供了一套默认的css样式，需要使用者自行导入。

