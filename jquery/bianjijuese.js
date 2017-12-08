/*
* @Author: Marte
* @Date:   2017-11-21 16:37:19
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-22 15:07:22
*/

'use strict';
var setting = {
    view: {
        dblClickExpand: false,
                    showLine: false,//取消线条
                    showIcon : false,//取消文件图像
                    selectedMulti: false//禁止多点选中
                },
                check: {
                    enable: true,
                    nocheckInherit: false
                },

                data: {
                    simpleData: {
                        enable:true,
                        idKey: "id",
                        pIdKey: "pId",
                        rootPId: ""
                    }
                },
                callback: {
                    onClick: function(treeId, treeNode) {
                        var treeObj = $.fn.zTree.getZTreeObj(treeNode);
                        var selectedNode = treeObj.getSelectedNodes()[0];
                        $("#txtId").val(selectedNode.id);
                        $("#txtAddress").val(selectedNode.name);
                    }
                }
            };
            var zNodes =[
            {id:1, pId:0, name:"APP权限",nocheck: true},
            {id:101, pId:1, name:"权限管理"},
            {id:102, pId:1, name:"级别管理"},
            {id:103, pId:1, name:"角色管理"},
            {id:104, pId:1, name:"账号管理"},
            {id:105, pId:1, name:"门店管理"},
            {id:106, pId:1, name:"设备管理"},
            {id:107, pId:1, name:"明访管理"},
            {id:108, pId:1, name:"APP管理"},
            {id:109, pId:1, name:"个人中心"},
            {id:110, pId:1, name:"系统管理"},

            {id:2, pId:0, name:"Web端权限", open:true, nocheck: true},/*open表示是否展开子元素，nocheck表示是否有复选框*/
            {id:201, pId:2, name:"权限管理"},
            {id:202, pId:2, name:"级别管理"},
            {id:203, pId:2, name:"角色管理"},
            {id:204, pId:2, name:"账号管理"},
            {id:205, pId:2, name:"门店管理"},
            {id:206, pId:2, name:"设备管理"},
            {id:207, pId:2, name:"明访管理"},
            {id:208, pId:2, name:"APP管理"},
            {id:209, pId:2, name:"个人中心"},
            {id:210, pId:2, name:"系统管理"}
            ];

//过滤节点的机制 直接return node表示不做任何过滤

function filter(node) {

    return node;

}



///动态设置zTree的所有节点有checkbox
function DynamicUpdateNodeCheck() {
    var zTree = $.fn.zTree.getZTreeObj("treeDemo");

//根据过滤机制获得zTree的所有节点
var nodes = zTree.getNodesByFilter(filter);

//遍历每一个节点然后动态更新nocheck属性值
for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
node.nocheck = false; //表示显示checkbox
zTree.updateNode(node);
}
}
$(document).ready(function(){
    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
});