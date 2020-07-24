/*
 * @Author: qinsensen
 * @Date: 2020-07-20 14:00:30
 * @Description: 
 */ 
// components/PolicyItem/PolicyItem.js
import {jumpPage} from '../../utils/jumpPage'
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    jumpPolicyDetail() {
        jumpPage('/pages/policyDetail/policyDetail')
    }
  }
})
