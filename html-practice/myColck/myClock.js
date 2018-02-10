function my_clock(el){
    var today=new Date();
    var y=today.getFullYear();
    var M=today.getMonth();
    var d=today.getDate();
    var xq=today.getDay();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    switch (xq)
    {
    case 0:
    	x="天";break;
    case 1:
    	x="一";break;
    case 2:
    	x="二";break;
    case 3:
    	x="三";break;
    case 4:
    	x="四";break;
    case 5:
    	x="五";break;
    case 6:
    	x="六";break;
    }
    m=m>=10?m:('0'+m);
    s=s>=10?s:('0'+s);
    el.innerHTML = y+"年"+M+"月"+d+"日"+"<br>"+"星期"+x+"<br>"+h+":"+m+":"+s;
    setTimeout(function(){my_clock(el)}, 1000);
}

var clock_div = document.getElementById('clock_div');
// var date=document.getElementById("date");
my_clock(clock_div);