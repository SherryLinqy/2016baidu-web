var lockedDiv;
var nodeList=[];
var searchText;
function addEvent(){
    var wrapperList = searchDiv("wrapper");
    wrapperList[0].addEventListener("click",function(e){
        var e = event||window.event;
        for(var i = 0;i<wrapperList.length;i++){
            wrapperList[i].setAttribute("class","wrapper");
        }
        var that = e.target;
        that.setAttribute("class","wrapper chanCol");
        e.stopPropagation();
            lockedDiv =  that;    //将点击的节点赋给全局变量lockDiv
    })
    // for(var i=0;i<wrapperList.length;i++){
    //     wrapperList[i].addEventListener("click",function(e){
    //         var e = event||window.event;
    //         e.target.setAttribute("class","wrapper chanCol");
    //         lockedDiv =  e.target;    //将点击的节点赋给全局变量lockDiv
    //         // e.stopPropogation();

    //     })
    // }


    var Button = document.getElementsByTagName("input");
    for(var j = 0;j<Button.length;j++){
        switch (j){
            case 0:{
                Button[j].addEventListener("click",function(){
                      var parNode = lockedDiv.parentNode;
                      parNode.removeChild(lockedDiv);
                      lockedDiv = null;
                      
                });
                break;
            }
            case 1:{
                Button[j].addEventListener("click",function(){
                    var that = this;
                    var newInput = that.nextElementSibling;
                    newInput.onchange=(function(){
                        newNodeText = newInput.value;
                    })();
                    var newNode = document.createElement("div");
                    var newNodeTxt = document.createTextNode(newNodeText);
                    newNode.appendChild(newNodeTxt);
                    newNode.setAttribute("class","wrapper");
                    lockedDiv.appendChild(newNode);
                })
                break;
            }
            case 3:{
                 Button[j].addEventListener("click",function(){
                     root = document.getElementsByClassName("wrapper")[0];
                     nodeList.splice(0,nodeList.length);
                     traverseTree(root);
                     var j=0;
                     nodeList[j].setAttribute("class","wrapper traversed");
                     var func = function(){
                         j++;
                         if(j<nodeList.length){
                            nodeList[j-1].setAttribute("class","wrapper");
                            nodeList[j].setAttribute("class","wrapper traversed");
                         }
                         else {
                            clearInterval(timer);
                            nodeList[nodeList.length-1].setAttribute("class","wrapper");
                         }
                         return func;
                     };
                     timer = setInterval(func(),500);
                     
                     
                 })
                 break;
            }
            case 5:{
                var searchElem = document.getElementsByClassName("search")[0];
                    searchElem.onchange = (function(){
                        searchText = searchElem.value;
                    });
                Button[j].addEventListener("click",function(){
                    root = document.getElementsByClassName("wrapper")[0];
                     nodeList.splice(0,nodeList.length);
                     traverseTree(root);
                    var i=0;
                    nodeList[i].setAttribute("class","wrapper traversed");
                    var func = function(){
                        i++;
                        if(searchText != nodeList[i].firstChild.textContent.trim()){
                            nodeList[i-1].setAttribute("class","wrapper");
                            nodeList[i].setAttribute("class","wrapper traversed");
                            if(i==nodeList.length-1){
                                alert("未找到所查询内容");
                                clearInterval(timer);
                            }
                        }
                        else{
                            if(i<nodeList.length){
                                nodeList[i-1].setAttribute("class","wrapper");
                                nodeList[i].setAttribute("class"," wrapper searched");
                                clearInterval(timer);
                            }
                          
                            
                        }
                        nodeList[nodeList.length-1].setAttribute("class","wrapper");
                    //    return func;
                    }
                    timer = setInterval(func,500);
                  
                })
            }

        }
    }
    
}

function traverseTree(root){
    nodeList.push(root);
    root.setAttribute("class","wrapper");
    var elemNodeList = root.childNodes;
    // var elemNodeList = root.getElementsByTagName("div");
    for(var k=0;k<elemNodeList.length;k++){
        if(elemNodeList[k].nodeType==1){
            traverseTree(elemNodeList[k]);
        }

     }
}

function searchDiv(classname){
    var divList = document.getElementsByClassName(classname);
    return divList;
}


window.onload = addEvent();