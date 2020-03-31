// pages/my/my_jf/dh_detail/dh_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swipers: ["../../../../images/dh_detail.png", "../../../../images/dh_detail.png"],
    num:1,
    disable:true,
  },
  add(){
    this.setData({
      num:this.data.num+=1,
      disable:false
    })
    
  },
  reduce(){
    this.setData({
      num: this.data.num -= 1
    })
    if (this.data.num==1){
      this.setData({
        disable: true
      })
    }else{
      this.setData({
        disable: false
      })
    }
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