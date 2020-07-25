/*
 * @Author: your name
 * @Date: 2020-07-25 21:47:14
 * @LastEditTime: 2020-07-25 22:58:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yidongbao\pages\securityDetail\securityDetail.js
 */ 
// pages/securityDetail/securityDetail.js
import { getProductItemDetail } from '../../utils/api';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productItemDetailArray: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getProductItemDetail()
  },
  async getProductItemDetail() {
    const res = await getProductItemDetail({
      productId: this.options.productId
    })
    console.log(res);
    this.setData({
      // productItemDetailArray: res.productItemDetailArray
      productItemDetailArray:res.productItemDetailArray
    })
  },
})