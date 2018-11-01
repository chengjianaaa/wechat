const util =require('../../utils/util.js')
Page({
  data: {
    imageUrl: '../Image/bk.png',
    infoText: '我的第一个页面'
  },
  Playgame:function(){
    util.btnAudio.play();
    wx.redirectTo({
        url:'../game/game',
    })
  },
  Show:function(){
    util.btnAudio.play();
    wx.redirectTo({
      url: '../show/show',
    })
  }
})