// pages/local/edit_local/edit_page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recipients:"",  //收件人
    phone:"",    //手机号
    area:[],    //所在地区
    deatil_address:"",    //详细地址
    defaults:false    //设为默认
  },
  // 选择地区
  chooseArea(e){
      
      this.setData({
        ['area']: this.data.area.concat(e.detail.value)
      })
   
  },
  // 设为默认
  changeSwitch(e){
    
      this.setData({
        defaults:e.detail.value
      })
  },
  formSubmit(e){
    // e.detail.value是表单里的数据
    wx.navigateTo({
      url: '../local',
      success() {
      }
    })
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