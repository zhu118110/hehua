// pages/my/local/local.js
var app = getApp();
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
      defaults: false,
    },{
        name: "李四",
        phone: 15555558888,
        area: ["天津市", "天津市", "和平区"],
        detail_local: "xx镇xx村",
        defaults: false,
      }]
  },
  // 点击设为默认地址
  handle_default(e){
    
    let index = e.currentTarget.dataset.index; // 获取点击的下标
    let defaults = true;
    this.setData({
      showIndex:index,
      ['myLocal[' + index + '].defaults']: true // 改变数组某一项的值
    })

   
   
  },

  // 点击编辑地址,跳转到编辑地址页面
  editLocal:function(e){
   
    app.globalData.edit_index=e.currentTarget.dataset.index;    //得到编辑的地址的下标
    // 判断当前地址是否是默认地址
    if (e.currentTarget.dataset.index == this.data.showIndex) {
      this.setData({
        ['myLocal[' + e.currentTarget.dataset.index + '].defaults']: true // 改变数组某一项的值
      })
    }else {
      this.setData({
        ['myLocal[' + e.currentTarget.dataset.index + '].defaults']: false // 改变数组某一项的值
      })
    }
     // 路由传参要把传递的值解析成json格式
    let editData = JSON.stringify(this.data.myLocal[app.globalData.edit_index]);
    
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
            ['myLocal']: arr,
            showIndex:0
          })
        }
        
        
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // 如果有编辑地址的数据
      if(options.editData){
      
        let editData=[];
        let edit_index = app.globalData.edit_index;   //编辑的地址的下标
        editData =JSON.parse(options.editData);    //编辑后的地址的数据
        this.setData({
          ['myLocal[' + edit_index + ']']: editData,

        })
        //改变默认地址
        if (this.data.myLocal[edit_index].defaults==true){
          this.setData({
            showIndex:edit_index,   
          })
        }else{
          showIndex: 0
        }
        
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
    console.log("页面显示")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("页面隐藏")
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