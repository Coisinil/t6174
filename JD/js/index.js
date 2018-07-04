/**
 * Created by 忆雪 on 2018/7/4.
 */
$(function () {
    $(".aa").click(function () {
        $(this).css("color","red");
        $(".bb").css("color","gray");
        $(".tipe-2").css({"positon":"relative","top":"28px"});
        $(".qrcode-main").show();
        $("#account").hide();
    });
    $(".bb").click(function () {
        $(this).css("color","red");
        $(".aa").css("color","gray");
        $(".tipe-2").css({"positon":"relative","top":"0"});
        $(".qrcode-main").hide();
        $("#account").show();
    });
    $(".login-1 a").hover(function () {
        $(this).css("color","red");
    },function () {
        $(this).css("color","gray");
    });
    $(".qrcode-main").mouseover(function () {
        $(".qrcode-img").stop().animate({"left":"10px"},300,function () {
            $(".qrcode-help").show();
        });
    }).mouseleave(function () {
        $(".qrcode-help").hide();
        $(".qrcode-img").stop().animate({"left":"60px"},300);
    });
});