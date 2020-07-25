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
    // console.log(this.properties.surgeryData);
  },
  /**
   * 组件的方法列表
   */
  methods: {
    jumpInsuranceDetail(e) {
        console.log(e)
        const {surgerydata} = e.currentTarget.dataset
        console.log(surgerydata);
        const { id, name } = surgerydata
        jumpPage('/pages/insuranceDetail/insuranceDetail', {
            productId: id,
            surgeryName: name
        })
    }
  },
})
