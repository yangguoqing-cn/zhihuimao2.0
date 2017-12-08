/*
* @Author: Marte
* @Date:   2017-11-27 10:08:08
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-30 10:22:48
*/

'use strict';
$(document).ready(function(){

/*批量导入提示部分*/
$("form #daoru").click(function(event) {
    var val=$("form #wenjian").val();
   console.log("val",val);
        if(val==""){
         /* $('#myModaljs02').modal("show");*/
         $("#myModaljs02 .ts").html("导入失败，本次操作将回滚到第一条！");

       }
       if(val!=""){
        $("#myModaljs02 .ts").html("导入成功");
      }
    });

});

