Component({
  options: {
    multipleSlots: true
  },
  relations: {
    '../tabs/tabs': {
      type: 'parent',
    }
  },
  properties: {
    title: {
      type: String,
      value: ''
    },
    disabled: {
      type: Boolean,
      value: false
    }
  },

  data: {
    width: 0,
    activePanel: '',
    animated: ''
  },
  lifetimes: {
    attached() {
    },
  },
  methods: {
  }
})
