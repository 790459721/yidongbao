// pages/myCard/myCard.js
import {jumpPage} from '../../utils/jumpPage'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      hasInfo: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
        title: '复旦大学附属华山医院',
    });
    wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#34D8A8',
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  jumpMyCard() {
    jumpPage('/pages/editMyCard/editMyCard')
  }
})