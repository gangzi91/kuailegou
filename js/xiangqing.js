

$(".ol_content li").mouseover(function () {
    var index = $(this).index();
    $(".small_pic img").eq(index).show().siblings("img").hide();
    $(".big_content img").eq(index).show().siblings().hide();

})

$(".small_pic").on({
    "mouseover": function () {
        $(".big_content").show();
        $(".mask").show();
     
    },
    "mouseout": function () {
        $(".big_content").hide();
        $(".mask").hide();
      
    },
    "mousemove": function (evt) {
        var e = evt || event;
        var x = e.pageX - $(".small_pic").offset().left - $(".mask").width() / 2;
        var y = e.pageY - $(".small_pic").offset().top - $(".mask").height() / 2;

        var mx = $(".small_pic").width() - $(".mask").width();
        var my = $(".small_pic").height() - $(".mask").height();

        //边界处理
        x = x <= 0 ? 0 : x >= mx ? mx : x;
        y = y <= 0 ? 0 : y >= my ? my : y;

        //大图宽度/小图宽度 = 大图偏移 / mask的偏移
        var bigImageX = -x * $(".big_img").width() / $(".small_pic").width();
        var bigImageY = -y * $(".big_img").height() / $(".small_pic").height();
        $(".mask").css({
            "left": x + "px",
            "top": y + "px",
        })

        $(".big_img").css({
            "left": bigImageX + "px",
            "top": bigImageY + "px"
        })
    }
})