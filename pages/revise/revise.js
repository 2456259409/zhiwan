// pages/revise/revise.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:'',
    url:'http://localhost:8080/',
    age:'',
    phone:'',
    personIntro:'',
    likeIntro:'',
    level:'',
    gameId:''
  },
  submitAge:function(e){
    if(this.data.age!=''){
      let jsondata={
        'id':this.data.user.id,
        'age':this.data.age
      };
      this.postRequest(jsondata,'setAge')
      this.setData({age:''})
    }
  },
  submitPhone:function(){
    if(this.data.phone!=''){
      let jsondata={
        'id':this.data.user.id,
        'phoneNumber':this.data.phone
      };
      this.postRequest(jsondata,'setPhone')
      this.setData({phone:''})
    }
  },
  submitPersonIntro:function(){
    if(this.data.personIntro!=''){
      let jsondata={
        'id':this.data.user.id,
        'personIntro':this.data.personIntro
      };
      this.postRequest(jsondata,'setPsersonIntro')
      this.setData({personIntro:''})
    }
  },
  submitLikeIntro:function(){
    if(this.data.likeIntro!=''){
      let jsondata={
        'id':this.data.user.id,
        'likeIntro':this.data.likeIntro
      };
      this.postRequest(jsondata,'setLikeIntro')
      this.setData({likeIntro:''})
    }
  },
  submitResetLevel:function(){
    console.log(this.data.gameId)
    console.log(this.data.level)
    if(this.data.level!=''){
      let jsondata={
        'id':this.data.gameId,
        'level':this.data.level
      };
      this.postRequest(jsondata,'reviseLevel')
      this.setData({gameId:'',level:''})
    }
  },

  resetGame:function(e){
    this.setData({
      level:e.detail.value,
      gameId:e.currentTarget.id
    })
  },
  resetAge:function(e){
    this.setData({age:e.detail.value})
  },
  resetPhone:function(e){
    this.setData({phone:e.detail.value})
  },
  resetPersonIntro:function(e){
    this.setData({personIntro:e.detail.value})
  },
  resetLikeIntro:function(e){
    this.setData({likeIntro:e.detail.value})
  },
  postRequest:function(data,url){
    wx.request({
      url: this.data.url+url,
      data:data,
      header:{
        "Content-Type":"application/json;charset=UTF-8"
      },
      method:'post',
      dataType:JSON,
      success:function(res){
        console.log('接收的数据为:'+res.data)
      },
      fail:function(){
        console.log('submit error')
      },
      complete:function(){
        console.log('complete')
      }
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      user:app.globalData.user,
      games:app.globalData.user.games,
    })
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