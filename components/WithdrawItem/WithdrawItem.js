/*
 * @Author: qinsensen
 * @Date: 2020-07-17 14:35:44
 * @Description: 
 */ 
// components/WithdrawItem/WithdrawItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    renderData: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    amount: '0.00'
  },
  attached() {
    console.log(this.properties.renderData.amount)
    this.setData({
        amount: this.properties.renderData.amount.toFixed(2)
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
