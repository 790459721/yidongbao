// pages/clientMessage/clientMessage.js
import {
    addComment
} from '../../utils/api'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        content: '',
        imageCount: 5,
        tempFilePaths: []
    },
    indata: {
        customerId: null
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.indata.customerId = options.customerId
    },
    handleSubmit() {
        console.log(this.data.content)
        this.addComment()
    },
    handleCancel() {
        wx.navigateBack({
            delta: 1
        });
    },
    handleContentChange(e) {
        this.setData({
            content: e.detail.value
        })
    },
    async addComment() {
        const {
            content,
            tempFilePaths
        } = this.data
        if (!content) {
            wx.showToast({
                title: '请输入留言内容',
                icon: 'none'
            });
            return
        }
        const imageObj = {}
        tempFilePaths.forEach((item,index) => {
            imageObj[`imageUrl${index + 1}`] = item
        });
        console.log(imageObj)
        const res = await addComment({
            customerId: +this.indata.customerId,
            content: content,
            ...imageObj
        })
        console.log(res)
        if(res.errCode === 0) {
            wx.navigateBack({
                delta: 1
            });
        }
    },
    joinImages() {
        wx.chooseImage({
            count: this.data.imageCount,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: (result) => {
                console.log(result)
                this.setData({
                    tempFilePaths: result.tempFilePaths,
                    imageCount: 5 - result.tempFilePaths.length
                })
            },
        });

    }
})