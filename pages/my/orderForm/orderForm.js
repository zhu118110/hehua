// pages/my/orderForm/orderForm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    careTitle:["已发货","已完成"],
    style:0,   //控制标题样式的下标
	
    deliver:[{  //已发货的数据
		orderFormNum:12345678910,
		status:"已发货",
		shop_img:"../../../images/jf_fl.png",
		buy_num:1,
		jf_num:200,
		shop_name:"毛笔",
	},{  
		orderFormNum:12345678910,
		status:"已发货",
		shop_img:"../../../images/jf_fl.png",
		buy_num:1,
		jf_num:200,
		shop_name:"毛笔",
	}],
	
	finish:[{   //已完成的数据
		orderFormNum:987654321,
			status:"已完成",
			shop_img:"../../../images/jf_fl.png",
			buy_num:4,
			jf_num:800,
			shop_name:"铅笔",
		},{  
			orderFormNum:987654321,
			status:"已完成",
			shop_img:"../../../images/jf_fl.png",
			buy_num:1,
			jf_num:800,
			shop_name:"铅笔",
	}],
	
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