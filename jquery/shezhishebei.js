/*
* @Author: Marte
* @Date:   2017-11-21 16:37:19
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-27 17:36:06
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
                    enable: true,//是否为所有元素开启复选框
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
            {id:1, pId:0, name:"别克(已选中0家)",nocheck: true},
            {id:101, pId:1, name:"一区",nocheck: true},
            {id:102, pId:1, name:"二区",nocheck: true},
            {id:103, pId:1, name:"三区",nocheck: true},
            {id:104, pId:1, name:"四区",nocheck: true},
            {id:105, pId:1, name:"五区",nocheck: true},
            {id:106, pId:1, name:"六区",nocheck: true},
            {id:107, pId:1, name:"七区",nocheck: true},
            {id:108, pId:1, name:"八区",nocheck: true},
            {id:109, pId:1, name:"九区",nocheck: true},
            {id:110, pId:1, name:"十区",nocheck: true},
            {id:1011, pId:101, name:"苏州建通",nocheck: false},
            {id:1012, pId:101, name:"晋江泰达",nocheck: false},
            {id:1013, pId:101, name:"晋江泰达",nocheck: false},
            {id:1014, pId:101, name:"晋江泰达",nocheck: false},
            {id:1015, pId:101, name:"晋江泰达",nocheck: false},
            {id:1016, pId:101, name:"晋江泰达",nocheck: false},
            {id:1017, pId:101, name:"晋江泰达",nocheck: false},
            {id:1018, pId:101, name:"晋江泰达",nocheck: false},
            {id:1019, pId:101, name:"晋江泰达",nocheck: false},
            {id:10110, pId:101, name:"晋江泰达",nocheck: false},

             {id:1021, pId:102, name:"苏州建通",nocheck: false},
            {id:1022, pId:102, name:"晋江泰达",nocheck: false},
            {id:1023, pId:102, name:"晋江泰达",nocheck: false},
            {id:1024, pId:102, name:"晋江泰达",nocheck: false},
            {id:1025, pId:102, name:"晋江泰达",nocheck: false},
            {id:1026, pId:102, name:"晋江泰达",nocheck: false},
            {id:1027, pId:102, name:"晋江泰达",nocheck: false},
            {id:1028, pId:102, name:"晋江泰达",nocheck: false},
            {id:1029, pId:102, name:"晋江泰达",nocheck: false},
            {id:10210, pId:102, name:"晋江泰达",nocheck: false},



            {id:2, pId:0, name:"雪佛兰(已选中0家)",nocheck: true},/*open表示是否展开子元素，nocheck表示此元素是否有复选框*/
            {id:201, pId:2, name:"一区",nocheck: true},
            {id:202, pId:2, name:"二区",nocheck: true},
            {id:203, pId:2, name:"三区",nocheck: true},
            {id:204, pId:2, name:"四区",nocheck: true},
            {id:205, pId:2, name:"五区",nocheck: true},
            {id:206, pId:2, name:"六区",nocheck: true},
            {id:207, pId:2, name:"七区",nocheck: true},
            {id:208, pId:2, name:"八区",nocheck: true},
            {id:209, pId:2, name:"九区",nocheck: true},
            {id:210, pId:2, name:"十区",nocheck: true},

            {id:3, pId:0, name:"凯迪拉克(已选中0家)",nocheck: true},
            {id:301, pId:3, name:"一区",nocheck: true},
            {id:302, pId:3, name:"二区",nocheck: true},
            {id:303, pId:3, name:"三区",nocheck: true},
            {id:304, pId:3, name:"四区",nocheck: true},
            {id:305, pId:3, name:"五区",nocheck: true},
            {id:306, pId:3, name:"六区",nocheck: true},
            {id:307, pId:3, name:"七区",nocheck: true},
            {id:308, pId:3, name:"八区",nocheck: true},
            {id:309, pId:3, name:"九区",nocheck: true},
            {id:310, pId:3, name:"十区",nocheck: true},

            {id:4, pId:0, name:"车工坊(已选中0家)",nocheck: true},
            {id:401, pId:4, name:"一区",nocheck: true},
            {id:402, pId:4, name:"二区",nocheck: true},
            {id:403, pId:4, name:"三区",nocheck: true},
            {id:404, pId:4, name:"四区",nocheck: true},
            {id:405, pId:4, name:"五区",nocheck: true},
            {id:406, pId:4, name:"六区",nocheck: true},
            {id:407, pId:4, name:"七区",nocheck: true},
            {id:408, pId:4, name:"八区",nocheck: true},
            {id:409, pId:4, name:"九区",nocheck: true},
            {id:410, pId:4, name:"十区",nocheck: true},
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
