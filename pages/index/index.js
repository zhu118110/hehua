//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swipers: ["../../images/lb1.png","../../images/lb1.png","../../images/lb1.png"],
    threeD: ["../../images/3D1.png", "../../images/3D2.png", "../../images/3D3.png"],
		news:[{
			src:"../../images/new1.png",
			title:"国庆荷花博物馆门票9折",
			unknown:"荷花博物馆",
			watch:1234
		},{
			src:"../../images/new2.png",
			title:"国庆荷花博物馆门票9折",
			unknown:"个人",
			watch:4321
		}],
		lt:["../../images/luntan1.png", "../../images/luntan2.png", "../../images/luntan1.png"],
		bwg:["../../images/online1.png", "../../images/online2.jpg", "../../images/online1.png"]
  },
  onLoad: function () {
   
  },
  
})
