/*
* @Author: Marte
* @Date:   2017-11-28 13:51:29
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-30 10:56:50
*/

'use strict';
$(document).ready(function(){
  /*分页高亮效果*/
  $(".mf nav ul li a").click(function(event) {
   $(this).closest("li").addClass('active').siblings('li').removeClass('active');
 });

  $(".mf .mftop form .rw").click(function(event) {
      $(".mf  .mfnr ul").eq(1).css('display', 'block');
      $(".mf  .mfnr ul").eq(0).css('display', 'none');
 });
 $(".mf .mftop form .jh").click(function(event) {
      $(".mf  .mfnr ul").eq(0).css('display', 'block');
      $(".mf  .mfnr ul").eq(1).css('display', 'none');
 });
 console.log(window.location.href.split("=")[1]);/*获取当前页面的http地址*/
 var rw=window.location.href.split("=")[1];
 if(rw==1){
    $(".mf  .mfnr ul").eq(1).css('display', 'block');
      $(".mf  .mfnr ul").eq(0).css('display', 'none');
 }

 /*删除部分逻辑*/
 $(".mf ul li .sc").click(function(event) {
  var nr=$(this).closest("li").find("span").eq(1).html();
  var that=this;
  $("#myModaljs .sc").html(" 确定删除["+nr+"]？");
  $("#myModaljs .modal-footer .btn-primary").click(function(event) {
   $(that).closest("span").closest("li").css('display', 'none');
 });

});

});