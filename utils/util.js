const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  postRequest:postRequest
}
var postRequest=function(data,url){
  var app=getApp()
  wx.request({
    url: url,
    data:data,
    header:{
      "Content-Type":"application/json;charset=UTF-8"
    },
    method:'post',
    dataType:JSON,
    success:function(res){
      console.log('接收的数据为:'+res.data)
      app.gloable.userInfo=res.data.User
    },
    fail:function(){
      console.log('submit error')
    },
    complete:function(){
      console.log('complete')
    }
  })
}
