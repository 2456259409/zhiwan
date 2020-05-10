// pages/about/about.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName:'xx', 
    gender:'x',
    province:'xx',
    avatar:'/images/weixin.jpg',
    user:'',
    games:''
  },
  reviseShow:function(options){
    app.globalData.isRevise=true
    wx.navigateTo({
      url: '../revise/revise',
    })
  },
  postLoginRequest:function(){
    wx.request({
      url: app.globalData.base_url+'login',
      data:{
        'user':app.globalData.userInfo
      },
      header:{
        "Content-Type":"application/json;charset=UTF-8"
      },
      method:'post',
      dataType:JSON,
      success:function(res){
        console.log('接收的数据为:'+res.data)
        app.globalData.user=JSON.parse(res.data); 
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      user:app.globalData.user,
      nickName:app.globalData.user.nickName,
      avatar:app.globalData.user.avatarUrl,
      gender:(app.globalData.user.gender=1)?'男':'女',
      province:app.globalData.user.province,
      games:app.globalData.user.games
    })
    if(app.globalData.isRevise==true){
      this.postLoginRequest()
      app.globalData.isRevise=false
      console.log('hello ereryone')
    }
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
    this.onLoad()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('页面隐藏了')
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