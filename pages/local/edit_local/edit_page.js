// pages/local/edit_local/edit_page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    edit_data:[],
  },
  // 选择地区
  chooseArea(e){
    
      this.setData({
        ['edit_data[0].area']: e.detail.value
      })
    console.log(this.data.edit_data[0].area)
  },
  // 设为默认
  changeSwitch(e){
    
      this.setData({
        ['edit_data[0].defaults']:e.detail.value
      })
  },
  // 点击确认编辑返回到地址页面
  formSubmit(e){
    // e.detail.value是表单里的数据

    let editData = JSON.stringify(this.data.edit_data);
    wx.navigateTo({
      url: '../local?editData=' + editData,
      success() {
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   * 
   * 获取到要编辑的地址并渲染到页面上
   */
  onLoad: function (options) {
    let edit_data = this.data.edit_data.concat(JSON.parse(options.editData));
    this.setData({
      ['edit_data']: edit_data,
      ['edit_data[0].area']: edit_data[0].area
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