/*
 * @Author: qinsensen
 * @Date: 2020-07-21 16:50:01
 * @Description: 
 */ 
import { request } from './http'
/*
 * @Author: qinsensen
 * @Date: 2020-07-21 16:50:01
 * @Description: 
 */ 
// 获取openid
const getOpendId = (data) => {
    return request({
        url:'/login',
        method: 'POST',
        data
    })
}
// 获取首页数据
const getIndexData = (data) => {
    return request({
        url: '/indexData',
        data
    })
}

// 获取患者列表
const getMyCustomer = (data) => {
    return request({
        url: '/myCustomer',
        data
    })
}
// 留言信息列表
// const getQueryComment = (data) => {
//     return request({
//         url: '/queryComment',
//         data
//     })
// }
// 发表留言
const addComment = (data) => {
    return request({
        url: '/addComment',
        method: 'POST',
        data
    })
}

// 生成名片
const generateCard = data => {
    return request({
        url: '/generateCard',
        method: 'POST',
        data 
    })
}

// 个人中心
const getMyIndexData = data => {
    return request({
        url: '/myIndexData',
        data 
    })
}

// 账户余额明细
const getAccountRecord = data => {
    return request({
        url: '/accountRecord',
        data 
    })
}

// 患者资讯列表
const getQueryDoctorCommentArray = data => {
    return request({
        url: '/queryDoctorCommentArray',
        data 
    })
}

// 患者咨询详情
const getQueryCommentDetail = data => {
    return request({
        url: '/queryCommentDetail',
        data 
    })
}
// 优选医生
const getDoctorArray = data => {
    return request({
        url: '/doctorArray',
        data 
    })
}

// 投保页面获取医院列表
const getHospitalArray = data => {
    return request({
        url: '/hospitalArray',
        data 
    })
}
// 投保页面获取医生列表
const getHospitalDoctorArray = data => {
    return request({
        url: '/hospitalDoctorArray',
        data 
    })
}

// 医生获取患者留言详情列表
const getQueryCommentDetailArray = data => {
    return request({
        url: '/queryCommentDetailArray',
        data 
    })
}
// 患者咨询列表
const getQueryCommentArray = data => {
    return request({
        url: '/queryCommentArray',
        data 
    })
}
export {
    getIndexData,
    getMyCustomer,
    getOpendId,
    addComment,
    // getQueryComment,
    generateCard,
    getMyIndexData,
    getAccountRecord,
    getQueryDoctorCommentArray,
    getQueryCommentDetail,
    getHospitalArray,
    getHospitalDoctorArray,
    getQueryCommentDetailArray,
    getQueryCommentArray
}