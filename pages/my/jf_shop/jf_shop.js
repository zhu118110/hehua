// pages/my/jf_shop/jf_shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      shop_type:[{
        type:"分类一",
        logo:"../../../images/jf_fl.png",
        shop:[{
          imgSrc: "../../../images/jf_fl.png",
          jf_price:200,
          shop_name:"毛笔"
        },{
            imgSrc: "../../../images/jf_fl.png",
            jf_price: 200,
            shop_name: "毛笔"
          }, {
            imgSrc: "../../../images/jf_fl.png",
            jf_price: 200,
            shop_name: "毛笔"
          }, {
            imgSrc: "../../../images/jf_fl.png",
            jf_price: 200,
            shop_name: "毛笔"
          }]
      }, {
          type: "分类二",
          logo: "../../../images/jf_fl.png",
          shop: [{
            imgSrc: "../../../images/jf_fl.png",
            jf_price: 200,
            shop_name: "毛笔"
          }, {
            imgSrc: "../../../images/jf_fl.png",
            jf_price: 200,
            shop_name: "毛笔"
          }]
        }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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