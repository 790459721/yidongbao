/*
 * @Author: qinsensen
 * @Date: 2020-07-17 11:07:22
 * @Description: 
 */ 
// pages/balance/balance.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listType: 'transaction' // transaction: 交易  withdraw: 提现
  },

  handleTabChange(e) {
      console.log(e)
      const {tab} = e.currentTarget.dataset
      this.setData({
        listType: tab 
      })
  }
})