/*
 * @Author: qinsensen
 * @Date: 2020-07-15 13:31:34
 * @Description: 
 */ 
//index.js

// const { jumpPage } = require("../../utils/jumpPage")
import {jumpPage} from '../../utils/jumpPage'
// import surgeryList from '../../const/surgeryList'
import { request } from '../../utils/http'
import { getIndexData } from '../../utils/api'
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        roleType: 'PATIENT',
            // VISITORS(0, "访客"),
            // DOCTORS(1, "医生"),
            // ASSISTANT(2, "助理"),
            // AGENT(3, "盟友"),
            // PATIENT(4, "患者"),
        productModule: {},
        bannerArray: []
    },
    onLoad: function () {
        // if(app.globalData.platform) {
        //     this.setData({
        //         platform: app.globalData.platform
        //     })
        // }
        // if (app.globalData.userInfo) {
        //     this.setData({
        //         userInfo: app.globalData.userInfo,
        //         hasUserInfo: true
        //     })
        // } else if (this.data.canIUse) {
        //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        //     // 所以此处加入 callback 以防止这种情况
        //     app.userInfoReadyCallback = res => {
        //         this.setData({
        //             userInfo: res.userInfo,
        //             hasUserInfo: true
        //         })
        //     }
        // } else {
        //     // 在没有 open-type=getUserInfo 版本的兼容处理
        //     wx.getUserInfo({
        //         success: res => {
        //             app.globalData.userInfo = res.userInfo
        //             this.setData({
        //                 userInfo: res.userInfo,
        //                 hasUserInfo: true
        //             })
        //         }
        //     })
        // }
        this.getPageData()
    },
    onShow() {
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            console.log('设置选中项 0')
            this.getTabBar().setData({
                selected: 0
            })
        }
    },
    getUserInfo: function (e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    // 获取页面数据
    async getPageData() {
        const indexData = await getIndexData()
        const {productModule, bannerArray, serviceModule} = indexData
        this.setData({
            bannerArray,
            serviceModule,
            productModule
        },() => {
            const loginData = wx.getStorageSync('loginData');
            console.log(loginData)  
            console.log(loginData.roleType)   
        })
    },
    // 跳转客户管理
    goToClientManage() {
        jumpPage('/pages/clientManage/clientManage')
    },
    // 跳转我的名片
    goToMyCard() {
        jumpPage('/pages/myCard/myCard')
    }
})