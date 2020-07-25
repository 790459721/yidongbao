/*
 * @Author: qinsensen
 * @Date: 2020-07-17 14:55:24
 * @Description: 
 */ 
// pages/advisory/advisory.js
import {jumpPage} from '../../utils/jumpPage'
import { getQueryCommentArray } from '../../utils/api'
import { monthFormatTime } from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    customerList:[]
  },
  onLoad() {
    this.getQueryCommentArray()
  },
  async getQueryCommentArray() {
    const res = await getQueryCommentArray()
    console.log(res)
    const {commentArray} = res
    this.setData({
        customerList: this.handleDataTime(commentArray)
    })
  },
  handleDataTime(data) {
    data.forEach(element => {
        element.gmtCreate = monthFormatTime(new Date(element.gmtCreate))
    });
    return data
  },
  jumpToAdvisoryDetail(e) {
      console.log(e)
      const { id, doctorid } = e.currentTarget.dataset
      console.log(id, doctorid);
      jumpPage('/pages/advisoryDetail/advisoryDetail',{
        id,
        doctorid
      })
  }
})