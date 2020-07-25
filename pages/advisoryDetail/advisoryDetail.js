/*
 * @Author: qinsensen
 * @Date: 2020-07-17 15:35:42
 * @Description: 
 */ 
// pages/advisoryDetail/advisoryDetail.js
import {getQueryCommentDetailArray} from '../../utils/api'
import {formatTime} from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    commentArray: []
  },
  onLoad(options) {
    this.getQueryCommentDetailArray()
  },
  handleInputComplete(e) {
    const {value} = e.detail
    console.log(value)
  },
  async getQueryCommentDetailArray() {
    const { id, doctorid } = this.options
    const res = await getQueryCommentDetailArray({
      doctorId: doctorid,
      // userId: id
      userId: 2
    })
    this.setData({
      commentArray: this.handleFormatTime(res.commentArray)
    })
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
})