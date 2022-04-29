// index.js
// const app = getApp()
const {
  envList
} = require('../../envList.js');

Page({
  data: {
    nickName: '',
    passWord: '',
    loginLoading: false,
  },

  onChangeNickName(event) {
    // event.detail 为当前输入的值
    // console.log(event.detail);
    this.setData({
      nickName: event.detail,
    })
  },
  onChangePassWord(event) {
    // event.detail 为当前输入的值
    // console.log(event.detail);
    this.setData({
      passWord: event.detail,
    })
  },
  onSubmit(event) {
    this.setData({
      loginLoading: true,
    })
    if (this.data.nickName && this.data.passWord) {
      wx.cloud.callContainer({
        "config": {
          "env": "prod-7gl2nhrec21bc63f"
        },
        "path": "/api/count",
        "header": {
          "X-WX-SERVICE": "flask-2rhs"
        },
        "method": "GET",
      }).then((msg) => {
        console.log(msg.data.data)
      }, (data) => {
        console.log(msg.data.data)
      } )
    }
    this.setData({
      loginLoading: false,
    })
  }
});