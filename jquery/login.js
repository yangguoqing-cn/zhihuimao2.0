
'use strict';
$(document).ready(function($) {
  $("#wrapper :button").click(function(){
   var username =$('#username').val();
   var password = $('#password').val();
   console.log("aaa",username,password);

       // 用户名和密码都不为空
       if(username=="admin"&&password=="admin"){
        console.log("bbb");
        window.location.href = "index.html";
        localStorage.username = username;
      }
    });
});
