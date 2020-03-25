// pages/my/my_care/my_care.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	careTitle:["资讯","帖子"],
	style:0,   //控制标题样式的下标
	message:[{
      src:"../../../images/zixun_mp1.png",
      title:"国庆荷花博物馆门票9折优惠国庆荷花博物馆门票9折",
      detail:"我门票全场9折门票全场9折门票全场9折门票全场9折门票全场9折门票全场9折门票全场9折",
      watch:1234
    },{
      src:"../../../images/zixun_mp1.png",
      title:"国庆荷花博物馆门票9折优惠国庆荷花博物馆门票9折",
      detail:"国庆荷花博物馆门票9折优惠国庆荷花博物馆门票9折优惠国庆荷花博物馆门票9折优惠",
      watch:2234
    },{
      src:"../../../images/zixun_mp1.png",
      title:"国庆荷花博物馆门票9折优惠国庆荷花博物馆门票9折",
      detail:"国庆荷花博物馆门票9折优惠国庆荷花博物馆门票9折优惠国庆荷花博物馆门票9折优惠",
      watch:3234
    },{
      src:"../../../images/zixun_mp1.png",
      title:"国庆荷花博物馆门票9折优惠国庆荷花博物馆门票9折",
      detail:"国庆荷花博物馆门票9折优惠国庆荷花博物馆门票9折优惠国庆荷花博物馆门票9折优惠",
      watch:4234
    }],
  post:[{
      src: "../../../images/zixun_mp1.png",
      txImg:"../../../images/nologin.jpg",
      name:"张三",
      title: "国庆荷花博物馆门票9折优惠国庆荷花博物馆门票9折",
      detail: "我门票全场9折门票全场9折门票全场9折门票全场9折门票全场9折门票全场9折门票全场9折",
      nice: 1234,
      comment:5678
  }, {
      src: "../../../images/zixun_mp1.png",
      txImg: "../../../images/nologin.jpg",
      name: "张三",
      title: "国庆荷花博物馆门票9折优惠国庆荷花博物馆门票9折门票9折",
      detail: "我门票全场9折门票全场9折门票全场9折门票全场9折门票全场9折门票全场9折门票全场9折",
      nice: 1234,
      comment: 5678
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  
  // 点击标题添加样式
  changeTitle(e){
	  // 获取点击的下标
	  let index=e.currentTarget.dataset.index;
	  this.setData({
		  style:index,
		  // change:index
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