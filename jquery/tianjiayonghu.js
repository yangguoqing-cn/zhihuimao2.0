/*
* @Author: Marte
* @Date:   2017-11-21 16:37:19
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-29 16:06:51
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

            var zNodes=[
            {id:1, pId:0, name:"全选",open:true,nocheck: false},
            {id:101, pId:1, name:"江苏建通"},
            {id:102, pId:1, name:"江苏建通"},
            {id:103, pId:1, name:"江苏建通"},
            {id:104, pId:1, name:"江苏建通"},
            {id:105, pId:1, name:"江苏建通"},
            {id:106, pId:1, name:"江苏建通"},
            {id:107, pId:1, name:"江苏建通"},
            {id:108, pId:1, name:"江苏建通"},
            {id:109, pId:1, name:"江苏建通"},
            {id:110, pId:1, name:"江苏建通"},
            ];

  var zNodes02 =[
            {id:1, pId:0, name:"别克(已选中0家)",nocheck: true},
            {id:101, pId:1, name:"一区"},
            {id:102, pId:1, name:"二区"},
            {id:103, pId:1, name:"三区"},
            {id:104, pId:1, name:"四区"},
            {id:105, pId:1, name:"五区"},
            {id:106, pId:1, name:"六区"},
            {id:107, pId:1, name:"七区"},
            {id:108, pId:1, name:"八区"},
            {id:109, pId:1, name:"九区"},
            {id:110, pId:1, name:"十区"},

            {id:2, pId:0, name:"雪佛兰(已选中0家)",nocheck: true},/*open表示是否展开子元素，nocheck表示此元素是否有复选框*/
            {id:201, pId:2, name:"一区"},
            {id:202, pId:2, name:"二区"},
            {id:203, pId:2, name:"三区"},
            {id:204, pId:2, name:"四区"},
            {id:205, pId:2, name:"五区"},
            {id:206, pId:2, name:"六区"},
            {id:207, pId:2, name:"七区"},
            {id:208, pId:2, name:"八区"},
            {id:209, pId:2, name:"九区"},
            {id:210, pId:2, name:"十区"},

            {id:3, pId:0, name:"凯迪拉克(已选中0家)",nocheck: true},
            {id:301, pId:3, name:"一区"},
            {id:302, pId:3, name:"二区"},
            {id:303, pId:3, name:"三区"},
            {id:304, pId:3, name:"四区"},
            {id:305, pId:3, name:"五区"},
            {id:306, pId:3, name:"六区"},
            {id:307, pId:3, name:"七区"},
            {id:308, pId:3, name:"八区"},
            {id:309, pId:3, name:"九区"},
            {id:310, pId:3, name:"十区"},

            {id:4, pId:0, name:"车工坊(已选中0家)",nocheck: true},
            {id:401, pId:4, name:"一区"},
            {id:402, pId:4, name:"二区"},
            {id:403, pId:4, name:"三区"},
            {id:404, pId:4, name:"四区"},
            {id:405, pId:4, name:"五区"},
            {id:406, pId:4, name:"六区"},
            {id:407, pId:4, name:"七区"},
            {id:408, pId:4, name:"八区"},
            {id:409, pId:4, name:"九区"},
            {id:410, pId:4, name:"十区"},
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
       $.fn.zTree.init($("#treeDemo02"), setting, zNodes02);
});


function checkedHandler(checkbox){
            var $checkbox = $(checkbox),
               treeNode = $checkbox.data("treeNode"),
               state = checkbox.checked;

               if(treeNode.isLeaf){ //子节点
                   if(state){ //子节点选中，父节点要跟着选中，子节点取消选择，父节点不用级联
                       setParentNodeChecked(checkbox);
                   }
               }else{ //父节点
                   if(state){ //选中，级联子节点，级联父节点
                        setParentNodeChecked(checkbox);
                        setChildNodeChecked(checkbox);
                   }else{
                        setChildNodeChecked(checkbox);
                   }

               }

        };

        /**设置父节点选中 */
        function setParentNodeChecked(checkbox){
            var $pNode =  $(checkbox).closest("ul").parent();
            var pCheckbox = $pNode.find(".checkboxBtn").get(0);
            var treeNode = $(pCheckbox).data("treeNode");
            if(pCheckbox.checked === checkbox.checked) return;if(treeNode.pId != "0"){
　　　　　　　　　　pCheckbox.checked = checkbox;
　　　　　　　　 setParentNodeChecked(pCheckbox);
　　　　　　}

        };

        /**设置子节点选中 */
        function setChildNodeChecked(checkbox){

            $(checkbox).closest("li").find(".checkboxBtn").each(function(){
                this.checked = checkbox.checked;
            });
        };

        function addDiyDom(treeId, treeNode) {
            //console.log(treeNode);
            var aObj = $("#" + treeNode.tId + IDMark_A);
            var editStr = $("<input type='checkbox' class='checkboxBtn' id='checkbox_" +treeNode.id+ "' onclick='checkedHandler(this)' ></input>");
            editStr.data("treeNode",treeNode);
            aObj.before(editStr);

        };