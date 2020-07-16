/*
 * @Author: qinsensen
 * @Date: 2020-07-16 09:19:03
 * @Description: 
 */ 
const jumpPage = (url,params={}) => {
    let path = `${url}`
    const query = handleQuery(params)
    if(query) {
        path = `${url}?${query}`
    }
    wx.navigateTo({
        url: path,
        success: (result)=>{
        },
        fail: ()=>{},
        complete: ()=>{}
    });
}
// 处理参数
const handleQuery = (params) => {
    let query = ''
    if(!!Object.keys(params).length) {
        for(const [key,value] of Object.entries(params)) {
            console.log(key, value)
            query += `${key}=${value}&`
        }
    }
    return query
}

export {
    jumpPage
}