const util = require('../../utils/util.js')
// pages/show/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrl:"../Image/icon_component.png",
    infoText:"一款简单的小游戏，听音乐猜歌名"
  },
  Return:function(){
    util.btnAudio.play();
    wx.redirectTo({
      url: '../mypage/mypage',
    })
  }
})