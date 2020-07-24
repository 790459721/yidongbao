/*
 * @Author: qinsensen
 * @Date: 2020-07-15 17:39:10
 * @Description: 
 */ 
// components/ClientItem/ClientItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemData: Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goToMessageDetail(e) {
        console.log(e.currentTarget.dataset)
        this.triggerEvent('goToMessageDetail',e.currentTarget.dataset)
    }

  }
})
