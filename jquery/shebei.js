/*
* @Author: Marte
* @Date:   2017-11-27 10:08:08
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-28 13:51:14
*/

'use strict';
$(document).ready(function(){
  $(".sbei .sbeitop form .cx").click(function(event) {
    if($(".sbei .sbeitop form input").eq(0).val()!=""){
      $(".sbei .sbeinr ul").eq(0).css('display', 'block');
      $(".sbei .sbeinr ul").eq(2).css('display', 'none');
    }else if($(".sbei .sbeitop form input").eq(1).val()!=""){
      console.log($(".sbei .sbeitop form input").eq(1).val());
     $(".sbei .sbeinr ul").eq(2).css('display', 'block');
     $(".sbei .sbeinr ul").eq(0).css('display', 'none');
   }else{
      $(".sbei .sbeinr ul").eq(0).css('display', 'block');
      $(".sbei .sbeinr ul").eq(2).css('display', 'none');
   }
 });

  /*分页高亮效果*/
  $(".sbei nav ul li").click(function(event) {
   $(this).addClass('active').siblings('li').removeClass('active');
 });

});

