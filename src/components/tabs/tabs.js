/* eslint-disable promise/always-return */
/* eslint-disable promise/catch-or-return */

Component({
  options: {
    multipleSlots: true
  },
  relations: {
    '../tabs-panel/tabs-panel': {
      type: 'child',
      linked(child) {
        const titles = JSON.parse(JSON.stringify(this.data.titles)).concat(child.data.title)
        const disabled = JSON.parse(JSON.stringify(this.data.disabled)).concat(child.data.disabled)
        this.setData({
          titles,
          disabled
        })
      },
      unlinked(child) {
        const index = this.data.titles.indexOf(child.data.title)
        const titles = JSON.parse(JSON.stringify(this.data.titles)).splice(index, 1)
        const disabled = JSON.parse(JSON.stringify(this.data.disabled)).splice(index, 1)
        this.setData({
          titles,
          disabled
        })
      }
    }
  },
  properties: {
    defaultActive: {
      type: Number,
      value: 0
    },
    animated: {
      type: Boolean,
      value: false
    },
    swipeable: {
      type: Boolean,
      value: false
    }
  },

  data: {
    titles: [],
    activeLineStyle: '',
    activeIndex: 0,
    scrollY: 0,
    tabsBodyTrackStyle: '',
    disabled: []
  },
  lifetimes: {
    ready() {
      this.init()
    }
  },
  methods: {
    init() {
      this.getScrollStyle()
        .then(rect => {
          this.setChildrenStyle(rect)
          this.setData({
            wrapperLeft: rect.left
          }, this.checkDefaultActive)
        })
    },
    getScrollStyle() {
      return new Promise(resolve => {
        wx.createSelectorQuery()
          .in(this)
          .select('.ac-tabs-header-wrapper')
          .fields({rect: true, scrollOffset: true, size: true}, rect => {
            resolve(rect)
          })
          .exec()
      })
    },
    getTabStyle(index) {
      return new Promise(resolve => {
        wx.createSelectorQuery()
          .in(this)
          .select(`#ac-tabs-header-item-${index}`)
          .boundingClientRect(rect => { resolve(rect) })
          .exec()
      })
    },
    checkDefaultActive() {
      this.upDatePanels(this.data.defaultActive)
      this.setData({
        activeIndex: this.data.defaultActive
      }, () => this.updateActiveLine())
    },
    updateActiveLine(parentRect = null) {
      const scrollLeft = parentRect ? parentRect.scrollLeft : 0
      const index = this.data.activeIndex
      this.getTabStyle(index)
        .then(rect => {
          const left = rect.left - this.data.wrapperLeft + scrollLeft
          const scrollY = parentRect ? this.getScrollY(parentRect, rect) : left
          this.setData({
            activeLineStyle: `width: ${rect.width}px; left: ${left}px`,
            scrollY
          })
        })
    },
    clickTab({currentTarget: {dataset: {index}}}) {
      if (this.data.disabled[index]) { return }
      this.updateActiveIndex(index, 'onclick')
    },
    getScrollY(parentRect = {}, rect = {}) {
      let {scrollY} = this.data
      if (scrollY !== parentRect.scrollLeft) {
        return parentRect.scrollLeft
      }
      if (rect.right >= parentRect.right) {
        scrollY += rect.width
      }
      if (rect.left <= parentRect.left) {
        scrollY += (rect.left - rect.width)
      }
      return scrollY
    },
    setChildrenStyle(rect) {
      const nodes = this.getRelationNodes('../tabs-panel/tabs-panel')
      nodes.forEach(node => {
        node.setData({width: rect.width, animated: this.data.animated})
      })
    },
    upDatePanels(index) {
      const nodes = this.getRelationNodes('../tabs-panel/tabs-panel')
      if (this.data.animated) {
        this.setTabsBodyTrackStyle(index)
      }
      nodes.forEach(node => {
        node.setData({activePanel: this.data.titles[index]})
      })
    },
    setTabsBodyTrackStyle(index) {
      this.setData({
        tabsBodyTrackStyle: `left: -${index * 100}%;`
      })
    },
    onTouchStart(e) {
      if (!this.data.swipeable) { return }
      this.setData({
        startX: e.touches[0].clientX
      })
    },
    onTouchEnd(e) {
      if (!this.data.swipeable) { return }
      const {clientX} = e.changedTouches[0]
      // eslint-disable-next-line prefer-const
      let {activeIndex, disabled, titles} = this.data
      // 左滑
      if (clientX - this.data.startX < -10) {
        activeIndex = activeIndex + 1 <= titles.length ? activeIndex + 1 : titles.length
        if (disabled[activeIndex]) {
          const newDisabled = disabled.slice(activeIndex)
          activeIndex += newDisabled.findIndex(value => !value)
          if (activeIndex < 0) { return }
        }
      }
      // 右滑
      if (clientX - this.data.startX > 10) {
        activeIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : 0
        if (disabled[activeIndex]) {
          const newDisabled = disabled.slice(0, activeIndex + 1)
          activeIndex = newDisabled.lastIndexOf(false)
          if (activeIndex < 0) { return }
        }
      }
      this.updateActiveIndex(activeIndex, 'onchange')
    },
    updateActiveIndex(index, eventName) {
      this.upDatePanels(index)
      this.triggerEvent(eventName, {index, title: this.data.titles[index]})
      this.setData({
        activeIndex: index
      }, () => {
        this.getScrollStyle().then((rect) => this.updateActiveLine(rect))
      })
    }
  }
})
