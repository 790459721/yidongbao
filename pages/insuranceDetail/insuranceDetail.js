/*
 * @Author: qinsensen
 * @Date: 2020-07-20 18:28:53
 * @Description: 
 */ 
// pages/insuranceDetail/insuranceDetail.js
import { jumpPage } from '../../utils/jumpPage'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 'feature',
    top: 0,
    featureTop: 0,
    explanTop: 0,
    questionTop: 0,
    tabCardHeight: 0,
    isFiexd: false,
    tabCardsTop: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      const {detailType, surgeryName} = options
    wx.setNavigationBarTitle({
        title: surgeryName,
    });
    this.handleDom()
  },
//   获取dom元素和距离顶部距离
  handleDom() {
    let selQuery = wx.createSelectorQuery();
    selQuery.select('.tab_cards').boundingClientRect((rect) => {
        this.setData({
            tabCardHeight: rect.height,
            tabCardsTop: rect.top
        })
    }).exec()

    selQuery.select('.feature_top').boundingClientRect((rect) => {
        this.setData({
            featureTop: rect.top
        })
    }).exec()

    selQuery.select('.explan_top').boundingClientRect((rect) => {
        this.setData({
            explanTop: rect.top
        })
    }).exec()

    selQuery.select('.question_top').boundingClientRect((rect) => {
        this.setData({
            questionTop: rect.top
        })
    }).exec()
    
  },
//   点击tab时，更改激活样式
  handleTabClick(e) {
    const {type} = e.currentTarget.dataset
    const { featureTop, tabCardHeight, explanTop, questionTop } = this.data
    this.setData({
        type
    },() => {
        if(type === 'feature') {
            this.handleClickToScroll(featureTop - tabCardHeight)
        }else if(type === 'explan') {
            this.handleClickToScroll(explanTop - tabCardHeight)
        }else if(type === 'question') {
            this.handleClickToScroll(questionTop - tabCardHeight)
        }
    })
  },
  // 点击tab时，控制页面滚动
  handleClickToScroll(scrollNum) {
    wx.pageScrollTo({
        scrollTop: scrollNum,
        duration: 100
    });
  },

  onPageScroll(e) {
      const { questionTop, tabCardHeight, explanTop, tabCardsTop } = this.data
    //   页面滚动时，更改tab激活状态
      let type = 'feature'
      if(e.scrollTop >= questionTop - tabCardHeight - 10) {
            type ='question'
      }else if(e.scrollTop >= explanTop - tabCardHeight - 10){
            type ='explan'
      }else {
            type = 'feature'
      }
    this.setData({
        isFiexd: e.scrollTop >= tabCardsTop, // tab是否吸顶
        type
    })
  },

  jumpPolicyForm() {
      jumpPage('/pages/policyForm/policyForm')
  }
})