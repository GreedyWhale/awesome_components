## Watermark 添加水印组件

### 引入

```
{
  "navigationBarTitleText": "Watermark",
  "usingComponents": {
    "ac-watermark": "@csr/awesome_components/watermark/watermark"
  }
}

<view>
  <ac-watermark></ac-watermark>
</view>
```

### tips：
  - 字体颜色支持css颜色名，十六进制颜色，rgba颜色，默认#FFFFFF
  - 水印文字可拖动，默认位置在图片的左上角
  - 字体大小单位px，默认32px
  - 生成之后的图片会调用wx.previewImage展示预览图片，这时候可长按图片进行保存等操作
