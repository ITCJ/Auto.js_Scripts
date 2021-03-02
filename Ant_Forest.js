importClass(android.content.Context);
// console.show()
// console.setPosition(0, 1000);
//可收取的能量球图片
// var availableImgBase64 = "data:image/png;base64,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";
// var avalableImg = images.fromBase64(availableImgBase64);

var shieldBase64 = "iVBORw0KGgoAAAANSUhEUgAAABgAAAARCAIAAABIGvtnAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAA0RJREFUeJwVlFmSLCcMRZEQQ041vLbD9na9Gy/Ce3H4z/Wqh6zOIhMQkim+CIK43HskQX/+/VeuoTbWJkarVuJ9qTUYIjUEYqUfa7O2ki/WpxB2654+5HHW0xXmCQ3knEd6fNcj28IIYAmcad60WcFxFzCgrWsBIKmimmaUGmMpmDYpe+vPOAM2ZGFLTWxlX5u36ABFlUA9GAe2Sl9dpsuTxKhxQOe8UUmJ95cKzyO10p8xtdbuv3tzoBEgKlRRacwAOsRYWumhEIQ8h1GGKXsvpllpgXcBFTTOotq+umdEku5DgbmpZm9tGOyx51qdNGNR4lDmc1kWjsNB1rSMsdqWB2tNCOACA4IxTGAYugyAc9TTBd8dMphCWNky0TEt9XKp80nIFRAtJuDTGGvgJeCEgQW2Z6WXN2gAEkmHgcbRINTga843UnbxOJ3x7Q2GCZrUnJow9vI2tt57S6Mql+OUngdFDzu9uLw4eT3PGII9Zn2/3cGWOMplifPYE8OWyvZdt5W3R3cbhmGwbkBEaT9aTTRNeDx154aarXL0fllklkYmgz18wDh1Mi5vsr7z50ftl0vuYDEM6OOr+q1euQaaBr8H4KM13mvJnB0qdDR//B7B9G0vNx3f+lhx/em3VaVHBzPOMF/UxlwqpKPs2dDgbfDgO5jaEWx7gpx6V+/TtXcm5mLSN3594GN1+zYqt24zzu3yZk4/Dhc/UymppL06Ql8pVPQiXEo99hS2LTryITrRtm/2692833sr924I1vcOLz7yOOH0Go4msnPNykjGH/OvRTDLPeXkvx+z5GtX1xG2/Hh+2bzFJhN4gpabrNHXYdDRe2A4Dq0raA7UHNHgRsfaUSg++8RkKtX22fnn37UaIznwETR3Vjm6EiKfr/DjLUwTtSqPz/L9xTU57bDLYb1z8zyjBDSaHse+3fJh82EsDQTRsLR2BF+GpZ0ufH7D0wWsbx/37eetrF+W91l0pPttXy6mj98wk0pV7aSSZEK5okbspqCPWIoDzyddLjAvFqA91ny/pXWFesxGz0Ym+nzvCWx0Pgacl/5X1KasnUfqn0YxL8nkh7KczHSycbTk7fPJ9//K5we2fLL4G+gve7P/A8EOQb4JpgQoAAAAAElFTkSuQmCC";
var shieldImg = images.fromBase64(shieldBase64);
//找能量 小手 图片
var findImgBase64 = "data:image/jpeg;base64,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";
var findImg = images.fromBase64(findImgBase64);



//屏幕高度
var height = device.height
var width = device.width

// var pwd = hamibot.env;
// log(pwd);
// //解锁屏幕
// var pwd = pwd.input;
// if (pwd) {
//   unlockIfNeed();
// }else{
// 	log("无密码不解锁");
// }

//无障碍判定
// try {
//     auto.waitfor();
// } catch (error) {
//     toast("请手动开启无障碍并授权给hamibot");
//     sleep(2000);
//     exit();
// }

// alert("使用说明", "请确保hamibot有无障碍权限。稍后请允许截屏权限。");
toast("开始执行,请赋予截屏权限")
// threads.start(function() {
    //在新线程执行的代码
  	//启用按键监听
// 		events.observeKey();
//     while(true) {
    //监听音量上键按下
//       events.onKeyDown("volume_up", function(event) {
//           toastLog("音量上键被按下了");
//         	exit();
//       });
//     }
// });



//请求横屏截图
requestScreenCapture(false);
sleep(500);

// setScreenMetrics(1080, 1920);



//判断是否已经启动了蚂蚁森林
if(!textContains("我的大树养成记录").exists()){
  // toastLog("开始启动蚂蚁森林")
  // 启动蚂蚁森林
  app.startActivity({ 
     action: "android.intent.action.VIEW", 
     data:"alipays://platformapi/startapp?appId=60000002", 
     packageName: "com.eg.android.AlipayGphone", 
  });

  //暂停5秒,等在启动完成
  // sleep(5000);
  while(!textContains("我的大树养成记录").exists()){
  //等待启动完成
  };
  toastLog("蚂蚁森林启动成功")
}

//监测是否有弹窗,有的话关掉
var closeBtn = text("关闭").findOne(1000);
if(closeBtn!=null){
  toastLog("检测到弹窗,关闭");
	closeBtn.click();
}

//收取自己的能量
// getEnergy();
var next = false;

do{
  //找 我的大树养成记录 控件, 判断是否收取结束
  var w = textContains("我的大树养成记录").findOne(4000);
//   console.log("找头像");
  if (w == null) {
    //收取结束
    console.log("没找到头像");
    break;
  }

    

    
  //判断 保护罩 
  if(isShield()){
    toastLog("撞到护盾,下一个");
  }else{
    // toastLog("偷取");
    getEnergy();
  }
  
  //找下一个
//   var nextResult = images.findImage(images.resize(captureScreen(),[1080,1920]), findImg,{threshold:0.7});
  // sleep(500);
  var nextResult = images.findImage(captureScreen(), findImg,{threshold:0.7});
  
  next = nextResult?true:false;
  // toastLog(nextResult);
  if(next){
		console.log("找到下一个好友,进入森林");
    click(nextResult.x,nextResult.y+50);
    sleep(1000);
  }else{
   	console.log("没找到下一个好友,结束");
  }


}while(next);
// threads.shutDownAll();
alert("本次收取结束");


//循环点击能量球可能的位置
function getEnergy() {
  var titleobj = id("com.alipay.mobile.nebula:id/h5_tv_title").findOnce();
  var username = titleobj.text().replace("蚂蚁森林","");
  toastLog("正在收取"+username+"能量");
  sleep(1000);
  var x = 150,y=800;
  for (;x<=width/2;) {
    press(x, y,1);
    press(x, y,1); 
//     sleep(50);
    x+=40;
    y-=30
  }
  
  for (x=width/2,y=550;x<width-100;) {
    press(x, y,1);
    press(x, y,1);
//     sleep(50);
    x+=40;
    y+=20
  }
}

//判断好友森林是否有护盾
function isShield(){
	var titleobj = id("com.alipay.mobile.nebula:id/h5_tv_title").findOnce();
  var title = titleobj.text();
  //判断 保护罩 
  var shieldResult = images.findImage(captureScreen(), shieldImg,{threshold:0.7});
  //title等于蚂蚁森林 代表在自己的森林
  return title!="蚂蚁森林" && shieldResult;
}


/**
 * 手机是否锁屏
 */
function isLocked() {
    var km = context.getSystemService(Context.KEYGUARD_SERVICE);
    return km.isKeyguardLocked() && km.isKeyguardSecure();
}

/**
 * 解锁屏幕
 */
function unlockIfNeed() {
   	device.wakeUpIfNeeded();
    if (!isLocked()) {
      	log("没有锁屏无需解锁");
        return;
    }
    enterPwd();
    
    log("解锁完毕");
}

function enterPwd() {
    //判断是否已经上滑至输入密码界面
//     for (int = 0; i < 10; i++) {
//         if (!text(i).clickable(true).exists() && !desc(i).clickable(true).exists()) {
//             log("解锁屏幕失败");
//             exit();
//         }
//     }
  sleep(2000);

  swipe(width/2, height/2, width/2, 0, 500);
  
    //点击
    if (text(0).clickable(true).exists()) {
        for (var i = 0; i < pwd.length; i++) {
            a = pwd.charAt(i)
            sleep(200);
            text(a).clickable(true).findOne().click()
        }
    } else {
        for (var i = 0; i < pwd.length; i++) {
            a = pwd.charAt(i)
            sleep(200);
            desc(a).clickable(true).findOne().click()
        }
    }
}
