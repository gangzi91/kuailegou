var oForm=document.querySelector("form");
oForm.onsubmit=function(){
    var str = document.cookie;
    var arr = str.split("; ");  
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i].split("=");

        if (item[0] == "userinfo") {
            var json = JSON.parse(item[1]);
            
        }
    }  
    var iname = $id("tel_num").value;
    var ipwd = $id("upwd").value;
    if (json.username == iname && json.userpwd == ipwd && flagSryzm) {
       return true;
    } else {
       return false;
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
var flagSryzm = null;
$id("sryzm").onblur = function () {
    var str = $id("sryzm").value;
    var str_ = str.toLowerCase();
    var str2 = $id("szyzm").innerHTML;
    var str2_ = str2.toLowerCase();
    if (str_ == str2_) {
        $id("s5").innerHTML = "";
        flagSryzm = true;
    } else {
        $id("s5").innerHTML = "验证码输入错误";
        flagSryzm = false;
    }
}