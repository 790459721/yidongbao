/*
 * @Author: qinsensen
 * @Date: 2020-07-20 12:00:12
 * @Description: 
 */ 
// components/DoctorItem/DoctorItem.js
import { jumpPage } from '../../utils/jumpPage'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    doctorData: Object
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
    jumpDoctorDetail() {
        jumpPage('/pages/doctorDetail/doctorDetail')
    }
  }
})
