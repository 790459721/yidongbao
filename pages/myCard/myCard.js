/*
 * @Author: qinsensen
 * @Date: 2020-07-16 18:29:43
 * @Description: 
 */
// pages/myCard/myCard.js
import {
    jumpPage
} from '../../utils/jumpPage'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hasInfo: false,
        userInfo: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setNavigationBarColor()
        // this.getLocalData()
        // const doctorInfo = wx.getStorageSync('doctorInfo');
        // console.log(doctorInfo)
    },
    onShow() {
        this.getLocalData()
    },
    // 设置导航栏颜色
    setNavigationBarColor() {
        wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#34D8A8',
        });
    },
    setNavigationBarTitle(title) {
        wx.setNavigationBarTitle({
            title,
        });
    },
    //   获取本地存储数据
    getLocalData() {
        const userInfo = wx.getStorageSync('userInfo') || null;
        console.log(userInfo)
        if(userInfo) {
            const { hospitalName, ...rest} = userInfo
            this.setNavigationBarTitle(hospitalName)
            this.setData({
                hasInfo: true,
                userInfo: {...rest}
            },() => {
                // wx.removeStorageSync('doctorInfo');
            })
        } 
    },
    // 跳转到编辑页面
    jumpMyCard() {
        jumpPage('/pages/editMyCard/editMyCard')
    }
})