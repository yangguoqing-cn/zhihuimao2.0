/*
* @Author: Marte
* @Date:   2017-12-05 08:59:54
* @Last Modified by:   Marte
* @Last Modified time: 2017-12-06 14:57:53
*/

'use strict';
$(document).ready(function ($) {

    /*添加事件部分*/
    $(document).on("click", ".logo .kjnr .you li .add a img", function (event) {/*绑定事件这么写才能使新添加的元素也可以被绑定*/
        var that = this;
        var index = $(that).closest(".list-group-item").index();
        $(".input-group-addon").html("级别" + (index + 2));
        $("#myModal .modal-footer .btn-primary").off("click");
        /*取消之前的模态框绑定事件，这一步十分重要，花了我半天才解决。*/
        $("#myModal .modal-footer .btn-primary").click(function (event) {
            var jibie = $(".logo .zuo li").eq(index).find("span").eq(0).html().split("别")[1];
            var lileft = $(".logo .kjnr .zuo li");
            var liright = $(".logo .kjnr .you li");
            if (jibie == lileft.length - 1) {
                liright.eq(index).html('<div class="nr"><a><img alt="" src="images/arrow-down.png"/></a><a><img alt="" class="s" src="images/arrow-down.png"/></a><a><img alt="" data-target="#myModal02" data-toggle="modal" src="images/edit.png"/></a><a><img alt="" data-target="#myModal03" data-toggle="modal" src="images/delete.png"/></a></div><div class="add"><a><img alt="" data-target="#myModal" data-toggle="modal" src="images/add_01.png"/></a></div>');
                /*字符串拼接时不能有空格，不然会报错*/
                liright.eq(index).after('<li class="list-group-item"> <div class="nr b"><a><img alt="" class="s" src="images/arrow-down.png"/></a><a><img alt="" data-target="#myModal02" data-toggle="modal" src="images/edit.png"/></a><a><img alt="" data-target="#myModal03" data-toggle="modal" src="images/delete.png"/></a></div><div class="add"><a><img alt="" data-target="#myModal" data-toggle="modal" src="images/add_01.png"/></a></div></li>');

            } else {
                liright.eq(index).after('<li class="list-group-item"> <div class="nr"><a><img alt="" src="images/arrow-down.png"/></a><a><img alt="" class="s" src="images/arrow-down.png"/></a><a><img alt="" data-target="#myModal02" data-toggle="modal" src="images/edit.png"/></a><a><img alt="" data-target="#myModal03" data-toggle="modal" src="images/delete.png"/></a></div><div class="add"><a><img alt="" data-target="#myModal" data-toggle="modal" src="images/add_01.png"/></a></div></li>');
            }
            lileft.eq(index).after('<li class="list-group-item"><span></span><span></span></li>');
            var valuebj = $("#myModal .input-group .form-control").val();
            var text = $(".logo .kjnr .zuo li").eq(index + 1).find("span").eq(1);
            if (valuebj != "") {
                text.html(valuebj);
                /*使新增的li节点元素级别名称为模态框的值，不然默认为管理员级别*/
                $("#myModal .input-group .form-control").val("");
                /*使模态框的值初始化，不然下一次打开模态框上一次的值还会保留*/
            } else {
                text.html("管理员级别" + (index + 2));
            }

            for (var i = index + 2; i < lileft.length; i++) {
                $(".logo .kjnr .zuo li").eq(i - 1).find("span").eq(0).html($(".logo .kjnr .zuo li").eq(i).find("span").eq(0).html());
                /*使添加的li后面的元素级别名称改变，且上一个名称名变成下一个名称名，如级别3变成级别4，以此类推*/
            }
            $(".logo .kjnr .zuo li").eq(lileft.length - 1).find("span").eq(0).html("级别" + lileft.length);
            /*使倒数第二个li元素的名称名增加一*/

            $("#myModal").modal("hide");
        });
    });

    /*删除事件部分*/
    $(document).on("click", ".you li .nr a:last-child img", function (event) {
        var that = this;
        var index = $(that).closest(".list-group-item").index();
        console.log(index);
        var jibie = $(".logo .kjnr .zuo li").eq(index).find('span').eq(0).html();
        $(" #myModal03 .modal-body .input-group").html("确定删除[" + jibie + "]?");

        $(" #myModal03 .modal-footer .btn-primary").unbind();
        $(" #myModal03 .modal-footer .btn-primary").click(function (event) {

            $(".logo .kjnr .zuo li").eq(index).css({"display": "none"});
            $("#myModal03").modal("hide");
            $(that).closest(".list-group-item").css({"display": "none"});
        });
    });

    /*编辑事件部分*/
    $(document).on("click",".you li .nr a:nth-last-child(2) img", function (event) {
        var that = this;
        var index = $(that).closest(".list-group-item").index();
        console.log(index);
        $(".input-group-addon").html("级别" + (index + 1));
        $("#myModal02 .modal-footer .btn-primary").off("click");
        /*取消之前的模态框绑定事件，这一步十分重要，花了我一上午才解决。*/
        $("#myModal02 .modal-footer .btn-primary").click(function (event) {
            $("#myModal02").modal("hide");
            var value = $("#myModal02 .input-group .form-control").val();
            if (value != "") {
                var text = $(".logo .kjnr .zuo li").eq(index).find("span").eq(1);
                text.html(value);
                $("#myModal02 .input-group .form-control").val("");
                /*使模态框的值初始化，不然下一次打开模态框上一次的值还会保留*/
            }
        });
    });

    /*级别上移部分*/
    $(document).on("click", ".you li .nr .s", function (event) {
        var that = this;
        var index = $(that).closest(".list-group-item").index();
        if (index != 0) {   /* 只要【下标值】不是0，都可以上移*/
            $(".logo .kjnr .zuo li").eq(index).prev().before($(".logo .kjnr .zuo li").eq(index));
        }
    });

    /*级别下移部分*/
    $(document).on("click", ".you li .nr a:nth-child(1)", function (event) {
        var that = this;
        var index = $(that).closest(".list-group-item").index();
        var length = $(".logo .kjnr .zuo li").length;
        if (index != length - 1 && index != length - 2) {  /* 只要【下标值】不是最后一个都可以下移*/
            $(".logo .kjnr .zuo li").eq(index).next().after($(".logo .kjnr .zuo li").eq(index));
        }
    });

});