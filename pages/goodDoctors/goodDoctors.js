/*
 * @Author: qinsensen
 * @Date: 2020-07-20 11:53:53
 * @Description: 
 */ 
import { getDoctorArray } from "../../utils/api";

// pages/goodDoctors/goodDoctors.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    doctorArray: []
  },
  indata: {
    flag: false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDoctorArray()
  },

  async getDoctorArray(data={}) {
    const res = await getDoctorArray(data)
    console.log(res)
    this.setData({
        doctorArray: res.doctorArray
    })
  },
  searchInputChange(e) {
    console.log(e.detail.value)
    if(this.indata.flag) {
        return 
    }
    this.indata.flag = true
    setTimeout(() => {
        this.getDoctorArray({
            name:e.detail.value
        })
        this.indata.flag = false
    },500)
  }
})