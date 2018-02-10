$(document).ready(function(){
		$("[data-toggle='popover']").popover();
        $(".top").hide();  
        $(window).scroll(function(){  
            if($(window).scrollTop()>100){  
                //$("#return-top").show();
                $('.top').fadeIn(300);  
                }  
                else{$('.top').fadeOut(200);}  
              
            });  
            $('.top').click(function(){  
                  
                $('body,html').animate({scrollTop:0},300);  
                return false;  
                  
                });

        });
          // for(var i=0;i<$("input").length;i++){
          //   if($("input")[i].value==""){
          //       $("#error").show();
          //       setTimeout("$('#error').show()",3000);
          //   }
          // }
        