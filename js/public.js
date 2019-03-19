//根据id查找元素
function $id(id){
	return document.getElementById(id);
}

//动态创建元素
function create(ele){
	return document.createElement(ele);
}

//写一个函数 功能 获取任意区间值公式
function rand(min,max){
	return Math.round( Math.random()*(max-min) + min );
}

//获取六位十六进制颜色值
function getColor(){
	var str = "0123456789abcdef";
	var color = "#";
	//从str中随机的获取六位字符
	for( var i = 1 ; i <= 6 ; i++ ){
		color += str.charAt( rand(0,15) );
	}
	return color;
}

//自定义一个日期时间格式
function dateToString(now,sign){
	var sign =  sign || "-";//默认拼接符号是 - 
	var y = now.getFullYear();
	var m = now.getMonth()+1;
	var d = now.getDate();
	var h = toTwo( now.getHours() );
	var mi =toTwo( now.getMinutes() );
	var s =toTwo( now.getSeconds() );
	return y + sign + m + sign + d + " " + h + ":" + mi + ":" +s;
}
function toTwo(num){
	return num < 10 ? "0"+num : num;
}
//将字符串转成日期时间格式
function stringToDate(str){
	return new Date( str );
}

//时间差
function diff(start,end){
	//得到秒
	return (end.getTime() - start.getTime())/1000;
}


//碰撞函数
function pz(obj1,obj2){
	var R1 = obj1.offsetLeft + obj1.offsetWidth;
	var L1 = obj1.offsetLeft;
	var T1 = obj1.offsetTop;
	var B1 = obj1.offsetTop + obj1.offsetHeight;
	
	var R2 = obj2.offsetLeft + obj2.offsetWidth;
	var L2 = obj2.offsetLeft;
	var T2 = obj2.offsetTop;
	var B2 = obj2.offsetTop + obj2.offsetHeight;
	
	//碰不上条件   如果碰上了返回true  碰不上返回false
	if( R1<L2||L1>R2||B1<T2||T1>B2 ){//碰不上
		return false;
	}else {
		return true;
	}
}
