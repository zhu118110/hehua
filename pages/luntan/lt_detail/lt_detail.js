// pages/luntan/lt_detail/lt_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dzStyle:false,
    // rich-text
    nodes:[{
      name:"p",
      attrs:{
        class: 'comment_title',
      },
      children: [{
        type: 'text',
        text: '全部评论'
      }]
    }],
    // 评论数据
    comment:[{
      userImg:"../../../images/luntan_2.jpg",
      userName:"张三",
      commentTime:"3分钟前",
      niceNumber:20,
      commentMsg: "我们主任总爱给我们讲这样一段故事:她刚进入博物馆工作的时候，老馆长问她有没有去过上博，她说没有,老馆长用异常惊讶感叹的语气说“上博你都没去过!找机会去”，于是我们主任周五晚上坐火车到上海，参观完了又坐周日晚上的火车回北京。",
      reply:false,
    }]
  },
  // 点击点赞改变样式
  dzStyle(e){
    let dzIndex=e.currentTarget.dataset.dzindex
   
    this.setData({
      dzStyle:!this.data.dzStyle
    })
    if(this.data.dzStyle==true){
      this.setData({
        ['comment[' + dzIndex +'].niceNumber']:this.data.comment[dzIndex].niceNumber+=1
      })
    }else{
      this.setData({
        ['comment[' + dzIndex + '].niceNumber']: this.data.comment[dzIndex].niceNumber -= 1
      })
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    console.log(res)
    if (res.from == "button") {
      return {
        title: '标题--荷花小程序',
        path: '/page/my/my'
      }
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

  
})