/*
 * @Author: qinsensen
 * @Date: 2020-07-17 11:07:22
 * @Description: 
 */ 
// pages/balance/balance.js
import { getAccountRecord } from '../../utils/api'
import { fullDateFormatTime } from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listType: 'transaction', // transaction: 交易  withdraw: 提现
    balance: '0.00',
    outlayArray: [],
    withdrawArray: []
  },
  onLoad() {
    this.getAccountRecord()
  },
  async getAccountRecord() {
    const res = await getAccountRecord()
    const { account, outlayArray, withdrawArray } = res
    const { balance } = account
    this.setData({
        balance: balance.toFixed(2),
        outlayArray: this.handleDateFormatTime(outlayArray),
        withdrawArray: this.handleDateFormatTime(withdrawArray),
    })
  },
  handleTabChange(e) {
      console.log(e)
      const {tab} = e.currentTarget.dataset
      this.setData({
        listType: tab 
      })
  },
  handleWithdraw() {
      if(this.data.balance < 10) {
        return
      }
      // todo 提现
  },
  handleDateFormatTime(DataList) {
    DataList.forEach((item,index) => {
        item.gmtCreate = fullDateFormatTime(new Date(item.gmtCreate))
    })
    return DataList
  }
})