// pages/regist/regist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
       name:'用户名： ',
       pword:'密码： ',
       academy: '学院号：',
       sno: '学生编号：',
       //repword:'确认密码： ',
       user:'',
       password:'',
       academyno:'',
       stusno:''
       //repassword:''
       
  },
  username: function (e) {
    this.setData({
      user: e.detail.value
    })
  },
  userpword: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  useracademy: function (e) {
    this.setData({
     academyno: e.detail.value
    })
  },
  usersno: function (e) {
    this.setData({
      stusno: e.detail.value
    })
  },
  regist:function(){
    if (this.data.user == '' || this.data.password == '' || this.data.repassword == '') {
      wx.showModal({
        title: '提示',
        content: '信息输入不能为空'
      })
    }
    else{
      wx.request({
        url: 'http://www.tinsfox.com:8081/course-scheduling-system/user',
        method: 'POST',
        data: {
          username: this.data.user,
          password: this.data.passsword,
          academyNo: this.data.academyno,
          userNo: this.data.stusno
          //  userNumber: that.data.user,
          //  password: that.data.password
        },
        header: {
          'content-type': 'application/json'
        },
        success(res) {
            wx.navigateBack({
              dalta:1
            })
        }
      })
      }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
  
})