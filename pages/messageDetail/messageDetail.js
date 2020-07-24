/*
 * @Author: qinsensen
 * @Date: 2020-07-15 19:19:49
 * @Description: 
 */ 
import { getQueryCommentDetailArray }from "../../utils/api";
import {formatTime} from '../../utils/util'
import {jumpPage} from '../../utils/jumpPage'
// pages/messageDetail/messageDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    customerInfo: {},
    commentArray: []
  },
  indata: {
    doctorId: null, 
    userId: null, 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('options', options)
    this.indata.doctorId = options.parentId || null
    this.indata.userId = options.userId || null
    this.getQueryCommentDetailArray()
  },
  async getQueryCommentDetailArray() {
    const {doctorId, userId } = this.indata
    const res = await getQueryCommentDetailArray({
        doctorId,
        userId
    })
    console.log(res)
    const {commentArray} = res
    this.setData({
        // customerInfo: customer,
        commentArray: this.handleFormatTime(commentArray)
        // commentArray
    })
    // this.handleFormatTime(commentArray)
  },
  handleFormatTime(data) {
    data.forEach(item => {
        item.gmtCreate = formatTime(new Date(item.gmtCreate))
        item.commentSubArray.forEach(item => {
            item.gmtCreate = formatTime(new Date(item.gmtCreate))
        })
    })
    // data.reverse()
    return data
  },
  goToClientMessage() {
      jumpPage('/pages/clientMessage/clientMessage',{
        parentId: this.indata.parentId
      })
  }
})