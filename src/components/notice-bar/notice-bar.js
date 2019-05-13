Component({
  options: {
    multipleSlots: true
  },
  properties: {
    text: {
      type: String,
      value: ''
    },
    top: {
      type: Number,
      optionalTypes: [String],
      value: 0
    },
    color: {
      type: String,
      value: '#ffffff'
    },
    bgColor: {
      type: String,
      value: '#19c019'
    },
    visibleIcon: {
      type: Boolean,
      value: true
    },
    iconColor: {
      type: String,
      value: ''
    },
    close: {
      type: Boolean,
      value: true
    },
    autoplay: {
      type: Boolean,
      value: true
    },
    speed: {
      type: Number,
      optionalTypes: [String],
      value: 10
    }
  },

  data: {
  },
  lifetimes: {
  },
  methods: {
    onTap() {
      this.triggerEvent('onclick')
    },
    onClose() {
      this.triggerEvent('onclose')
    }
  }
})
