/*
 * @Author: qinsensen
 * @Date: 2020-07-15 19:19:49
 * @Description: 
 */ 
// components/ProductItem/ProductItem.js
import {jumpPage} from '../../utils/jumpPage'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    surgeryData: Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  
  attached() {
  },
  /**
   * 组件的方法列表
   */
  methods: {
    jumpInsuranceDetail(e) {
        console.log(e)
        const {surgerydata} = e.currentTarget.dataset
        const { detailType, surgeryName } = surgerydata
        jumpPage('/pages/insuranceDetail/insuranceDetail', {
            detailType,
            surgeryName
        })
    }
  },
})
