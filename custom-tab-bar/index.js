/*
 * @Author: qinsensen
 * @Date: 2020-07-15 13:40:43
 * @Description: 
 */
Component({
    data: {
        selected: 0,
        color: "#999",
        selectedColor: "#33C29D",
        list: [{
            pagePath: "/pages/index/index",
            iconPath: "/icons/icon_home.png",
            selectedIconPath: "/icons/icon_home_selected.png",
            text: "首页"
        }, {
            pagePath: "/pages/myCenter/myCenter",
            iconPath: "/icons/icon_my.png",
            selectedIconPath: "/icons/icon_my_selected.png",
            text: "个人中心"
        }]
    },
    attached() {},
    methods: {
        switchTab(e) {
            const dataset = e.currentTarget.dataset
            const path = dataset.path
            const index = dataset.index
            //如果是特殊跳转界面
            if (this.data.list[index].isSpecial) {
                wx.navigateTo({
                    url: path
                })
            } else {
                //正常的tabbar切换界面
                wx.switchTab({
                    url: path
                })
                this.setData({
                    selected: index
                })
            }
        }
    }
})