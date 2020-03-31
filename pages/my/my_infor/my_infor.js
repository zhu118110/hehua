Page({
  data:{
    sex:false,   //显示性别选择
    jobShow:false,    //显示工作选择
    choice:[{
      sexValue: "请选择",    //性别
      birthday: "请选择",   //生日
      address: ["请选择"],   //地址
      jobValue: "请选择",
    }],
    
    jobObj:[{
      imgSrc:"../../../images/carer.png",
      type:"司机"
    },{
      imgSrc:"../../../images/teacher.png",
      type:"教师"
    },{
      imgSrc:"../../../images/please.png",
      type:"警察"
    },{
      imgSrc:"../../../images/gongren.png",
      type:"工人"
    },{
      imgSrc:"../../../images/chushi.png",
      type:"厨师"
    },{
      imgSrc:"../../../images/free.png",
      type:"自由职业"
    }]
  },

  onLoad(e){
	//  页面刚加载时获取到本地存储的个人信息
    
    let storage = wx.getStorageSync("choiseInfo");
    if (storage){
      this.setData({
        ['choice']: storage
      })
    }
    
  },
  
  // 点击选择性别区域显示
  showSex:function(e){
    this.setData({sex:true});
  },
  // 点击获得性别为男性
  chooseMan:function(e){
    this.setData({
      sex:false,
      // sexValue:"男",		
      ['choice[0].sexValue']:"男"
    })
  },
  // 点击获得性别为女性
  chooseLady:function(e){
  	this.setData({
		sex:false,
      ['choice[0].sexValue']:"女",
  	})
  },
  hideSex:function(e){
	  this.setData({
	  	sex:false,
	  })
  },
  
  // 生日选择器
  birthDayChange:function(e){
	  this.setData({
      ['choice[0].birthday']:e.detail.value
    })
  },
  // 地址选择器
  addressChange:function(e){
    this.setData({['choice[0].address']:e.detail.value});
    console.log(e.detail.value)
	  
  },
  // 点击选择工作的区域显示
  showJobArea:function(e){
	  this.setData({jobShow:true});  	
  },
  
  //  获取点击的工作类别
  chooseJob:function(e){
	// e.currentTarget.dataset[index]  获取点击时传递过来的下标
    let index=e.currentTarget.dataset.index;
    console.log(this.data.jobObj[index].type)
    this.setData({
      ['choice[0].jobValue']:this.data.jobObj[index].type,
      jobShow:false
    });
  },
  // 点击确定将所有信息保存到本地,保存成功返回上一页
  sure:function(e){

    wx.setStorage({
      key: 'choiseInfo',
      data: this.data.choice,
      success:function(){
        wx.navigateBack({
          delta: 1
        })
      },
    })

  }
})