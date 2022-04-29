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
    const {
      nickName,
      passWord
    } = this.data;
    if (nickName && passWord) {
      wx.cloud.callFunction({
        name: 'user',
        data: {
          $url: "login",
          nickName,
          passWord,
        }
      }).then((res) => {
        console.log(res)
      })
    }
    this.setData({
      loginLoading: false,
    })
  }
});