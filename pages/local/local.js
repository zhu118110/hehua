// pages/my/local/local.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showIndex:0,
    myLocal:[{
      name:"张三",
      phone:15555558888,
      area:["山西省","长治市","长子县"],
      detail_local:"xx镇xx村",
      defaults: true,
    },{
        name: "李四",
        phone: 15555558888,
        area: ["江苏省", "昆山市", "xx县"],
        detail_local: "xx镇xx村",
        defaults: false,
      }]
  },
  // 点击设为默认地址
  handle_default(e){
    // 获取点击的下标
    let index=e.currentTarget.dataset.index;
    let defaults = !this.data.myLocal[index].defaults;
    this.setData({
      // 改变数组某一项的值
      showIndex:index,
      ['myLocal[' + index + '].defaults']: defaults
    })
  },
  // 点击编辑地址,跳转到编辑地址页面
  editLocal:function(e){
    let index=e.currentTarget.dataset.index;
    // 路由传参要把传递的值解析成json格式
    let editData = JSON.stringify(this.data.myLocal[index]);
    // console.log(editData);
    wx.navigateTo({
      url: 'edit_local/edit_page?editData='+editData,
      success() {
      }
    })
  },
  // 删除地址
  deleteLocal(e){
    let index=e.currentTarget.dataset.index;
    let that=this;
    wx.showModal({
      title: '地址删除',
      content:"是否删除这个地址？",
      success(res){
        // 点击确定
        if(res.confirm){
          that.data.myLocal.splice(index, 1);
          let arr = that.data.myLocal;
          that.setData({
            ['myLocal']: arr
          })
        }
        
        
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      if(options.editData){
        console.log("编辑好的数据"+options.editData)
      }
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