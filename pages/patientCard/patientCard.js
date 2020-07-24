/*
 * @Author: qinsensen
 * @Date: 2020-07-16 09:17:26
 * @Description: 
 */
import {
    jobTitleList,
    departmentList,
    sexList
} from '../../const/myCard'
// pages/myCard/myCard.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        sexList: sexList,
        sexValue: null,
        formData: {},
        avatarSrc: 'https://minipropub.oss-cn-shenzhen.aliyuncs.com/mini-yidongbao/icon_avatar.png',
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
                name: 'sex',
                rules: {
                    required: true,
                    message: '请选择性别'
                },
            },
            {
                name: 'phoneNum',
                rules: {
                    required: true,
                    message: '请输入手机号'
                },
            },
            {
                name: 'vcode',
                rules: {
                    required: true,
                    message: '请输入验证码'
                },
            },
            
        ],
    },
    onLoad() {
        // this.handleDepartmentData()
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
    bindSexChange(e) {
        console.log('picker sex 发生选择改变，携带值为', e.detail.value);
        const {
            field
        } = e.currentTarget.dataset
        console.log(field)
        this.setData({
            sexValue: sexList[e.detail.value],
            [`formData.${field}`]: sexList[e.detail.value]
        })
    },

    handleUploadAvatar() {
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: (result)=>{
                const tempFilePaths = result.tempFilePaths
                console.log(tempFilePaths)
                this.setData({
                    avatarSrc: tempFilePaths[0],
                    [`formData.${'avatar'}`]: tempFilePaths[0],
                })
                // wx.uploadFile({
                //     url: '',
                //     filePath: tempFilePaths[0],
                //     name: 'file',
                //     formData: {
                //         'user': 'test'
                //     },
                //     success: (result) => {
                //         // TODO something
                //     },
                    
                // });
                  
            },
            fail: ()=>{},
            complete: ()=>{}
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
                wx.showToast({
                    title: '校验通过'
                })
            }
        })
    }
})