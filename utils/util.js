/*
 * @Author: qinsensen
 * @Date: 2020-07-15 19:19:49
 * @Description: 
 */ 
// 月日时分
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [ month,day].map(formatNumber).join('-') + ' ' + [hour, minute].map(formatNumber).join(':')
}
// 月日
const monthFormatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [ month,day].map(formatNumber).join('-') 
}
// 年月日
const dateFormatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
  
    return [ year,month,day].map(formatNumber).join('-') 
}
// 年月日时分秒
const fullDateFormatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
  
    return [ year,month,day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  dateFormatTime: dateFormatTime,
  fullDateFormatTime: fullDateFormatTime,
  monthFormatTime:monthFormatTime
}
