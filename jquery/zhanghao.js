/*
* @Author: Marte
* @Date:   2017-11-29 13:43:27
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-30 10:29:05
*/

'use strict';
$(document).ready(function(){
  /*分页高亮效果*/
 $(".zh nav ul li a").click(function(event) {
   $(this).closest("li").addClass('active').siblings('li').removeClass('active');
 });

 /*删除部分逻辑*/
 $(".zh ul li .sc").click(function(event) {
  var that=this;
   var nr=$(this).closest("li").find("span").eq(1).html();
   $("#myModaljs .sc").html(" 确定删除["+nr+"]？");
  $("#myModaljs .modal-footer .btn-primary").click(function(event) {
   $(that).closest("span").closest("li").css('display', 'none');
 });

});

 $(".zh ul li .sc").click(function(event) {

   $(".zh .webrz").css('display', 'none').siblings('ul').css('display', 'block');
 });

/*web端和APP端切换效果*/
  $(".zh nav.lbnav ul li.webduan").click(function(event) {
   $(".zh .webrz").css('display', 'block').siblings('ul').css('display', 'none');
 });

  $(".zh nav.lbnav ul li.appduan").click(function(event) {
   $(".zh .webrz").css('display', 'none').siblings('ul').css('display', 'block');
 });




});