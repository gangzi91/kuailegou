
                  /*header*/
$(".header_top_right li").mouseenter(function(){
	$(this).find(".a_1").css({"color":"#94193f","textDecoration":"underline"})
	$(this).find("div").css({"display":"block","zIndex":10})
});
$(".header_top_right li").mouseleave(function(){
	$(this).find(".a_1").css({"color":"#8c8c8c","textDecoration":"none"})
	$(this).find("div").css("display","none")
});
$(".klist a").mouseenter(function(){
	$(this).css({"color":"#94193f","textDecoration":"underline"})
});
$(".klist a").mouseleave(function(){
	$(this).css({"color":"#8c8c8c","textDecoration":"none"})
});
$(".header_top_right li").last().mouseenter(function(){
	$(this).css({"background-color":"#fff","border-left":"1px solid #dfdfdf","border-right":"1px solid #dfdfdf"})
});
$(".header_top_right li").last().mouseleave(function(){
	$(this).css({"background-color":"transparent","border":"none"})
});



                   /*nav*/

$(".n_c_L").mouseenter(function(){
	$(this).find("a").css("color","#94193f");
});
$(".n_c_L").mouseleave(function(){
	$(this).find("a").css("color","#303030");
});

$(".b_list li").mouseenter(function(){
	var index=$(this).index();
	$(this).css("background","#fff");
	$(this).find("i").css("backgroundPositionX",-80)
	$(this).find(".a1").css("color","#94193f");
	$(this).children('ul').css("display","block");
});
$(".b_list li").mouseleave(function(){
	var index=$(this).index();
	$(this).css("background","none");
	$(this).find("i").css("backgroundPositionX",0)
	$(this).find(".a1").css("color","black");
	$(this).children('ul').css("display","none");
});

$(".b_list li ul li").mouseenter(function(){
	$(this).find("a").addClass('pink');
	$(this).find("a b").addClass('pink');
});

$(".b_list li ul li").mouseleave(function(){
	$(this).find("a").removeClass('pink');
	$(this).find("a b").removeClass('pink');
});




                    /*banner*/


 var timer=null;
    var index=0;
    var $ulist=$(".banner_img li");
    var $olist=$(".banner_list li")
    timer=setInterval(autoPlay,2000);
    function autoPlay(){
        index++;
        if(index==$olist.size()){
           index=0; 
        }
        $olist.eq(index).addClass('current') .siblings().removeClass('current');
        $ulist.eq(index).fadeIn(1000).siblings().fadeOut(1000); 
    }
    $olist.mouseenter(function(){
        clearInterval(timer);
        index=$(this).index()-1;
        autoPlay();
        
    })
     $olist.mouseleave(function(){
        timer=setInterval(autoPlay,2000);
    })
                  /*     main    */

$(".main_1_menu li").click(function(){
	$(this).find("b").addClass('b_w').end().siblings().find("b").removeClass("b_w")
})

/*今日直播*/
// $(".main_1_content_u li").mouseenter(function(){
// 	$(this).find("a img").stop().animate({width: 200, height: 200,left:-10,top:-10});
// 	$(this).css("borderColor","#94193f").siblings().css("borderColor","#fff");
// 	$(this).find("p:not(:last)").css("textDecoration","underline").end().siblings().find("p:not(:last)").css("textDecoration","none");

// });
// $(".main_1_content_u li").mouseleave(function(){
// 	$(this).find("a img").stop().animate({width: 180, height: 180,left:0,top:0});
// 	$(".main_1_content_u li").css("borderColor","#fff");
// 	$(this).find("p:not(:last)").css("textDecoration","none");

// });

// $(".main_1_content").on("mouseenter",function(){$(".m_btm").css("display","block")
// }).on("mouseleave",function(){$(".m_btm").css("display","none")})

$(".main_2_title li").mouseenter(function(){
	$(this).addClass("on").siblings().removeClass("on")
})

$(".main_2_content_u li").mouseenter(function(){
	$(this).find("a img").css("opacity",0.5);
});
$(".main_2_content_u li").mouseleave(function(){
	$(this).find("a img").css("opacity",1);
});

$(".main_2_content").on("mouseenter",function(){$(".m2_btm").css("display","block")
}).on("mouseleave",function(){$(".m2_btm").css("display","none")})



$(".main_3_content_u li").mouseenter(function(){
	$(this).find("a img").stop().animate({width: 200, height: 200,left:-10,top:-10});
	$(this).css("borderColor","#94193f").siblings().css("borderColor","#fff");
	$(this).find("p:not(:last)").css("textDecoration","underline").end().siblings().find("p:not(:last)").css("textDecoration","none");
});
$(".main_3_content_u li").mouseleave(function(){
	$(this).find("a img").stop().animate({width: 180, height: 180,left:0,top:0});
	$(".main_3_content_u li").css("borderColor","#fff");
	$(this).find("p:not(:last)").css("textDecoration","none");
});

function fn(m, n,s){

	m.mouseenter(function () {
		$(this).addClass("on").siblings().removeClass("on");
		n.eq($(this).index()).show().siblings().hide();
	})
	s.mouseenter(function () {
		$(this).addClass("b_c").siblings().removeClass("b_c");
	}).mouseleave(function () {
		$(this).removeClass("b_c");
	})

}
fn($(".main_5_title li"), $(".main_5_content_u"), $(".main_5_content_u li"));
fn($(".main_6_title li"), $(".main_6_content_u"), $(".main_6_content_u li"));
fn($(".main_7_title li"), $(".main_7_content_u"), $(".main_7_content_u li"));
fn($(".main_8_title li"), $(".main_8_content_u"), $(".main_8_content_u li"));
fn($(".main_9_title li"), $(".main_9_content_u"), $(".main_9_content_u li"))



// ajax请求

window.onload = function () {
	$.ajax({
		type:"get",
		url: "json/main1.json?id=" + new Date().getTime(),
		success:function(json){
			
			var cons="";
			for (var i = 0; i < json["classify001"].list.length;i++){
				var pro = json["classify001"].list[i];
				cons +=`<li>
								<a href="" class="p_1">
									<img src="main_1_img/${pro.src}" alt="">
								</a>
								<p>${pro.title}</p>
								<p>
									<a href="" style="display:inline">${pro.intro}</a>
								</p>
								<p class ="price">
									<span class="s1">¥</span>
									<span class="s2">${pro.price}</span>
									<del class="s3">${pro.del}</del>
								</p>	
							</li>`
			}

			






			$(".main_1_content_u").html(cons);
			$(".main_1_content_u li").mouseenter(function () {
				$(this).find("a img").stop().animate({ width: 200, height: 200, left: -10, top: -10 });
				$(this).css("borderColor", "#94193f").siblings().css("borderColor", "#fff");
				$(this).find("p:not(:last)").css("textDecoration", "underline").end().siblings().find("p:not(:last)").css("textDecoration", "none");

			});
			$(".main_1_content_u li").mouseleave(function () {
				$(this).find("a img").stop().animate({ width: 180, height: 180, left: 0, top: 0 });
				$(".main_1_content_u li").css("borderColor", "#fff");
				$(this).find("p:not(:last)").css("textDecoration", "none");

			});

			$(".main_1_content").on("mouseenter", function () {
				$(".m_btm").css("display", "block")
			}).on("mouseleave", function () { $(".m_btm").css("display", "none") })
		}
	})
}






















$(".slider_bottom_3").click(function(){	
	$("body,html").animate({scrollTop : 0},1500);
})


$(window).scroll(function(){
	
		var stop=$(document).scrollTop;
		if(stop>=540){
			// $(".search_fixed").animate({"height":"52px"},1000)
			$(".search_fixed").show();
		}else{
			// $(".search_fixed").animate({"height":0},1000)
			$(".search_fixed").hide();
		}
	}
)
window.onscroll=function(){
	var stop=document.documentElement.scrollTop;
	if(stop>=540){
		$(".search_fixed").show();
	}else{
		$(".search_fixed").hide();
	}
	if(stop>=1000){
		$(".LoutiNav").show();
	}else{
		$(".LoutiNav").hide();
	}
}