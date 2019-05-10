/* eslint-disable promise/always-return */
/* eslint-disable promise/catch-or-return */

Component({
  options: {
    multipleSlots: true
  },
  properties: {
    visible: {
      type: Boolean,
      value: false,
      observer(newValue) {
        this.setData({
          startAnimatim: newValue
        })
      }
    },
    title: {
      type: String,
      value: ''
    },
    content: {
      type: String,
      value: ''
    },
    confirmDesc: {
      type: String,
      value: '确认'
    },
    cancelDesc: {
      type: String,
      value: '取消'
    },
    visibleCancelBtn: {
      type: Boolean,
      value: true
    },
    visibleCloseIcon: {
      type: Boolean,
      value: true
    },
    custom: {
      type: Boolean,
      value: true
    }
  },

  data: {
    startAnimatim: false
  },
  methods: {
    onClose() {
      this.triggerEvent('onclose')
    },
    onCancel() {
      this.triggerEvent('oncancel')
    },
    onConfirm() {
      this.triggerEvent('onconfirm')
    }
  }
})
