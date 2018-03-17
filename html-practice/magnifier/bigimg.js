
 (function(window){
 function $(id){
 return document.getElementById(id);
 };
 // 获取对象
 var demo = $("demo"),smilBox = $("smil_box"),mask = $("mask"),bigImg = $("big_img"),bigBox = $("big_box");
 // smilBox的hover事件
 smilBox.onmouseover = function(){
 mask.style.display = "block";
 bigBox.style.display = "block";
 };
 smilBox.onmouseout = function(){
 mask.style.display = "none";
 bigBox.style.display = "none";
 };
 // 鼠标移动事件
 smilBox.onmousemove = function(event){
 var event = event || window.event;
 // 获取鼠标在页面上的坐标
 var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
 var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;
 // mask的位置坐标
 var boxX = pageX - demo.offsetLeft;
 var boxY = pageY - demo.offsetTop;
 var maskX = boxX - mask.offsetWidth / 2;
 var maskY = boxY - mask.offsetHeight / 2;
 // 限制mask的移动范围
 if( maskX < 0 ){
 maskX = 0;
 };
 if( maskX > smilBox.offsetWidth - mask.offsetWidth){
 maskX = smilBox.offsetWidth - mask.offsetWidth;
 };
 if( maskY < 0 ){
 maskY = 0;
 };
 if( maskY > smilBox.offsetHeight - mask.offsetHeight){
 maskY = smilBox.offsetHeight - mask.offsetHeight;
 };
 // 黄色遮罩层的位置坐标
 mask.style.top = maskY + "px";
 mask.style.left = maskX + "px";
 // 大图片移动的比例
 var prop = ( bigImg.offsetWidth - bigBox.offsetWidth ) / (smilBox.offsetWidth - mask.offsetWidth);
 // 大图片的坐标
 var bigImgX = prop * maskX;
 var bigImgY = prop * maskY;
 bigImg.style.top = -bigImgY + "px";
 bigImg.style.left = -bigImgX + "px";
 }
 })(window)
