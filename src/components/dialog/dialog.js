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
        this.toggleDialog(newValue)
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
      value: false
    },
    zIndex: {
      type: String,
      value: '1'
    }
  },

  data: {
    startAnimatim: false,
    visibleDialog: false
  },
  methods: {
    toggleDialog(visibleDialog) {
      if (visibleDialog) {
        this.setData({
          startAnimatim: visibleDialog,
          visibleDialog
        })
        return
      }
      this.setData({
        startAnimatim: visibleDialog,
      })
    },
    onClose() {
      this.triggerEvent('onclose')
    },
    onCancel() {
      this.triggerEvent('oncancel')
    },
    onConfirm() {
      this.triggerEvent('onconfirm')
    },
    onAnimationEnd() {
      if (!this.data.visible) {
        this.setData({
          visibleDialog: false
        })
      }
    }
  }
})
