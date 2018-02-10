$(document).ready(function(){
        $("[data-toggle='popover']").popover();
        $("[data-toggle='tooltip']").tooltip(); 
        $(".top").hide();  
        $(window).scroll(function(){  
            if($(window).scrollTop()>100){  
                //$("#return-top").show();
                $('.top').fadeIn(300);  
                }  
                else{
                    $('.top').fadeOut(200);
                }  
              
            });  
        $('.top').click(function(){    
             $('body,html').animate({scrollTop:0},300);  
            return false;    
        });
        // to top
        
        $("#exit_label").hide();
        $("#exit_a").mouseover(function(){
             $("#exit_label").toggle();
        });
         $("#exit_a").mouseout(function(){
             $("#exit_label").toggle();
        });
        //退出显示
        
        $("#fabutongzhi_tips").hide();
        $("#submitTongzhi").mouseover(function(){
             $("#fabutongzhi_tips").toggle();
        });
         $("#submitTongzhi").mouseout(function(){
             $("#fabutongzhi_tips").toggle();
        });

         $('.panel').popover("show");
         setTimeout(
            "$('.panel').popover('hide')",3000);
         //发布课程的提示
        $("#StartTime").datepicker();
        $("#EndTime").datepicker();
       // $("#xingqi").xingqi();
        $("#updatesegment").timepicki();
        $("#downdatesegment").timepicki();
        //
        var h=$("#content").height();
        if(h<80){
            $("#content").css("height","300px");
        }
        // 没内容时保证footer不上浮

        $("#guanzhu").hide();
        $("#connect").hide();
        $("#a_guanzhu").mouseover(function(){
            $("#guanzhu").toggle();
        });
        $("#a_guanzhu").mouseout(function(){
            $("#guanzhu").toggle();
        });
        $("#connect_us").mouseover(function(){
            $("#connect").toggle();
        });
       $("#connect_us").mouseout(function(){
            $("#connect").toggle();
        }); 
});
function exit(){
    if(confirm("您确定要退出吗？")){
        alert("已成功退出！");
        return true;
    }else{
        return false;
    }
}
//模态框提交后隐藏
function submit(){
    //alert("已提交");
    $("#mymodal").modal("hide"); 
}

function tongzhi_check(obj){
    if(obj.tongzhi_textarea.value==""&&obj.tongzhi_file.value==""){
        alert("通知的文字或文件至少需要选择一个哦");
    }
}
function class_check(obj){

    var classinput=obj.getElementsByTagName("input");
    for(var i=0;i<classinput.length;i++){
        if(classinput[i].value==""){
            classinput[i].focus();
            return false;
        } 
    }
    if(obj.classinfo.value==""){
        obj.classinfo.focus();
        return false;
    }
    if(obj.xingqi.value==""){
        obj.xingqi.focus();
        return false;
    }
    if(obj.classtype.value==""){
        obj.classtype.focus();
        return false;
    }
    return true;
}

$(function(){
    $("form :input.required").each(function(){
                var $required = $("<strong class='high'> *</strong>"); //创建元素
                $(this).parent().append($required); //然后将它追加到文档中
             });
             //文本框失去焦点后
            $('form :input').blur(function(){
                 var $parent = $(this).parent();
                 $parent.find(".formtips").remove();
                 //验证用户名
                 if( $(this).is('#classname') ){
                        if( this.value=="" || this.value.length < 3 ){
                            $(this)[0].focus();
                            var errorMsg = '请输入至少3位的课程名!';
                            $parent.append('<span class="formtips onError errortip">'+errorMsg+'</span>');
                        }else{
                            var okMsg = '输入正确.';
                            $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                        }
                 }
                 //验证价格
                 if( $(this).is('#classprice') ){
                        if( this.value=="" || this.value < 500 ||this.value>10000||isNaN(this.value)){
                            var errorMsg = '请输入大于500小于10000的数!';
                            $(this)[0].focus();
                            $parent.append('<span class="formtips onError errortip">'+errorMsg+'</span>');
                        }else{
                            var okMsg = '输入正确.';
                            $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                        }
                 }
                 //验证课程量
                 if( $(this).is('#classnumber') ){
                        if( this.value=="" || this.value <0 ||this.value>100||isNaN(this.value)){
                            var errorMsg = '请输入大于0小于100的数!';
                            $(this)[0].focus();
                            $parent.append('<span class="formtips onError errortip">'+errorMsg+'</span>');
                        }else{
                            var okMsg = '输入正确.';
                            $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                        }
                 }
                 //课程介绍的验证
                 if( $(this).is('#classinfo') ){
                        if( this.value=="" || this.value.length <30){
                            var errorMsg = '字数不得少于30字!';
                            $(this)[0].focus();
                            $parent.append('<span class="formtips onError errortip">'+errorMsg+'</span>');
                        }else{
                            var okMsg = '输入正确.';
                            $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                        }
                 }

                 //验证上课地点
                 if( $(this).is('#classplace') ){
                        if( this.value=="" || this.value.length <3||!isNaN(this.value)){
                            var errorMsg = '输入上课地点!';
                            $(this)[0].focus();
                            $parent.append('<span class="formtips onError errortip">'+errorMsg+'</span>');
                        }else{
                            var okMsg = '输入正确.';
                            $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                        }
                 }
                 //验证星期
                 if( $(this).is('#xingqi') ){
                        if( this.value==""){
                            var errorMsg = '星期不能为空!';
                            $(this)[0].focus();
                            $parent.append('<span class="formtips onError errortip">'+errorMsg+'</span>');
                        }else{
                            var okMsg = '输入正确.';
                            $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                        }
                 }
                 //验证上课时间
                 if( $(this).is('#updatesegment') ){
                        if( this.value==""){
                            var errorMsg = '时间段不能为空!';
                            $parent.append('<span class="formtips onError errortip">'+errorMsg+'</span>');
                            $(this)[0].focus();
                        }
                        // else if(parseInt($("#downdatesegment").val().split(":")[0])<parseInt($("#updatesegment").val().split(":")[0])){
                        //             var error = '开始时间不正确!';
                        //             $(this)[0].focus();
                        //             $parent.append('<span class="formtips onError errortip">'+error+'</span>'); 
                        //         }
                        // else if(parseInt($("#downdatesegment").val().split(":")[0])==parseInt($("#updatesegment").val().split(":")[0])&&parseInt(downdate.split(":")[1])<=parseInt($("#updatesegment").val().split(":")[1])){
                        //            var error = '开始时间不正确!';
                        //             $(this)[0].focus();
                        //             $parent.append('<span class="formtips onError errortip">'+error+'</span>'); 
                        //         }
                        else{
                             // var okMsg = '输入正确.';
                            var okMsg=$("#updatesegment").val();
                            // setTimeout("$('#updatesegment').focus()",1000);
                            $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                        }
                 }
                 //验证下课时间
                 if( $(this).is('#downdatesegment') ){
                        if( this.value==""){
                            var errorMsg = '时间段不能为空!';
                            $(this)[0].focus();
                            $parent.append('<span class="formtips onError errortip">'+errorMsg+'</span>');
                        }
                        // else if(parseInt($("#updatesegment").val().split(":")[0])>parseInt($("#downdatesegment").val().split(":")[0])){
                        //             var error = '结束时间不正确!';
                        //             $(this)[0].focus();
                        //             $parent.append('<span class="formtips onError errortip">'+error+'</span>'); 
                        //         }
                        // else if(parseInt($("#updatesegment").val().split(":")[0])==parseInt($("#downdatesegment").val().split(":")[0])&&parseInt($("#updatesegment").val().split(":")[1])>=parseInt($("#downdatesegment").val().split(":")[1])){
                        //            var error = '结束时间不正确!';
                        //             $(this)[0].focus();
                        //             $parent.append('<span class="formtips onError errortip">'+error+'</span>'); 
                        //         }
                        else{
                           // downdate=this.value;
                            // var okMsg = '输入正确.';
                           var okMsg=$("#downdatesegment").val();
                           // setTimeout("$('#downdatesegment').focus()",1000);
                            $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                        
                        }
                 }
                 //验证开始日期
                 if( $(this).is('#StartTime') ){
                        if( this.value==""){
                            var errorMsg = '时间段不能为空!';
                            $(this)[0].focus();
                            $parent.append('<span class="formtips onError errortip">'+errorMsg+'</span>');
                        }
                        else if(parseInt($("#StartTime").val().split("/")[2])>parseInt($("#EndTime").val().split("/")[2])){
                                    var error = '开始时间不正确!';
                                    $(this)[0].focus();
                                    $parent.append('<span class="formtips onError errortip">'+error+'</span>'); 
                                }
                        else if(parseInt($("#StartTime").val().split("/")[0])>parseInt($("#EndTime").val().split("/")[0])){
                                   var error = '开始时间不正确!';
                                    $(this)[0].focus();
                                    $parent.append('<span class="formtips onError errortip">'+error+'</span>'); 
                                }
                        else if(parseInt($("#StartTime").val().split("/")[1])>=parseInt($("#EndTime").val().split("/")[1])){
                                   var error = '开始时间不正确!';
                                    $(this)[0].focus();
                                    $parent.append('<span class="formtips onError errortip">'+error+'</span>'); 
                                }
                        else{
                            //startTime=this.value;
                            var okMsg = '输入正确.';
                            $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                        }
                 }
                 //验证结束日期
                 if( $(this).is('#EndTime') ){
                        if( this.value==""){
                            var errorMsg = '时间段不能为空!';
                            $(this)[0].focus();
                            $parent.append('<span class="formtips onError errortip">'+errorMsg+'</span>');
                        }
                        else if(parseInt($("#StartTime").val().split("/")[2])>parseInt($("#EndTime").val().split("/")[2])){
                                    var error = '结束时间不正确!';
                                    $(this)[0].focus();
                                    $parent.append('<span class="formtips onError errortip">'+error+'</span>'); 
                                }
                        else if(parseInt($("#StartTime").val().split("/")[0])>parseInt($("#EndTime").val().split("/")[0])){
                                   var error = '结束时间不正确!';
                                    $(this)[0].focus();
                                    $parent.append('<span class="formtips onError errortip">'+error+'</span>'); 
                                }
                        else if(parseInt($("#StartTime").val().split("/")[1])>=parseInt($("#EndTime").val().split("/")[1])){
                                   var error = '结束时间不正确!';
                                    $(this)[0].focus();
                                    $parent.append('<span class="formtips onError errortip">'+error+'</span>'); 
                                }
                        // else if(parseInt(startTime.split("/")[2])>parseInt(this.value.split("/")[2])){
                        //             var error = '结束时间不正确!';
                        //             $(this)[0].focus();
                        //             $parent.append('<span class="formtips onError errortip">'+error+'</span>'); 
                        //         }
                        // else if(parseInt(startTime.split("/")[1])>=parseInt(this.value.split("/")[1])){
                        //            var error = '结束时间不正确!';
                        //             $(this)[0].focus();
                        //             $parent.append('<span class="formtips onError errortip">'+error+'</span>'); 
                        //         }
                        // else if(parseInt(startTime.split("/")[0])>parseInt(this.value.split("/")[0])){
                        //            var error = '结束时间不正确!';
                        //             $(this)[0].focus();
                        //             $parent.append('<span class="formtips onError errortip">'+error+'</span>'); 
                        //         }
                        else{
                            var okMsg = '输入正确.';
                           // var okMsg=parseInt(update.split(":")[0]);
                            $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                        }
                 }
                 //验证课程类型
                 if( $(this).is('#classtype') ){
                        if( this.value==""){
                            var errorMsg = '课程类型不能为空!';
                            // var errorMsg =this.value;
                            $(this)[0].focus();
                            $parent.append('<span class="formtips onError errortip">'+errorMsg+'</span>');
                        }else{
                            var okMsg = '输入正确.';
                            $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                        }
                 }

            }).mouseup(function(){
               $(this).triggerHandler("blur");
            }).focus(function(){
                 $(this).triggerHandler("blur");
        });//end blur
});

