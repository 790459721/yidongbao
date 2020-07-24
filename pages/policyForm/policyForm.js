/*
 * @Author: qinsensen
 * @Date: 2020-07-21 16:32:28
 * @Description: 
 */
// pages/policyForm/policyForm.js
import {
    dateFormatTime
} from '../../utils/util'
import {departmentList} from '../../const/myCard'
import { getHospitalArray, getHospitalDoctorArray } from '../../utils/api'
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        date: dateFormatTime(new Date()),
        region: '上海 上海市 浦东新区',
        effectiveDate: '',
        operationDate: '',
        holderType: '居民身份证',
        holderTypeArray: ['居民身份证', '军人身份证', '护照', '武装警察身份证件', '港澳居民来往内地通行证', '台湾居民来往内地通行证', '外国人永久居留身份证'],
        insuredObject: ['本人', '子女'],
        postCode: '',
        checkboxItems: [{
            name: 'sd'
        }, {
            name: 'sda'
        }],
        isIPX: app.globalData.isIPX,


        insuredCertificateArray: ['居民身份证', '军人身份证', '护照', '武装警察身份证件', '港澳居民来往内地通行证', '台湾居民来往内地通行证', '外国人永久居留身份证'], //被保人证件类型
        insuredCertificateIndex: 0, // 被保人证件类型索引
        insuredCertificate: '居民身份证', // 被保人证件类型显示
        relationshipArray: ['父亲', '母亲'], // 投保关系
        relationship: '父亲', // 投保关系显示
        relationshipIndex: 0, // 投保关系索引
        policyHolderArray: ['居民身份证', '军人身份证', '护照', '武装警察身份证件', '港澳居民来往内地通行证', '台湾居民来往内地通行证', '外国人永久居留身份证'], // 投保人证件类型
        policyHolder: '居民身份证', // 投保人证件类型显示
        policyHolderIndex: 0, // 投保人证件类型索引
        departmentList: departmentList,
        departmentLeftList: [], // 左侧菜单
        departmentRightContent: [], // 右侧内容
        currentIndex: 0,
    },
    onLoad() {
        this.handleDepartmentData()
        this.getHospitalArray()
        this.getHospitalDoctorArray()
    },

    async getHospitalArray() {
        const res = await getHospitalArray()
        console.log(res)
    },

    async getHospitalDoctorArray() {
        const res = await getHospitalDoctorArray({
            hospitalId: 1
        })
        console.log(res)
    },
    // 被保人证件类型变更
    bindInsuredCertificateChange(e) {
        console.log(e)
        const {
            value: insuredCertificateIndex
        } = e.detail
        const {
            insuredCertificateArray
        } = this.data
        this.setData({
            insuredCertificateIndex,
            insuredCertificate: insuredCertificateArray[+insuredCertificateIndex]
        })
    },
    // 投保关系变更
    bindRelationshipChange(e) {
        console.log(e)
        const {
            value: relationshipIndex
        } = e.detail
        const {
            relationshipArray
        } = this.data
        this.setData({
            relationshipIndex,
            relationship: relationshipArray[+relationshipIndex]
        })
    },
    // 投保人证件类型变更
    bindPolicyHoldeChange(e) {
        console.log(e)
        const {
            value: policyHolderIndex
        } = e.detail
        const {
            policyHolderArray
        } = this.data
        this.setData({
            policyHolderIndex,
            policyHolder: policyHolderArray[+policyHolderIndex]
        })
    },
    // 处理两边列表数据
    handleDepartmentData() {
        const {
            departmentList
        } = this.data
        // 左侧菜单
        const departmentLeftList = departmentList.map(v => v.mainDepartment)
        // 右侧内容
        const departmentRightContent = departmentList[0].childrenDepartment
        this.setData({
            departmentLeftList,
            departmentRightContent
        })
    },
    // 左侧菜点击事件
    handleMenuClick(e) {
        console.log(e.currentTarget.dataset)
        const {
            index
        } = e.currentTarget.dataset
        const departmentRightContent = departmentList[index].childrenDepartment
        this.setData({
            currentIndex: index,
            departmentRightContent,
        })
    },

    handleChooseDepartment(e) {
        console.log(e.currentTarget.dataset)
        const {
            department
        } = e.currentTarget.dataset
        this.setData({
            isShowDepartmentDailog: false,
            [`formData.${'department'}`]: department.department,
            departmentValue: department.department
        })
    },

    bindDateChange(e) {
        console.log(e)
        this.setData({
            date: e.detail.value
        })
    },
    bindEffectiveDateChange(e) {
        this.setData({
            effectiveDate: e.detail.value
        })
    },
    bindRegionChange(e) {
        console.log(e)
        const {
            value
        } = e.detail
        this.setData({
            region: `${value[0]} ${value[1]} ${value[2]}`
        })
    },
    bindOperationDateChange(e) {
        console.log(e)
        this.setData({
            operationDate: e.detail.value
        })
    },
    bindholderTypeChange(e) {
        console.log(e)
        this.setData({
            holderType: this.data.holderTypeArray[e.detail.value]
        })
    },
    handleDescClick() {
        wx.showModal({
            title: '法定受益人',
            content: '被保险人身故时生存的父母/配偶/子女',
            showCancel: false,
            cancelColor: '#000000',
            confirmText: '确定',
            confirmColor: '#3CC51F',
            success: (result) => {

            },
            fail: () => {},
            complete: () => {}
        });

    },
    handleCheckBox(e) {
        console.log(e)
    }
})