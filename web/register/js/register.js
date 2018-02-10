function check(obj){
	if(obj.Name.value==""){
		alert("please input your name");
		obj.Name.focus();
		return false;
	}
	if(obj.address.value==""){
		alert("please input your address");
		obj.address.focus();
		return false;
	}
	if(obj.unit.value==""){
		alert("please input your company");
		obj.unit.focus();
		return false;
	}
	if(obj.mail.value==""){
		alert("please input your mail");
		obj.mail.focus();
		return false;
	}
	if(obj.password.value==""){
		alert("please input your password");
		obj.password.focus();
		return false;
	}
	if(obj.resurepassword.value==""){
		alert("please resure your password");
		obj.resurepassword.focus();
		return false;
	}
	if(obj.telphonenum.value==""){
		alert("please input your phonenumber");
		obj.telphonenum.focus();
		return false;
	}
	else if(obj.telphonenum.value!=""&&isNaN(obj.telphonenum.value)){
		alert("please input the right form");
	}
	if(obj.messagecode.value==""){
		alert("please input your messagecode");
		obj.messagecode.focus();
		return false;
	}
	return true;


}
$(function(){
	$("#dataInput").off("timeData").on("timeData",function(event){
		if(timei==1){
			timei=0;
		}
				
	}).dataYear();
});
