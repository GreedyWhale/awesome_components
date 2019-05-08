Component({
  options: {
    multipleSlots: true,
  },
  properties: {
    scrollHeight: {
      type: Number,
      value: 0,
      observer(newValue) {
        if (newValue && typeof newValue === 'number') {
          this.setData({scrollStyle: `height: ${newValue}rpx;`})
        }
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
        if (newValue !== this.data.navIndex) {
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
    navIndex: null,
    scrollLock: false,
    scrollStyle: ''
  },
  lifetimes: {
    ready() {
      this.collectContentTop()
      this.getNavItemHeight()
    }
  },
  pageLifetimes: {},
  methods: {
    collectContentTop() {
      this.topList = []
      const list = Array.from({length: this.data.navLength}, (v, i) => i)
      const query = wx.createSelectorQuery()
      list.forEach(value => {
        const id = `#${this.data.contentItemId}${value}`
        query
          .select(id)
          .boundingClientRect(rect => {
            this.topList[value] = {id, top: rect.top, bottom: rect.bottom}
          })
          .exec()
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
      if (this.data.scrollLock) {
        if (scrollTop === this.data.contentScrollTop) {
          this.setData({
            scrollLock: false
          })
        }
        return
      }
      if (this.topList.length) {
        scrollTop += 40
        // eslint-disable-next-line max-len
        const currentIndex = this.topList.findIndex(item => scrollTop > item.top && scrollTop < item.bottom)
        if (this.data.navIndex === currentIndex || currentIndex < 0) {
          return
        }
        this.setData({
          navIndex: currentIndex,
          navScrollTop: (currentIndex * this.data.navItemHeight) - this.data.navItemHeight
        })
        this.triggerEvent('updateNav', currentIndex)
      }
    },
    updateContentScrollTop(activeIndex) {
      const index = this.topList.findIndex(value => value.id === `#${this.data.contentItemId}${activeIndex}`)
      this.setData({
        contentScrollTop: this.topList[index].top,
        navScrollTop: (activeIndex * this.data.navItemHeight) - this.data.navItemHeight,
        scrollLock: true,
      })
    }
  }
})
