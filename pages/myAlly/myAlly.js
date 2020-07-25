/*
 * @Author: qinsensen
 * @Date: 2020-07-17 16:40:02
 * @Description: 
 */
import { getAllyInfo } from "../../utils/api";

 
// pages/myAlly/myAlly.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sourceId: null,
    idShowDailog: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const userInfo = wx.getStorageSync('userInfo');
    this.getAllyInfo()
    this.setData({
        sourceId: userInfo.id
    })
  },
  showDailog() {
    this.setData({
        idShowDailog: true
    })
  },
  handleCancle() {
    this.setData({
        idShowDailog: false
    })
  },
  async getAllyInfo() {
    const res = await getAllyInfo()
    console.log(res);
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    console.log(res)
    const {sourceId} = this.data
    console.log(sourceId)
    return {
        title: '医董保',
        path: `/pages/editMyCard/editMyCard?fromw=ToFace&sourceId=${sourceId}`,
        imageUrl: 'https://minipropub.oss-cn-shenzhen.aliyuncs.com/mini-yidongbao/share_banner_img.png'
    }
  },
})