/*
 * @Author: qinsensen
 * @Date: 2020-07-15 19:19:49
 * @Description: 
 */ 
import { getMyCustomer } from "../../utils/api";
import {jumpPage} from '../../utils/jumpPage'
// pages/clientManage/clientManage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    customerList: [],
    
  },
  indata: {
    flag: false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMyCustomer()
  },
  async getMyCustomer(data={}) {
    const res = await getMyCustomer(data)
    console.log(res)
    const {customerArray} = res
    this.setData({
        customerList: customerArray
    })
  },
  goToMessageDetail(e) {
      console.log('data', e.detail)
    jumpPage('/pages/messageDetail/messageDetail',{
        parentId: +e.detail.parentid,
        userId: +e.detail.userid
    })
  },
  searchInputChange(e) {
    console.log(e.detail.value)
    if(this.indata.flag) {
        return 
    }
    this.indata.flag = true
    setTimeout(() => {
        this.getMyCustomer({
            name:e.detail.value
        })
        this.indata.flag = false
    },500)
  }
})