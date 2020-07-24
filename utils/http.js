/*
 * @Author: qinsensen
 * @Date: 2020-07-21 10:39:38
 * @Description: 
 */ 
// 获取当前帐号信息
const accountInfo = wx.getAccountInfoSync();
console.log(accountInfo)
// env类型
export const env = accountInfo.miniProgram.envVersion;
console.log(env)
if(!env){
  console.error("获取运行环境失败!");
}
  
export const baseUrl = {
    // 开发板
    develop: 'http://test.api.mini.dasurebao.com/v1',
    // 体验版
    trial: 'http://test.api.mini.dasurebao.com/v1',
    // 正式版
    release: 'http://test.api.mini.dasurebao.com/v1'
}

// 登录获取code
const wxLogin = () => {
    return  new Promise((resolve, reject) => {
        wx.login({
            success: (result) => {
                resolve(result.code)
            },
            fail: error => {
                reject(error)
            }
        });
          
    })
}

// 拿code换token
const getToken = (code) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${baseUrl[env]}/login`,
            data: {
                code,
                appId: 'wx20b78713181410a8'
            },
            header: {'content-type':'application/x-www-form-urlencoded'},
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            success: (result)=>{
                resolve(result)
            },
            fail: (err)=>{
                reject(err)
            },
        });
    })
}

// 发送request请求 api
const wxRequest = (url, rest, token) => {
    const params = {
        appId: 'wx20b78713181410a8',
        token,
        ...rest.data
    }
    console.log('params',params)
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${baseUrl[env]}${url}`,
            method: rest.method || "GET",
            data: {
                ...params
            },
            header: {'content-type': rest.method === 'POST' ? 'application/x-www-form-urlencoded' : 'application/json'},
            success: (result)=>{
                console.log('result',result)
                if(result.data.errCode !== 0) {
                    wx.showToast({
                        title: result.data.errMsg,
                        icon: 'none',
                        image: '',
                        duration: 1500,
                        mask: false,
                    });
                    reject(result.data)
                    return 
                }
                resolve(result.data)
            },
            fail: (error)=>{
                reject(error)
            },
        });
    })
}

export const request = ({url, ...rest}) => {
    const token = wx.getStorageSync('token');
    return new Promise((resolve, reject) => {
        if(token) {
            const data = wxRequest(url, rest, token) 
            resolve(data)
        }else {
            wxLogin().then(code => {
                getToken(code).then(res => {
                    const {token, user} = res.data
                    wx.setStorageSync('token', token);
                    wx.setStorageSync('loginData', user);
                    const data = wxRequest(url, rest, token)
                    resolve(data)
                })
            })
        }
    })
}
