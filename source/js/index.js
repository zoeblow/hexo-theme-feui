console.log('Feui')
//只有在文档页面才调整到实例页面
var ifGuide = window.location.pathname.indexOf("guide") > -1;
var hostname = window.location.hostname;
var protocol = window.location.protocol
var pathname = window.location.pathname

//非https 强制跳转到https
var ignorePath = ["localhost", "127.0.0.1", "172.30.5.37"].indexOf(hostname) == -1;
if (ignorePath && protocol == 'http:') {
  window.location.href = 'https://'+hostname+'/docs';
}

if (ifGuide) {
  //isMibile();
}
//检测窗口变化
window.addEventListener("resize", function () {
  if (ifGuide) {
    //isMibile();
  }
});

function isMibile(){
  // console.log('window.innerWidth',window.innerWidth);
  if(window.innerWidth<800){
    window.location.href = "https://feui.gitee.io";
  }
}

//index 主页移动端显示效果
var mobile = document.getElementById("mobile");
var nav = document.getElementById("nav");
mobile.onclick = function () {
  var isShow = nav.style.display;
  if(isShow=='block'){
    nav.style.display = "none";
  }else{
    nav.style.display = "block";
  }
}

//index guide移动端显示效果
if (ifGuide) {
  var mobile2 = document.getElementById("mobile2");
  var sidebar = document.getElementById("sidebar");
  var mask = document.getElementById("mask");
  mobile2.onclick = function () {
    var isShow = sidebar.style.display;
    if(isShow=='block'){
      sidebar.style.display = "none";
      mobile2.style.left = "5px";
      mobile2.style.position = "fixed";
      mask.style.display = "none";
    }else{
      sidebar.style.display = "block";
      mobile2.style.left = "45px";
      mobile2.style.position = "absolute";
      mask.style.display = "block";
    }
  }

  mask.onclick = function () {
    sidebar.style.display = "none";
    mobile2.style.left = "5px";
    mobile2.style.position = "fixed";
    mask.style.display = "none";
  };
}

// id为pContent中的所有的A连接可以新页面打开
if (pathname.indexOf("guide") >= 0){
  var As = document.getElementById("pContent").getElementsByTagName("a");
  for (var i = 0; i < As.length; i++) {
    As[i].target = "_blank";
  }
}