  var count=1;
  //此函数只能检测三门课，若改为非三门课，函数中的数字需改变
  //在后面的调试中将函数中的数字改为索引
$(function(){//加课
	function addspan(){
		var $parent = $("#downdatesegment").parent();
		var XingQi=$("#xingqi option:selected").val();
		var start=$("#updatesegment").val();
		var end=$("#downdatesegment").val();
			$parent.append('<span class="Num" style="width:200px;display:inline-block;">'+'<b>'+'第'+count+'节课'+':'+XingQi+'/'+start+'~'+end+'</b>'+'</span>');
			Arry=$(".Num").text();
			// alert(Arry.substring(17,24));
			// alert(Arry.substring(41,48));
			// alert(Arry.substring(65,72));
			document.getElementById('sumcourse').value=Arry;
			count+=1;
	}
	$("#addclass").click(function(){
		var $parent = $("#downdatesegment").parent();//确定已经确定的课的位置
		if($("#xingqi").val()==""||$("#updatesegment").val()==""||$("#downdatesegment").val()==""){
				$parent.append('<span class="timenull" style="width:176px;display:inline-block;">'+'上课时间不能为空'+'</span>');
				setTimeout("$('.timenull').remove()",2000);
		}
		else{
	 		if(count==4){
	 			if($(".error").length>0){}
	 				else{
	 					$parent.append('<span class="error" style="width:176px;display:inline-block;">'+'您最多只能选择三门课'+'</span>');
	 					setTimeout("$('.error').remove()",2000);
	 				}
	 		}
	 		//判断课程是否相等
	 		//两次课时间完全相同不行，同一天同时开始不行，
			// 同一天不能同时开始，但时间有交叠不行，
			// 如果同一天不同时开始，开始时间小的，结束时间必须不大于下节课的开始时间
			// 开始时间大的，开始时间不能小于上节课的结束时间
			// （0，24），（24，48），（48，72） 三节课
			// （7,8），（31，32），（55，56）天
			// （9,16），（33,40），（57,64）开始时间
			// （17，24），（41，48），（65，72）结束时间
			// 如果第一次课的开始时间小于第二次课的开始时间，则第一次课的结束时间也要小于第二次课的开始时间即如果第一次课先上，则必须先下
	 		else if(count<=3){
					if($(".Num").text()){
						addspan();
						if($(".Num").length==2){
							if($(".Num").text().substring(5,16)==$(".Num").text().substring(29,40)||$(".Num").text().substring(5,24)==$(".Num").text().substring(29,48)){//开课时间和星期相同或时间完全相同
								$parent.append('<span class="timesame" style="width:176px;display:inline-block;">'+'两次课时间有冲突'+'</span>');
								setTimeout("$('.timesame').remove()",2000);
								$(".Num")[$(".Num").length-1].remove();
								count-=1;
							}//如果条件不满足，则可能为同一天，开始时间不同；不同天，时间相同或不同；
							else if($(".Num").text().substring(7,8)==$(".Num").text().substring(31,32)){//同一天
									if(($(".Num").text().substring(9,16)<$(".Num").text().substring(33,40))&&($(".Num").text().substring(17,24)>$(".Num").text().substring(33,40))){//前一个的开始时间小//结束时间大，第一次课的开始时间小于第二次课的开始时间，则第一次课的结束时间必须小于第二次课的开始时间
											$parent.append('<span class="timesame" style="width:176px;display:inline-block;">'+'第二次课时间有错'+'</span>');
											setTimeout("$('.timesame').remove()",2000);
											$(".Num")[$(".Num").length-1].remove();
											count-=1;
									}else if(($(".Num").text().substring(9,16)>$(".Num").text().substring(33,40))&&($(".Num").text().substring(9,16)<$(".Num").text().substring(41,48))){//前一个开始时间大//结束时间小
											$parent.append('<span class="timesame" style="width:176px;display:inline-block;">'+'第二次课时间有错'+'</span>');
											setTimeout("$('.timesame').remove()",2000);
											$(".Num")[$(".Num").length-1].remove();
											count-=1;
									}
							}
						}
						else if($(".Num").length==3){//若函数执行到此，则前两门课必定不通过，可能的情况为：1.不同天，不同开始时间，不同结束时间；2.不同天，结束时间，开始时间相同；3.同天，开始时间满足不重叠；3.
							if($(".Num").text().substring(29,40)==$(".Num").text().substring(53,64)||$(".Num").text().substring(5,16)==$(".Num").text().substring(53,64)||$(".Num").text().substring(5,24)==$(".Num").text().substring(53,72)||$(".Num").text().substring(53,72)==$(".Num").text().substring(29,48)){
								$parent.append('<span class="timesame" style="width:176px;display:inline-block;">'+'两次课时间有冲突'+'</span>');
								setTimeout("$('.timesame').remove()",2000);
								$(".Num")[$(".Num").length-1].remove();
								count-=1;
								}
							else if($(".Num").text().substring(7,8)==$(".Num").text().substring(31,32)){//同一天第一与第二节
									if(($(".Num").text().substring(9,16)<$(".Num").text().substring(33,40))&&($(".Num").text().substring(17,24)>$(".Num").text().substring(33,40))){//前一个的开始时间小//结束时间大
											$parent.append('<span class="timesame" style="width:176px;display:inline-block;">'+'第二次课时间有错'+'</span>');
											setTimeout("$('.timesame').remove()",2000);
											$(".Num")[$(".Num").length-1].remove();
											count-=1;
									}else if(($(".Num").text().substring(9,16)>$(".Num").text().substring(33,40))&&($(".Num").text().substring(9,16)<$(".Num").text().substring(41,48))){//前一个开始时间大//结束时间小
											$parent.append('<span class="timesame" style="width:176px;display:inline-block;">'+'第二次课时间有错'+'</span>');
											setTimeout("$('.timesame').remove()",2000);
											$(".Num")[$(".Num").length-1].remove();
											count-=1;
									}
							}
							else if($(".Num").text().substring(7,8)==$(".Num").text().substring(55,56)){//同一天第一节与第三节
									if(($(".Num").text().substring(9,16)<$(".Num").text().substring(57,64))&&($(".Num").text().substring(17,24)>$(".Num").text().substring(57,64))){//前一个的开始时间小//结束时间大
											$parent.append('<span class="timesame" style="width:176px;display:inline-block;">'+'第二次课时间有错'+'</span>');
											setTimeout("$('.timesame').remove()",2000);
											$(".Num")[$(".Num").length-1].remove();
											count-=1;
									}else if(($(".Num").text().substring(9,16)>$(".Num").text().substring(57,64))&&($(".Num").text().substring(9,16)<$(".Num").text().substring(65,72))){//前一个开始时间大//结束时间小
											$parent.append('<span class="timesame" style="width:176px;display:inline-block;">'+'第二次课时间有错'+'</span>');
											setTimeout("$('.timesame').remove()",2000);
											$(".Num")[$(".Num").length-1].remove();
											count-=1;
									}
							}
							else if($(".Num").text().substring(31,32)==$(".Num").text().substring(55,56)){//同一天第二节与第三节
									if(($(".Num").text().substring(33,40)<$(".Num").text().substring(57,64))&&($(".Num").text().substring(41,48)>$(".Num").text().substring(57,64))){//前一个的开始时间小//结束时间大
											$parent.append('<span class="timesame" style="width:176px;display:inline-block;">'+'第二次课时间有错'+'</span>');
											setTimeout("$('.timesame').remove()",2000);
											$(".Num")[$(".Num").length-1].remove();
											count-=1;
									}else if(($(".Num").text().substring(33,40)>$(".Num").text().substring(57,64))&&($(".Num").text().substring(33,40)<$(".Num").text().substring(65,72))){//前一个开始时间大//结束时间小
											$parent.append('<span class="timesame" style="width:176px;display:inline-block;">'+'第二次课时间有错'+'</span>');
											setTimeout("$('.timesame').remove()",2000);
											$(".Num")[$(".Num").length-1].remove();
											count-=1;
									}
							}	
						}	
					}else{
						addspan();
					}	 
	 		}		 
	 		//将课程表赋值为空
	 		$("#xingqi").val("");//XingQi=
			$("#updatesegment").val("");//start=
			$("#downdatesegment").val("");//end= 
	 	}
		
 		
	});
	$("#minusclass").click(function(){
		$(".error").remove();
		$(".Num")[$(".Num").length-1].remove();
		count-=1;
	});//减课

});
 
