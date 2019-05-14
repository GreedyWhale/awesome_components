Component({
  options: {
    multipleSlots: true,
  },
  properties: {
    scrollHeight: {
      type: Number,
      optionalTypes: [String],
      value: 0,
      observer(newValue) {
        this.setData({scrollStyle: `height: ${newValue};`})
      }
    },
    navLength: {
      type: Number,
      value: 0
    },
    contentItemId: {
      type: String,
      value: 'content-'
    },
    navItemSelector: {
      type: String,
      value: '.ac-nav-item'
    },
    activeIndex: {
      type: Number,
      value: 0,
      observer(newValue) {
        if (newValue !== this.data.currentIndex) {
          this.updateContentScrollTop(newValue)
        }
      }
    }
  },
  data: {
    toView: 'view-',
    navScrollTop: 0,
    contentScrollTop: 0,
    navItemHeight: 0,
    scrollLock: false,
    scrollStyle: '',
    currentIndex: null,
    scrollTop: 0
  },
  lifetimes: {
    ready() {
      this.collectContentTop()
      this.getNavItemHeight()
    }
  },
  methods: {
    collectContentTop() {
      this.topList = []
      const list = Array.from({length: this.data.navLength}, (v, i) => i)
      const query = wx.createSelectorQuery()
      list.forEach(value => {
        const id = `#${this.data.contentItemId}${value}`
        query
          .select(id)
          .boundingClientRect()
          .exec(
            rect => {
              this.topList[value] = {
                id,
                top: value * rect[value].height,
                bottom: rect[value].height * (value + 1)
              }
            }
          )
      })
    },
    getNavItemHeight() {
      const query = wx.createSelectorQuery()
      query
        .select(this.data.navItemSelector)
        .boundingClientRect(rect => {
          const height = rect ? rect.height : 50
          this.setData({
            navItemHeight: height
          })
        })
        .exec()
    },
    onScroll({detail: {scrollTop}}) {
      clearTimeout(this.scrollLockTimer)
      if (this.data.scrollLock) {
        this.scrollLockTimer = setTimeout(() => {
          this.setData({
            scrollLock: false
          })
        }, 200)
        return
      }
      if (this.topList.length) {
        scrollTop += 40
        // eslint-disable-next-line max-len
        const currentIndex = this.topList.findIndex(item => scrollTop > item.top && scrollTop <= item.bottom)
        if (currentIndex < 0 || currentIndex === this.data.currentIndex) {
          return
        }
        this.setData({
          currentIndex,
          scrollTop,
          navScrollTop: (currentIndex * this.data.navItemHeight) - this.data.navItemHeight
        })
        this.triggerEvent('updateNav', currentIndex)
      }
    },
    updateContentScrollTop(activeIndex) {
      const index = this.topList.findIndex(value => value.id === `#${this.data.contentItemId}${activeIndex}`)
      const navScrollTop = (activeIndex * this.data.navItemHeight) - this.data.navItemHeight
      this.setData({
        contentScrollTop: this.topList[index].top,
        navScrollTop: navScrollTop < 0 ? 0 : navScrollTop,
        scrollLock: true,
        currentIndex: activeIndex
      })
    }
  }
})
