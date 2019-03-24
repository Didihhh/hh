//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    name:'用户名：',
    pword:'密            码：',
    user:'',
    password:"",
    infoname:'',
    infopwd:'',
    hadpasswd:false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  username:function(e){
    this.setData({
      user:e.detail.value
    })
    
  },
  userpwd: function (e) {
    this.setData({
      password: e.detail.value
    })
    
  },
  login:function(e){
   if(this.data.user==''||this.data.password=="")
    {
     wx.showModal({
       title: '提示',
       content: '信息输入不能为空'
      })
    }
    else{
     /* console.log("用户名："+this.data.user+" 密码："+this.data.password),
       wx.showLoading({
         title: '登录中',
         success:function(e){
           setTimeout(function () {
             wx.navigateTo({
               url: '../logs/logs'
             })
           }, 1000)
         }
       })*/
     wx.login({
       success: function (res) {
         console.log(res)
         if (res.code) {
           wx.request({
             url: 'http://www.tinsfox.com:8081/course-scheduling-system/user',
             method: 'POST',
             data: {
               username:"ddi",
               password:"123456",
               academyNo:"100",
               userNo:"120"
              //  userNumber: that.data.user,
              //  password: that.data.password
             },
             header: {
               'content-type': 'application/json'
             },
             success(res) {
               console.log(res)
               console.log(res.data.data.token)
               try {
                 wx.setStorageSync("token", res.data.data.token)
               }
               catch (e) {
                 console.log(e)
               }
             }
           })
            }
       }
        })
     console.log("用户名：" + this.data.user + " 密码：" + this.data.password),
       wx.showLoading({
         title: '登录中',
         success: function (e) {
           setTimeout(function () {
             wx.navigateTo({
               url: '../logs/logs'
             })
           }, 1000)
         }
       })
    }},
 /* checkbox:function(e)
  {
    wx.setStorage({key: infoname, data: this.data.user,})
    wx.setStorage({key: infopwd,data: this.data.password,})
  },
  automate:function()
  {
    var infouser=wx.getStorageSync(infoname),
    if (this.data.user==infouser) 
    {
        hadpasswd:true;
        this.data.password=infopwd;
    }
  },*/
  regist: function (e) {
      wx.navigateTo({
        url: '../regist/regist'
      })
  }
})
