/*
* @Author: Marte
* @Date:   2017-11-13 15:57:15
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-01 15:56:37
*/

'use strict';

$(document).ready(function($) {
    //首页的jquery
    //给选中元素添加高亮
    $(".shouyeleft .list-group a").click(function(e){
        $(this).addClass('active').siblings('a').removeClass("active");
    });
    /*$(".one").click(function(e){
         $(this).closest('.container').find(".shouyeleft .list-group a").eq(0).addClass('active').siblings('a').removeClass("active");
    });
     $(".two").click(function(e){
         $(this).closest('.container').find(".shouyeleft .list-group a").eq(1).addClass('active').siblings('a').removeClass("active");
    });
     $(".bjjs").click(function(e){
         $(this).closest('.container').find(".shouyeleft .list-group a").eq(2).addClass('active').siblings('a').removeClass("active");
    });
      $(".three").click(function(e){
         $(this).closest('.container').find(".shouyeleft .list-group a").eq(2).addClass('active').siblings('a').removeClass("active");
    });
       $(".md").click(function(e){
         $(this).closest('.container').find(".shouyeleft .list-group a").eq(3).addClass('active').siblings('a').removeClass("active");
    });
        $(".sbei").click(function(e){
         $(this).closest('.container').find(".shouyeleft .list-group a").eq(4).addClass('active').siblings('a').removeClass("active");
    });
         $(".sbgl").click(function(e){
         $(this).closest('.container').find(".shouyeleft .list-group a").eq(4).addClass('active').siblings('a').removeClass("active");
    });
          $(".seven").click(function(e){
         $(this).closest('.container').find(".shouyeleft .list-group a").eq(6).addClass('active').siblings('a').removeClass("active");
    });
           $(".eight").click(function(e){
         $(this).closest('.container').find(".shouyeleft .list-group a").eq(7).addClass('active').siblings('a').removeClass("active");
    });
           $(".eight02").click(function(e){
         $(this).closest('.container').find(".shouyeleft .list-group a").eq(7).addClass('active').siblings('a').removeClass("active");
    });
            $(".bd").click(function(e){
         $(this).closest('.container').find(".shouyeleft .list-group a").eq(7).addClass('active').siblings('a').removeClass("active");
    });
             $(".grzx").click(function(e){
         $(this).closest('.container').find(".shouyeleft .list-group a").eq(7).addClass('active').siblings('a').removeClass("active");
    });
             $(".mf").click(function(e){
         $(this).closest('.container').find(".shouyeleft .list-group a").eq(5).addClass('active').siblings('a').removeClass("active");
    });
            $(".zh").click(function(e){
         $(this).closest('.container').find(".shouyeleft .list-group a").eq(8).addClass('active').siblings('a').removeClass("active");
    });*/


/*使侧边栏高度等于窗口加滚动条高度*/
/*var h=$(document).height();
  $(".shouyeleft").css({"height":h});*/


    //通过tooggleClass方法给body元素添加xsyc类名，
    //在css样式表中改变相关元素样式，实现显示或隐藏侧边栏
    $(".shouyetop .sytleft").click(function(e){
        $("body").toggleClass("xsyc");
    });
//个人信息页的显示与隐藏
$(".sytright a").hover(function(e){
    var UL= $(".geren");
    if (UL.css("display")=="none") {
        $(".geren").css('display', 'block');
    }
});
$(".geren ").mouseleave(function(e){
    var UL= $(".geren");
    if (UL.css("display")=="block") {
        $(".geren").css('display', 'none');
    }
});

// 权限管理的jquery
$(".quanxian .daohang ul li").click(function(e){
    $(this).addClass('active').siblings('li').removeClass('active');
});
//控制开关按钮滑动的jquery
var div2=$(".div2");
var div1=$(".div1");
$(div1).click(function(e){
//小开关控制逻辑
if($(this).find(".div2").hasClass("close2")){
  $(this).find(".div2").removeClass('close2');
  $(this).find(".div2").addClass('open2');
}else{
 $(this).find(".div2").removeClass('open2');
 $(this).find(".div2").addClass('close2');
};
   //大开关控制逻辑
   if($(this).hasClass("close1")){
     $(this).removeClass('close1');
     $(this).addClass('open1');
 }else{
     $(this).removeClass('open1');
     $(this).addClass('close1');
 };
});

/*app管理菜单切换效果*/
$(".daohang .qx").click(function(e){
    $(".xiangqing .qx").show().siblings('ul').hide();
});
$(".daohang .yj").click(function(e){
    console.log("aaa");
    $(".xiangqing .yj").show().siblings('ul').hide();
});

$(".daohang .bb").click(function(e){
    console.log("aaa");
    $(".xiangqing .bb").show().siblings('ul').hide();
});

});




