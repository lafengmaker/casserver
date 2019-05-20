$(function() {
    var picnum=Math.floor(Math.random()*5+1);
    $("#bgimg").attr("src","./images/0"+picnum+".jpg")

    carousel()
    clickLink();

    $(".forminput input").off("focus").on('focus', function(event) {
        event.preventDefault();
        if($(this).prev("label").find('img').attr("src") == "/images/Key.png"){
            $(this).prev("label").find('img').attr("src","/images/Key_on.png");
        }else if($(this).prev("label").find('img').attr("src") == "/images/tell.png"){
            $(this).prev("label").find('img').attr("src","/images/tell_on.png");
        }
        $(this).parent(".forminput").css({
            "border":"1px #0099E6 solid"
        });
    });
    $(".forminput input").off("blur").on('blur', function(event) {
        event.preventDefault();
        if($(this).prev("label").find('img').attr("src") == "/images/Key_on.png"){
            $(this).prev("label").find('img').attr("src","/images/Key.png");
        }else if($(this).prev("label").find('img').attr("src") == "/images/tell_on.png"){
            $(this).prev("label").find('img').attr("src","/images/tell.png");
        }
        $(this).parent(".forminput").css({
            "border":"1px #fff solid"
        });
    });

    if(top.location!=self.location){
        var url = decodeURIComponent(self.location.href);
        var us = url.split("/view/");
        if(us.length>1){
            top.location = us[0]+"/view/main.html"
        }
        var us1 = url.split("/page/");
        if(us1.length>1){
            top.location = us1[0]+"/page/main.html"
        }
    }
})

$(function (argument) {
    function login() {
        $('#pwdForm').submit();
    }
    $('input').on('focus', function () {
        $(this).parent().addClass('on');
    });
    $('input').on('blur', function () {
        if ($(this).val() == '') {
            $(this).parent().removeClass('on');
        }
    });
    $('.submit').on('click', function () {
        login();
    });
    $('.login_btn').on('click', function () {
        login();
    });
    $('input').on('keydown', function () {
        if (event.keyCode == 13) {
            login();
        }
    });
});

//banner图片轮播
function carousel(){
    var number=$(".banner ul li").size()-1;//图片的数量
    var cur=0;//当前显示的图片
    var timer=0;//定时器

    //下一个
    function slideNext(){
        if(cur<number){
            $(".banner ul li").eq(cur).css({'z-index':10}).stop().fadeOut();
            $(".banner ul li").eq(cur+1).css({'z-index':20}).stop().fadeIn();
            $(".indicator span").removeClass("cur").eq(cur+1).addClass("cur");
            cur+=1;
        }else{
            $(".banner ul li").eq(cur).css({'z-index':10}).stop().fadeOut();
            $(".banner ul li").eq(0).css({'z-index':20}).stop().fadeIn();
            $(".indicator span").removeClass("cur").eq(0).addClass("cur");
            cur=0;
        }
    }

    //设置定时器
    timer=setInterval(slideNext,4000);
    //当鼠标移入banner时，清除定时器
    $(".banner").mouseover(function(){
        clearInterval(timer);
    });
    $(".banner").mouseout(function(){
        timer=setInterval(slideNext,4000);
    });

    //小圆点指示器
    $(".indicator>span").mouseover(function(){
        var now=$(this).index();//获取鼠标移入的是第几个span标记
        $(".indicator>span").removeClass("cur");//删除span标记中的class=cur
        $(this).addClass("cur");//为此span标记添加cur样式
        $(".banner ul li").eq(cur).css({'z-index':10}).stop().fadeOut();//隐藏当前的图片
        $(".banner ul li").eq(now).css({'z-index':20}).stop().fadeIn();//显示和span序列号一样的图片
        cur=now;//为变量cur重新赋值，以便于再次启用定时器的时候，从当前显示的图片开始播放
    });
}
//banner图片轮播结束

function clickLink() {
    $(document).on('click','.canClick',function() {
        $('.dialog2').addClass('dialog_show');
        $('.dialog1').addClass('dialog_show');
        setTimeout(function() {
            $('.dialog2').removeClass('dialog_show');
            $('.dialog1').removeClass('dialog_show');
            $('.login_name input').focus()
        },1500)
    })
}
function on_return(){/*按回车键 登入*/
    if(window.event.keyCode == 13){
        if (document.all('btnsubmit')!=null){
            document.all('btnsubmit').click();
        }
    }
}
