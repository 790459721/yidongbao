/*
 * @Author: your name
 * @Date: 2020-07-18 18:20:51
 * @LastEditTime: 2020-07-23 18:40:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yidongbao\app.js
 */ 
//app.js
import { getOpendId } from './utils/api'
App({
  onLaunch: function () {
    // const token = wx.getStorageSync('token')
    // if(token) {
    //     return
    // }
    // // 登录
    // wx.login({
    //   success: res => {
    //       console.log(res)
    //       wx.request({
    //           url: 'http://test.api.mini.dasurebao.com/v1/login',
    //           data: {
    //               code: res.code,
    //               appId: 'wx20b78713181410a8'
    //           },
    //           header: {'content-type':'application/x-www-form-urlencoded'},
    //           method: 'POST',
    //           dataType: 'json',
    //           responseType: 'text',
    //           success: (result)=>{
    //               console.log(result)
    //               wx.setStorageSync('token',result.data.token)
    //           },
    //           fail: ()=>{},
    //           complete: ()=>{}
    //       });
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //       console.log(res)
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo
    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
    this.checkIsIPhoneX()
  },
  checkIsIPhoneX: function() {
    const self = this
    wx.getSystemInfo({
      success: (res) => {
        // 根据 model 进行判断
        if (res.model.includes('iPhone X')) {
          this.globalData.isIPX = true
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    platform: 1, //  0: 初始 1:医生 2:患者 3:普通用户
    isIPX: false
    // VISITORS(0, "访客"),
    // DOCTORS(1, "医生"),
    // ASSISTANT(2, "助理"),
    // AGENT(3, "盟友"),
    // PATIENT(4, "患者"),
  }
})