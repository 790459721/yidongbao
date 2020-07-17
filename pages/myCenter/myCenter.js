/*
 * @Author: qinsensen
 * @Date: 2020-07-15 19:05:59
 * @Description: 
 */
// pages/myCenter/myCenter.js
import {jumpPage} from '../../utils/jumpPage'
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            console.log('设置选中项 2')
            this.getTabBar().setData({
                selected: 1
            })
        }
    },
    jumpToBalance() {
        jumpPage('/pages/balance/balance')
    },
    jumpAdvisory() {
        jumpPage('/pages/advisory/advisory')
    },
    jumpMyAlly() {
        jumpPage('/pages/myAlly/myAlly')
    },


})