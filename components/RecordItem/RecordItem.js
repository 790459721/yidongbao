/*
 * @Author: qinsensen
 * @Date: 2020-07-17 11:50:14
 * @Description: 
 */ 
// components/RecordItem/RecordItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listType:String,
    icon: Number,
    renderData: Object
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

  },
  attached() {
      console.log(this.properties.renderData)
  }
})
