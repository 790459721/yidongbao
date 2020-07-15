/*
 * @Author: qinsensen
 * @Date: 2020-07-15 13:31:34
 * @Description: 
 */ 
//logs.js
const util = require('../../utils/util.js')

Page({
    data: {
        logs: []
    },
    onLoad: function () {
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map(log => {
                return util.formatTime(new Date(log))
            })
        })
    },
    onShow() {
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            console.log('设置选中项 2')
            this.getTabBar().setData({
                selected: 1
            })
        }
    }
})