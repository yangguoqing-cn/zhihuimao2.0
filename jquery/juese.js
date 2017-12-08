/*
* @Author: Marte
* @Date:   2017-11-22 09:37:35
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-06 17:17:39
*/

'use strict';

$(document).ready(function($) {
//角色管理部分jquery
$(".logo .jskj .jibie>li .jbnr ul li").mouseenter(function(e) {
    console.log("enter");
    $(this).find(".bj").css("display","block").end().find(".sc").css("display","block").end().find("div").eq(0).css({'background-color':'#33add6'}).end().end().find("div").eq(1).css({'background-color':'#169bd5'}).end().find("span").css({"color":"white"});
});
$(".logo .jskj .jibie>li .jbnr ul li").mouseleave(function(e) {
    console.log("leave");
  $(this).find(".bj").css("display","none").end().find(".sc").css("display","none").end().css({'background-color':'#f1f2f3'}).find("span:eq(0)").css({"color":"#333"}).end().find("span:eq(1)").css({"color":"#bbb"}).end().find("div").eq(0).css({'background-color':'#f1f2f3'}).end().end().find("div").eq(1).css({'background-color':'#f1f2f3'}).end().end().parent("ul").find('li:last').css({'background-color':' #e4e4e4'});
});

$(".logo .jskj .jibie>li .jbnr ul li .sc").click(function(event) {
  var nr=$(this).closest("li").find("span:first").html();
  var yh=$(this).closest("li").find("span").eq(1).html();
  var yhs=yh.split(":")[1];
  var that=this;
    //console.log(nr);
    console.log(yhs);
    $("#myModaljs .sc").html(" 确定删除["+nr+"]？");

    $("#myModaljs .modal-footer .btn-primary").click(function(event) {
        $('#myModaljs').modal('hide');//点击确定按钮关闭模态框
        if(yhs>0){
         /* $('#myModaljs02').modal("show");*/
         $("#myModaljs02 h4").html("提示");
         $("#myModaljs02 .ts").html("["+nr+"]"+"有"+yhs+"个用户，暂不支持删除");

       }
       if(yhs==0){
        /*$('#myModaljs02').modal("");*/
        $(that).closest("li").css('display', 'none');
        $("#myModaljs02 h4").html("提示");
        $("#myModaljs02 .ts").html("删除成功");
      }
    });

  });

});
