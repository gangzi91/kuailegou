var oForm= document.querySelector("form");
oForm.onsubmit=function(){
    
    if (flagTel_num && flagYzm && flagPwd && flagQpwd && flagSryzm && checkbox() ){
        var json = {
            "username": $id("tel_num").value,
            "userpwd": $id("pwd").value
        }
        document.cookie = "userinfo=" + JSON.stringify(json);
        return true;
    }else{
        return false;
    }


   
   
}



var flagTel_num=null;
$id("tel_num").onblur=function(){
    var str = $id("tel_num").value;
    var reg=/^1\d{10}$/;
    if(reg.test(str)){
        $id("s1").innerHTML=""
        flagTel_num=true;
    }else{
        $id("s1").innerHTML="请输入11位手机号";
        flagTel_num=false;
    }
}
var flagYzm=null;
$id("yzm").onblur=function(){
    var str=$id("yzm").value;
    var reg=/^\d{4}/;
    if(reg.test(str)){
        $id("s2").innerHTML="";
        flagYzm=true;
    }else{
        $id("s2").innerHTML = "请输入发送给您手机上的验证码";
        flagYzm = false;
    }
}
var flagPwd=null;
$id("pwd").onblur=function(){
    var str = $id("pwd").value;
    var reg=/^\w{8,}/;
    if(reg.test(str)){
        $id("s3").innerHTML = "";
        flagPwd=true;
    }else{
        $id("s3").innerHTML = "密码为最少8位 字母 数字 下划线";
        flagPwd = false;
    }
}
var flagQpwd=null;
$id("qpwd").onblur=function(){
    var str1 = $id("qpwd").value;
    var str2 = $id("pwd").value;
    if (str1 == str2){
        $id("s4").innerHTML = "";
        flagQpwd = true;
    }else{
        $id("s4").innerHTML = "两次密码输入不一致";
        flagQpwd = false;
    }
}
function yzm() {
    var str = ""
    for (var i = 1; i <= 4; i++) {
        var code = rand(48, 122);
        if (code >= 58 && code <= 64 || code >= 91 && code <= 96) {
            i--;
        } else {
            str += String.fromCharCode(code);
        }
    }
    return str;
}
$id("szyzm").innerHTML = yzm();
$id("hy").onclick = function () {
    $id("szyzm").innerHTML = yzm();
}
var flagSryzm=null;
$id("sryzm").onblur=function(){
    var str = $id("sryzm").value;
    var str_ = str.toLowerCase();
    var str2 = $id("szyzm").innerHTML;
    var str2_ = str2.toLowerCase();
    if (str_ == str2_){
        $id("s5").innerHTML = "";
        flagSryzm = true;
    }else{
        $id("s5").innerHTML = "验证码输入错误";
        flagSryzm = false;
    }
}
function checkbox(){
    if ($id("tcheck").checked){
        return true;
    }else{
        return false;
    }
}