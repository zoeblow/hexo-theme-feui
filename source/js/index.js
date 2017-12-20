console.log('Feui')
//只有在文档页面才调整到实例页面
var ifGuide = window.location.pathname.indexOf("guide") > -1;
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
    window.location.href ='https://feui.oschina.io';
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