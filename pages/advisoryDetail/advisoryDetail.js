/*
 * @Author: qinsensen
 * @Date: 2020-07-17 15:35:42
 * @Description: 
 */ 
// pages/advisoryDetail/advisoryDetail.js
import {getQueryCommentDetail} from '../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    customer: [],
    commentArray: []
  },
  onLoad(options) {
    const {customerId} = options
    this.getQueryCommentDetail(+customerId)
  },
  handleInputComplete(e) {
    const {value} = e.detail
    console.log(value)
  },
  async getQueryCommentDetail(customerId) {
    const res = await getQueryCommentDetail({
        customerId
    })
    this.setData({
        customer: res.customer,
        commentArray: res.commentArray
    })
  }
})