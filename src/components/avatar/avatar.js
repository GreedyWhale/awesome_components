Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    url: { // 头像链接
      type: String,
      value: ''
    },
    urls: {
      type: Array,
      value: []
    },
    width: { // 宽度
      type: String,
      optionalTypes: [Number],
      value: '100'
    },
    height: { // 高度
      type: String,
      optionalTypes: [Number],
      value: ''
    },
    shape: {
      type: String,
      value: 'square' // 圆角 rounded，圆形 circle
    },
    count: {
      type: String,
      optionalTypes: [Number],
      value: '' // 圆角 rounded，圆形 circle
    },
    visibleDot: {
      type: Boolean,
      value: false
    }
  },

  data: {},

  lifetimes: {
    attached() {},
    moved() { },
    detached() { },
  },

  pageLifetimes: {
    show() { },
    hide() { },
    resize() { },
  },

  methods: {
    onClick(e) {
      this.triggerEvent('onclick', e)
    }
  }

})
