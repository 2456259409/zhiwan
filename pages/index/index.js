// pages/index/index.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'hello world',
    firstpicture:'/images/weixin.jpg',
    islogin:false
  },

  postLoginRequest:function(){
    wx.request({
      url: app.globalData.base_url+'login',
      data:{
        'user':app.globalData.user
      },
      header:{
        "Content-Type":"application/json;charset=UTF-8"
      },
      method:'post',
      dataType:JSON,
      success:function(res){
        console.log('接收的数据为:'+res.data)
        app.globalData.user=JSON.parse(res.data);
        // console.log(res.data.nickName)
      },
      fail:function(){
        console.log('submit error')
      },
      complete:function(){
        console.log('complete')
      }
    })
  },

  // 获取登录者的信息
  getMyInfo: function(e){
    console.log(e.detail.userInfo)
    // this.data.name=e.detail.userInfo.nickName
    let info=e.detail.userInfo;
    app.globalData.user=info;
    this.postLoginRequest();
    console.log(app.globalData.userInfo)
    this.setData({
      name:'欢迎您!'+info.nickName,
      firstpicture:info.avatarUrl,
      islogin:true
    });
  },

  requestToServer:function(){

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