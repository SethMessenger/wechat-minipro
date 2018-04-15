Page({
  data: {
    list: [
      {
        id: 'view',
        name: '您想怎么看',
        open: false,
        pages: ['view', 'scroll-view', 'swiper']
      }, {
        id: 'content',
        name: '您想怎么运行',
        open: false,
        pages: ['text', 'icon', 'progress']
      }, {
        id: 'form',
        name: '您想怎么填单子',
        open: false,
        pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch', 'textarea']
      }, {
        id: 'media',
        name: '您想看什么媒体',
        open: false,
        pages: ['image', 'audio', 'video']
      }, {
        id: 'map',
        name: '您想怎么导航',
        pages: ['map']
      }, {
        id: 'canvas',
        name: '画布',
        pages: ['canvas']
      }, {
        id: 'nav',
        name: '页面导航',
        open: false,
        pages: ['navigator']
      }
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
})

