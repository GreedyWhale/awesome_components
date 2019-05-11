Component({
  options: {
    multipleSlots: true
  },
  externalClasses: ['custom-class-root'],
  properties: {
    type: {
      type: String,
      value: 'loading'
    },
    width: {
      type: Number,
      optionalTypes: [String],
      value: 0
    },
    height: {
      type: Number,
      optionalTypes: [String],
      value: 0
    },
    color: {
      type: String,
      value: ''
    }
  }
})
