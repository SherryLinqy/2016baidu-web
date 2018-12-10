// var treeNode=["中国","江苏省","南京市","苏州市","徐州市"];
// window.onload = init("treeContent");
// function init(classname){
//    var wrapper_Cont = document.getElementsByClassName(classname)[0];
//    rendarTree(wrapper_Cont);
// }

// function rendarTree(elem){
//      var innerHTML = "";
//      for(var i = 0;i<treeNode.length;i++){
//          if(i==0){
//             innerHTML += `<div class="firstLevel"><div class="triangledown"></div>${treeNode[i]}</div>`;
//          }
//          else if(i==1){
//             innerHTML += `<div class="secondLevel"><div class="triangleright"></div>${treeNode[i]}</div>`;
//          }
//          else{
//             innerHTML += `<div class="thirdLevel"><div class="triangleright"></div>${treeNode[i]}</div>`;
//          }
        
//      }
//      elem.innerHTML = innerHTML;
// }

// function addEvent(){

// }

function treeNode(obj){
   this.parent = obj.parent;
   this.childs = obj.childs;
   this.data = obj.data;
   this.selfElem = obj.selfElem;
   this.selfElem.treeNode = this;
}

treeNode.prototype={
    render:function(arrow,visibility,toSearched,untoSearched){
        if(arrow){
            if(this.isLeaf()){
                this.selfElem.getElementsByClassName("arrow")[0].setAttribute("class","empty-arrow");
            }
            else if(this.isFold()){
                this.selfElem.getElementsByClassName("arrow")[0].className = "arrow right-arrow";

            }
            else{
                this.selfElem.getElementsByClassName("arrow")[0].className = "arrow down-arrow";
            }
        }
        if(visibility){
            if(this.selfElem.className.indexOf("contVisible") == -1){
                this.selfElem.className = this.selfElem.className.replace("Invisible","Visible");
            }
            else{
                this.selfElem.className = this.selfElem.className.replace("Visible","Invisible");
            }
        }
        
        if(toSearched){
            this.selfElem.getElementsByClassName("node_name")[0].className = "node_name traversed";
        }
        if(untoSearched){
            this.selfElem.getElementsByClassName("node_name")[0].className = "node_name";
        }
    },
    deleNode:function(){ 
        var parentNode = this.parent;
        parentNode.selfElem.removeChild(this.selfElem);  //删除DOM数中的节点
        //删除treeNode中的相应节点
        for(var i = 0;i<parentNode.childs.length;i++){
            if(parentNode.childs[i] == this){
                parentNode.childs.splice(i,1);   //splice 用于在数组中删除或添加相应元素
                break;
            }
        }
        if(parentNode.isLeaf()){
            parentNode.render(true,false);
        }
    },
    addNode:function(content){
        if(content){
            var parentNodeAdd = this.selfElem;
            var addElem = document.createElement("div");
            addElem.className = "contVisible";
            parentNodeAdd.appendChild(addElem);
            var arrow = document.createElement("div");
            arrow.className = "arrow empty-arrow";
            addElem.appendChild(arrow);
            var addElemContWrapper = document.createElement("span");
            addElemContWrapper.className = "node_name";
            var addElemCont = document.createTextNode(content);
            addElemContWrapper.appendChild(addElemCont);
            addElem.appendChild(addElemContWrapper);
            var addButt = document.createElement("img");
            addButt.className = "addButt";
            addButt.setAttribute("src","images/add.png");
            addElem.appendChild(addButt);
            var deleButt = document.createElement("img");
            deleButt.className = "deleButt";
            deleButt.setAttribute("src","images/delete.png");
            addElem.appendChild(deleButt);
            parentNodeAdd.appendChild(addElem);
            this.childs.push(new treeNode({parent:this,childs:[],data:content,selfElem: addElem}));
            this.render(true,false);
        }
    
        return this;
    },
    toggleFold:function(){
        if(this.isLeaf()){
            return this;
        }
        for(var i = 0;i<this.childs.length;i++){
            this.childs[i].render(false,true);
        }
        this.render(true,false);
        return this;
    },
    isLeaf:function(){
    if(this.childs.length == 0){
        return true;
    }
    else{return false;}

    },
    isFold:function(){
        if(this.isLeaf()){return true;}
        if(this.childs[0].selfElem.className.indexOf("contVisible") == -1 ){
            return true;  //折叠
        }
        else{
            return false;
        }
    }
  
};


//添加事件
//创建根节点 中国
var root = new treeNode({parent:null, childs:[],data:"中国",selfElem:document.getElementsByClassName("treeFirst")[0]});
root.selfElem.addEventListener("click",function(e){
    var e = event || window.event;
    var targetNode = e.target;
    while(targetNode.className.indexOf("contVisible") == -1)  targetNode = targetNode.parentNode;
        
    
    selectNode = targetNode.treeNode;       //将DOM对象转换成treeNode对象      为什么!!!targetNode是DOM结点，为什么可以zh
    if(e && e.target){
        //当点击节点或者箭头时进行展开或者收缩
        if(e.target.className.indexOf("node_name") != -1 || e.target.className.indexOf("arrow") != -1){
           selectNode.toggleFold();
        }
        else if(e.target.className == "addButt"){

            selectNode.addNode(prompt("请输入新添加节点："));
        }
        else if(e.target.className == "deleButt"){
            selectNode.deleNode();
        }
    }
});

root.search = function(text){
    var queue = [];
    var searchResult = [];
    var currentElem = this;
    queue.push(this);
    while(queue.length>0){
        currentElem = queue.shift();
        if(currentElem.data == text){
            searchResult.push(currentElem);
        }
        for(var i =0;i<currentElem.childs.length;i++){
            queue.push(currentElem.childs[i]);
        }
    }
    return searchResult;
}

var inputElem = document.getElementsByTagName("input");
inputElem[1].addEventListener("click",function(e){
    var e = event || window.event;
    if(e && e.target){
        if(inputElem[0].value){
            var searchCont = inputElem[0].value.trim();
        }
        var searchResult = root.search(searchCont);
        if(searchResult.length == 0){
            alert("未找到您搜索的内容！");
        }
        else{
            var pathNode;
            for(var i = 0;i<searchResult.length;i++){
                pathNode = searchResult[i];
                pathNode.render(false,false,true,false);   //将搜索到的内容标记出来
                while(pathNode.parentNode != null){
                    if(pathNode.selfElem.className == "contInvisible"){
                        pathNode.parentNode.toggleFold();
                    }
                    pathNode = pathNode.parentNode;
                }  
            }
        }
    }
})

root.addNode("北京").addNode("江苏").addNode("山东");
root.childs[0].addNode("朝阳区");
root.childs[1].addNode("南京市").addNode("徐州市");
root.childs[1].childs[0].addNode("鼓楼区");
root.childs[2].addNode("济南市");
    