/*
 * @Author: qinsensen
 * @Date: 2020-07-16 09:17:26
 * @Description: 
 */
import {
    jobTitleList,
    departmentList
} from '../../const/myCard'
import {
    generateCard
} from '../../utils/api'
import { baseUrl, env} from '../../utils/http'
// pages/myCard/myCard.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        departmentList: departmentList,
        departmentLeftList: [], // 左侧菜单
        departmentRightContent: [], // 右侧内容
        jobTitleList: jobTitleList,
        JobTitleValue: null,
        departmentValue: null,
        currentIndex: 0,
        isShowDepartmentDailog: false,
        formData: {},
        rules: [{
                name: 'name',
                rules: {
                    required: true,
                    message: '请输入姓名'
                },
            },
            {
                name: 'avatar',
                rules: {
                    required: true,
                    message: '请上传头像'
                },
            },
            {
                name: 'hospitalName',
                rules: {
                    required: true,
                    message: '请输入医院名称'
                },
            },
            {
                name: 'department',
                rules: {
                    required: true,
                    message: '请选择科室'
                },
            },
            {
                name: 'jobTitle',
                rules: {
                    required: true,
                    message: '请选择职称'
                },
            },
        ],
        fromw: null,
        sourceId: null
    },
    onLoad() {
        this.getOptions()
        this.handleDepartmentData()
    },
    getOptions() {
        console.log(this.options)
    },
    formInputChange(e) {
        const {
            field
        } = e.currentTarget.dataset
        console.log(field)
        this.setData({
            [`formData.${field}`]: e.detail.value
        })
    },
    bindJobTitleChange(e) {
        console.log('picker jobTitle 发生选择改变，携带值为', e.detail.value);
        const {
            field
        } = e.currentTarget.dataset
        console.log(field)
        this.setData({
            JobTitleValue: jobTitleList[e.detail.value],
            [`formData.${field}`]: jobTitleList[e.detail.value]
        })
    },
    jumpToChooseDepartment() {
        this.setData({
            isShowDepartmentDailog: true
        })
    },
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
    handleUploadAvatar() {
        wx.chooseImage({
            success: (result) => {
                const tempFilePaths = result.tempFilePaths
                wx.showLoading({
                    title: '头像上传中',
                    mask: true,
                });
                const token = wx.getStorageSync('token');
                wx.uploadFile({
                    url: `${baseUrl[env]}/uploadFile`,
                    filePath: tempFilePaths[0],
                    name: 'file',
                    formData: {
                        token,
                        appId: 'wx20b78713181410a8'
                    },
                    success: (result) => {
                        // TODO something
                        console.log(JSON.parse(result.data))
                        const avatar = JSON.parse(result.data).fullUrl
                        this.setData({
                            [`formData.${'avatar'}`]: avatar
                        },() => {
                            wx.hideLoading();
                        })
                    },

                });

            },
            fail: () => {},
            complete: () => {}
        });
    },
    submitForm() {
        this.selectComponent('#form').validate((valid, errors) => {
            console.log('valid', valid, errors)
            console.log(this.data.formData)
            if (!valid) {
                const firstError = Object.keys(errors)
                if (firstError.length) {
                    this.setData({
                        error: errors[firstError[0]].message
                    })

                }
            } else {
                this.generateCard()
            }
        })
    },
    // 生成名片
    async generateCard() {
        const {
            avatar,
            department,
            hospitalName,
            jobTitle,
            name
        } = this.data.formData
        const res = await generateCard({
            name,
            headUrl: avatar,
            hospitalName,
            departmentName: department,
            title: jobTitle
        })
        wx.setStorageSync('doctorInfo', res.user);
        wx.redirectTo({
            url: '/pages/myCard/myCard',
        });
          
    }
})