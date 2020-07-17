/*
 * @Author: qinsensen
 * @Date: 2020-07-17 14:55:24
 * @Description: 
 */ 
// pages/advisory/advisory.js
import {jumpPage} from '../../utils/jumpPage'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  jumpToAdvisoryDetail() {
      jumpPage('/pages/advisoryDetail/advisoryDetail')
  }
})