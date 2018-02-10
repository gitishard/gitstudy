// sscript=document.createElement("script");
// // sscript.setAttribute("src","http://libs.baidu.com/jquery/2.0.0/jquery.min.js");
// sscript.setAttribute("src","http://fanyi.youdao.com/openapi.do?keyfrom=1d1d1d&key=1496737977&type=selector&version=1.2&translate=on");
// document.getElementsByTagName("body")[0].appendChild(sscript);

cssl=document.createElement("div");
cssl.setAttribute("id","YOUDAO_SELECTOR_WRAPPER");
cssl.style.display="none";
cssl.style.height="240px";
cssl.style.width="340px";
document.getElementsByTagName("body")[0].appendChild(cssl);

sscript=document.createElement("script");
// sscript.setAttribute("src","http://libs.baidu.com/jquery/2.0.0/jquery.min.js");
sscript.setAttribute("src","http://fanyi.youdao.com/openapi.do?keyfrom=1d1d1d&key=1496737977&type=selector&version=1.2&translate=on");
document.getElementsByTagName("body")[0].appendChild(sscript);




// context=$(document).ready(function(){		
// 	// $("input").keyup(function(){//实时翻译
// 	// $('a').click(function(){//点击翻译
// 		var adiv="<div class='show-result'></div>"; 
// 		$(document).mouseup(function(e){
// 			// searchKey=$("#search").val();//输入框输入的值
// 			$("body").append(adiv);
// 			searchKey=window.getSelection();
// 			if(searchKey!=""){
// 				e=e||window.event;
// 				var xx=e.clientX+"px";
// 				var yy=e.clientY+"px";
// 				$(".show-result").css("left",xx).css("top",yy);
// 				$(".show-result").css("display",'block');
// 			}else{
// 				$(".show-result").css("display",'none');
// 			}
// 			$.ajax({
// 				url:"http://fanyi.youdao.com/openapi.do?keyfrom=1d1d1d&key=1496737977&type=data&doctype=jsonp&version=1.1&q="+searchKey,
// 				type: 'GET',
//         		dataType: 'JSONP',
// 				success:function(result){
// 					var sum=" "
// 					for(var i=0,num=result.basic.explains.length;i<num;i++){
// 						 sum=num-i+'.'+result.basic.explains[i]+'<br/>'+sum
// 					}
// 					sum='音标：'+'/'+result.basic.phonetic+'/'+'<br/>'+sum
// 						$(".show-result").html(sum);	
// 				}
// 			});
// 			searchKey="";
// 		});
// });
