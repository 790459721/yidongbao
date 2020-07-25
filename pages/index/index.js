/*
 * @Author: qinsensen
 * @Date: 2020-07-15 13:31:34
 * @Description: 
 */ 
//index.js

import {jumpPage} from '../../utils/jumpPage'
import { request } from '../../utils/http'
import { getIndexData } from '../../utils/api'
import { patientType, visitorType, doctorType } from '../../const/constMap'
//获取应用实例
const app = getApp()

Page({
    data: {
        userInfo: {},
        hasUserInfo: false,
        roleType: 0,
        productModule: {},
        bannerArray: []
    },
    onLoad: function () {
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
        const userInfo = wx.getStorageSync('userInfo'); 
        let roleType = 0
        if(patientType.includes(userInfo.roleType)) {
            roleType = 2
        }else if(doctorType.includes(userInfo.roleType)) {
            roleType = 1
        }else {
            roleType = 0
        }
        
        this.setData({
            bannerArray,
            serviceModule,
            productModule,
            roleType
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