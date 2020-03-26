// pages/my/my_jf/my_jf.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jf_num:0,
    get_jf:[{
      get_num:20,
      get_way:"点赞",
      get_time:"2019.11.11 20:50:11"
    }, {
        get_num: 10,
        get_way: "评论",
        get_time: "2019.12.11 20:50:11"
      }, {
        get_num: 40,
        get_way: "发帖",
        get_time: "2019.09.11 20:50:11"
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
    let totle = 0;
    for (let i in this.data.get_jf) {
      totle += this.data.get_jf[i].get_num
    };
    this.setData({
      jf_num: totle
    })
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