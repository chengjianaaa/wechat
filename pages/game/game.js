const util = require('../../utils/util.js')
const app = getApp();
// pages/game/game.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    hasUserInfo: false,
    current:0,
    currentValue:0,
    isSelect:false,
    music:null,
    score:0,
    total:0,
    all:1,
    musicData: [
      {
        audioUrl:"http://www.170mv.com/kw/other.web.ri01.sycdn.kuwo.cn/resource/n2/82/96/1101436107.mp3",
        items:[
          { value: '0', name: 'Be What You Wanna Be', checked: false, image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000001QP8AE3j1Gxm.jpg?max_age=2592000" },
          { value: '0', name: 'Tik Tok', checked: false, image:"https://y.gtimg.cn/music/photo_new/T002R300x300M0000043zpzp2lGs1E.jpg?max_age=2592000"},
          { value: '0', name: 'Payphone', checked: false, image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000002cqJvb4IVTaT.jpg?max_age=2592000"},
          { value: '1', name: 'Battle Symphony', checked: false, image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000004XEwud03XB6I.jpg?max_age=2592000"},
        ]
      },
      {
        audioUrl: "http://other.web.ri01.sycdn.kuwo.cn/resource/n2/29/22/723113619.mp3",
        items: [
          { value: '1', name: 'Tik Tok', checked: false, image: "https://y.gtimg.cn/music/photo_new/T002R300x300M0000043zpzp2lGs1E.jpg?max_age=2592000"},
          { value: '0', name: 'The Spectre', checked: false, image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000002Nf4ht3NmYIO.jpg?max_age=2592000"},
          { value: '0', name: 'In The End', checked: false, image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000004ImTxE1OkGqR.jpg?max_age=2592000"},
          { value: '0', name: 'All Falls Down', checked: false, image:"https://y.gtimg.cn/music/photo_new/T002R300x300M00000459X8Y1wfcQ7.jpg?max_age=2592000"},
        ]
      },
      {
        audioUrl: "http://other.web.rc01.sycdn.kuwo.cn/resource/n2/54/58/1235063288.mp3",
        items: [
          { value: '0', name: 'All Falls Down', checked: false, image: "https://y.gtimg.cn/music/photo_new/T002R300x300M00000459X8Y1wfcQ7.jpg?max_age=2592000"},
          { value: '1', name: 'Payphone', checked: false, image: "https://y.gtimg.cn/music/photo_new/T002R300x300M000002cqJvb4IVTaT.jpg?max_age=2592000"},
          { value: '0', name: 'Battle Symphony', checked: false, image: "https://y.gtimg.cn/music/photo_new/T002R300x300M000004XEwud03XB6I.jpg?max_age=2592000"},
          { value: '0', name: 'See You Again', checked: false, image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000002hqxbJ3HeiGt.jpg?max_age=2592000"},
        ]
      },
      {
        audioUrl: "http://other.web.nf01.sycdn.kuwo.cn/resource/n2/84/96/3517719776.mp3",
        items: [
          { value: '0', name: 'Counting Stars', checked: false, image:"https://y.gtimg.cn/music/photo_new/T002R300x300M0000019DOaT2CE0OG.jpg?max_age=2592000"},
          { value: '0', name: 'Payphone', checked: false, image: "https://y.gtimg.cn/music/photo_new/T002R300x300M000002cqJvb4IVTaT.jpg?max_age=2592000"},
          { value: '1', name: 'All Falls Down', checked: false, image: "https://y.gtimg.cn/music/photo_new/T002R300x300M00000459X8Y1wfcQ7.jpg?max_age=2592000"},
          { value: '0', name: 'dddWon’t Go Home Without You  ', checked: false, image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000003qBhmD1DKfv5.jpg?max_age=2592000"},
        ]
      },
      {
        audioUrl: "http://other.web.re01.sycdn.kuwo.cn/resource/n3/56/35/1253527247.mp3",
        items: [
          { value: '0', name: 'Battle Symphony', checked: false, image: "https://y.gtimg.cn/music/photo_new/T002R300x300M000004XEwud03XB6I.jpg?max_age=2592000"},
          { value: '0', name: 'My Love', checked: false, image:"https://y.gtimg.cn/music/photo_new/T002R300x300M0000044JjUp1GeIwf.jpg?max_age=2592000" },
          { value: '0', name: 'Bad Romance', checked: false, image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000002S9MeZ48c8me.jpg?max_age=2592000"},
          { value: '1', name: 'The Phoenix', checked: false, image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000002ULyk23tk1Qd.jpg?max_age=2592000" },
        ]
      },
      {
        audioUrl: "http://other.web.rz01.sycdn.kuwo.cn/resource/n1/33/26/1923077768.mp3",
        items: [
          { value: '0', name: 'Feels Like Tonight', checked: false, image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000003wmlnf3FI4yi.jpg?max_age=2592000" },
          { value: '1', name: 'Be What You Wanna Be', checked: false, image: "https://y.gtimg.cn/music/photo_new/T002R300x300M000001QP8AE3j1Gxm.jpg?max_age=2592000"},
          { value: '0', name: 'Just For Tonight ', checked: false, image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000000FNtME1AcJjL.jpg?max_age=2592000"},
          { value: '0', name: 'Just Dance', checked: false, image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000002Pfba24Wkynl.jpg?max_age=2592000"},
        ]
      },
      {
        audioUrl: "http://other.web.rf01.sycdn.kuwo.cn/resource/n3/26/20/2895752651.mp3",
        items: [
          { value: '0', name: 'Bad Romance', checked: false, image: "https://y.gtimg.cn/music/photo_new/T002R300x300M000002S9MeZ48c8me.jpg?max_age=2592000"},
          { value: '0', name: 'Be What You Wanna Be', checked: false, image: "https://y.gtimg.cn/music/photo_new/T002R300x300M000001QP8AE3j1Gxm.jpg?max_age=2592000"},
          { value: '0', name: 'Counting Stars', checked: false, image: "https://y.gtimg.cn/music/photo_new/T002R300x300M0000019DOaT2CE0OG.jpg?max_age=2592000"},
          { value: '1', name: 'See You Again', checked: false, image: "https://y.gtimg.cn/music/photo_new/T002R300x300M000002hqxbJ3HeiGt.jpg?max_age=2592000"},
        ]
      },
      {
        audioUrl: "http://other.web.rd01.sycdn.kuwo.cn/resource/n1/56/34/4136590114.mp3",
        items: [
          { value: '1', name: 'Counting Stars', checked: false, image: "https://y.gtimg.cn/music/photo_new/T002R300x300M0000019DOaT2CE0OG.jpg?max_age=2592000"},
          { value: '0', name: 'Even Heaven Cries', checked: false ,image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000001pj8CG2bcDXi.jpg?max_age=2592000"},
          { value: '0', name: 'My Love', checked: false, image: "https://y.gtimg.cn/music/photo_new/T002R300x300M0000044JjUp1GeIwf.jpg?max_age=2592000"},
          { value: '0', name: 'See You Again', checked: false, image: "https://y.gtimg.cn/music/photo_new/T002R300x300M000002hqxbJ3HeiGt.jpg?max_age=2592000"},
        ]
      },
      {
        audioUrl: "http://other.web.ra01.sycdn.kuwo.cn/resource/n2/128/32/88/864520164.mp3",
        items: [
          { value: '0', name: 'Even Heaven Cries', checked: false, image: "https://y.gtimg.cn/music/photo_new/T002R300x300M000001pj8CG2bcDXi.jpg?max_age=2592000"},
          { value: '0', name: 'Just For Tonight', checked: false, image: "https://y.gtimg.cn/music/photo_new/T002R300x300M000000FNtME1AcJjL.jpg?max_age=2592000"},
          { value: '1', name: 'Innocence', checked: false, image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000000UmgD11hyPLl.jpg?max_age=2592000"},
          { value: '0', name: 'Payphone', checked: false, image: "https://y.gtimg.cn/music/photo_new/T002R300x300M000002cqJvb4IVTaT.jpg?max_age=2592000"},
        ]
      },
      {
        audioUrl: "http://other.web.nf01.sycdn.kuwo.cn/resource/n1/0/26/2884919742.mp3",
        items: [
          { value: '0', name: 'whistle', checked: false, image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000001tsWa91KeHlz.jpg?max_age=2592000"},
          { value: '0', name: 'All Falls Down', checked: false, image: "https://y.gtimg.cn/music/photo_new/T002R300x300M00000459X8Y1wfcQ7.jpg?max_age=2592000" },
          { value: '0', name: 'The Spectre', checked: false, image: "https://y.gtimg.cn/music/photo_new/T002R300x300M000002Nf4ht3NmYIO.jpg?max_age=2592000"},
          { value: '1', name: 'Moves like Jagger', checked: false, image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000004DJYzb0rxDFR.jpg?max_age=2592000"},
        ]
      },
      {
        audioUrl: "http://other.web.nf01.sycdn.kuwo.cn/resource/n2/49/81/1754598404.mp3",
        items: [
          { value: '0', name: 'Moves like Jagger', checked: false, image: "https://y.gtimg.cn/music/photo_new/T002R300x300M000004DJYzb0rxDFR.jpg?max_age=2592000"},
          { value: '0', name: 'Just Dance', checked: false, image: "https://y.gtimg.cn/music/photo_new/T002R300x300M000002Pfba24Wkynl.jpg?max_age=2592000"},
          { value: '1', name: 'The Spectre', checked: false, image: "https://y.gtimg.cn/music/photo_new/T002R300x300M000002Nf4ht3NmYIO.jpg?max_age=2592000"},
          { value: '0', name: 'Tik Tok', checked: false, image: "https://y.gtimg.cn/music/photo_new/T002R300x300M0000043zpzp2lGs1E.jpg?max_age=2592000"},
        ]
      },
    ]
  },

  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(app.globalData.userInfo){
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo:true
      })
    }
    var that= this;
    var items = new Array();
    const indexs = this.getNumNoRepeat(0,10,5);
    for(var i=0;i<indexs.length;i++){
      //items.push(that.data.musicData[indexs[i]]);
      items.push(that.data.musicData[indexs[i]]);
    }
    that.setData({
      music:items,
      total:0,
      score:0,
      currentValue:0,
      isSelect: false,
      all: 0
    })
  },

  onUnload:function(){
    var g={total:this.data.total,score:this.data.score,all:this.data.all};
    var grades =wx.getStorageInfoSync('grade')|| grades.unshiift(g);
    wx.setStorageSync('grades', g)
  },

  getNumNoRepeat:function(n,m,len){
    var maxTimes = len;
    var arr = new Array();
    do{
      var num = Math.floor(Math.random() * m) + n;
      if(-1 == arr.indexOf(num)){
        arr.push(num);
        maxTimes--;
      }
    }while(maxTimes);
    return arr;
  },
  
  bindNext:function(){
    var index = this.data.current;
    this.data.all++;
    if(this.data.isSelect){
      this.setData({
        total:this.data.total+1,
        isSelect:false
      });
      if(this.data.currentValue == 1){
        this.setData({
          score:this.data.score + 1,
          currentValue:0
        })
      }
    }
    if(index < this.data.music.length-1){
      index++;
      this.setData({
        current : index,
      });
    }else{
      wx.redirectTo({
        url: '../grade/grade',
      })
    }
  },

  bindShowGrade:function(){
    
    this.data.all++;
    if(this.data.isSelect){
      this.setData({
        total:this.data.total+1,
        isSelect:false
      });
      if(this.data.currentValue == 1){
        this.setData({
          score:this.data.score +1,
          currentValue:0
        })
      }
    }
    util.btnAudio.play();
    wx.redirectTo({
      url: '../grade/grade',
    })
  },

  radioChange:function(e){
      this.setData({
        currentValue : e.detail.value,
        isSelect:true
      })
  },

})