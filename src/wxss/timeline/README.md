## 时间轴 Timeline 

### 用法
该组件是一个wxss文件，只要按照例子中的html结构 + 对应的class名即可

wxss 文件
```
@import '../../miniprogram_npm/@csr/awesome_components/wxss/timeline/timeline.wxss';
```
wxml 文件
```
<view class="ac-timeline-wrapper">
  <view class="ac-timeline-title">第一天</view>
  <view class="ac-timeline-content-wrapper">
    <view class="ac-timeline-content-item">
      <view class="ac-timeline-icon-wrapper">
        <view class="ac-timeline-icon"></view>
      </view>
      <view class="ac-timeline-content">创建角色</view>
    </view>
    <view class="ac-timeline-content-item">
      <view class="ac-timeline-icon-wrapper">
        <view class="ac-timeline-icon"></view>
      </view>
      <view class="ac-timeline-content">等级提升至15级</view>
    </view>
    <view class="ac-timeline-content-item">
      <view class="ac-timeline-icon-wrapper">
        <view class="ac-timeline-icon"></view>
      </view>
      <view class="ac-timeline-content">加入工会</view>
    </view>
    <view class="ac-timeline-content-item">
      <view class="ac-timeline-icon-wrapper">
        <view class="ac-timeline-icon"></view>
      </view>
      <view class="ac-timeline-content">通关简单副本</view>
      <view class="ac-timeline-content">通关简单副本</view>
      <view class="ac-timeline-content">通关简单副本</view>
    </view>
  </view>

  <view class="ac-timeline-title">第二天</view>
  <view class="ac-timeline-content-wrapper">
    <view class="ac-timeline-content-item">
      <view class="ac-timeline-icon-wrapper">
        <view class="ac-timeline-icon"></view>
      </view>
      <view class="ac-timeline-content">找到固定队友</view>
    </view>
    <view class="ac-timeline-content-item">
      <view class="ac-timeline-icon-wrapper">
        <view class="ac-timeline-icon"></view>
      </view>
      <view class="ac-timeline-content">等级提升至30级</view>
    </view>
    <view class="ac-timeline-content-item">
      <view class="ac-timeline-icon-wrapper">
        <view class="ac-timeline-icon"></view>
      </view>
      <view class="ac-timeline-content">成功拜师</view>
    </view>
    <view class="ac-timeline-content-item">
      <view class="ac-timeline-icon-wrapper">
        <view class="ac-timeline-icon"></view>
      </view>
      <view class="ac-timeline-content">通关困难副本</view>
      <view class="ac-timeline-content">通关困难副本</view>
      <view class="ac-timeline-content">通关困难副本</view>
    </view>
  </view>
</view>
```