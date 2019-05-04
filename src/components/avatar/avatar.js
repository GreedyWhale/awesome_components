Component({
  options: {
    multipleSlots: true
  },
  properties: {
    url: {
      type: String,
      value: ''
    },
    urls: {
      type: Array,
      value: []
    },
    width: {
      type: String,
      optionalTypes: [Number],
      value: '100'
    },
    height: {
      type: String,
      optionalTypes: [Number],
      value: ''
    },
    shape: {
      type: String,
      value: 'square'
    },
    count: {
      type: String,
      optionalTypes: [Number],
      value: ''
    },
    visibleDot: {
      type: Boolean,
      value: false
    },
    bgColor: {
      type: String,
      value: ''
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
