/*
 * @Author: qinsensen
 * @Date: 2020-07-15 19:05:59
 * @Description: 
 */
// pages/myCenter/myCenter.js
import {jumpPage} from '../../utils/jumpPage'
import { getMyIndexData } from '../../utils/api';
import { patientType, visitorType, doctorType } from '../../const/constMap';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        roleType: 0, //  0: 初始 1:医生 2:患者 3:普通用户
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getMyIndexData()
    },
    onShow() {
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            console.log('设置选中项 1')
            this.getTabBar().setData({
                selected: 1
            })
        }
    },
    async getMyIndexData() {
        const res = await getMyIndexData()
        console.log('res', res)
        const { roleType, gender, headUrl, name, title, hospitalName } = res.user
        const { balance } = res.account
        let letRoleType = 0
        if(patientType.includes(roleType)) {
            letRoleType = 2
        }else if(doctorType.includes(roleType)) {
            letRoleType = 1
        }else {
            letRoleType = 3
        }
        this.setData({
            roleType: letRoleType,
            gender,
            headUrl,
            name,
            title,
            hospitalName,
            balance: balance.toFixed(2)
        },() => {
            if(this.data.roleType !== 1) {
                wx.setNavigationBarColor({
                    frontColor: '#ffffff',
                    backgroundColor: '#2DD1A1',
                });
            }
        })
    },
    makePhoneCall() {
        wx.makePhoneCall({
            phoneNumber: '400-099-6778',
            success: (result)=>{},
            fail: ()=>{},
            complete: ()=>{}
        });
    },
    jumpToBalance() {
        jumpPage('/pages/balance/balance')
    },
    jumpAdvisory() {
        jumpPage('/pages/advisory/advisory')
    },
    jumpMyPolicy() {
        jumpPage('/pages/myPolicy/myPolicy')
    },
    jumpMyAlly() {
        jumpPage('/pages/myAlly/myAlly')
    },
    jumpPatientCard() {
        jumpPage('/pages/patientCard/patientCard')
    },
    jumpGoodDoctors() {
        jumpPage('/pages/goodDoctors/goodDoctors')
    }
})