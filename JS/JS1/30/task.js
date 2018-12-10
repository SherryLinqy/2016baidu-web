window.onload = addEvent();

function addEvent(){
    var inputList = document.getElementsByClassName("input");
    for(var i =0;i<inputList.length;i++){
        switch(i){
            case 0:
                addListener(inputList[i],"click",function(e){
                    var e = event||window.event;
                    if(e.target){
                        var tipwrapper = document.getElementById("tipWrapper");
                        var parent = e.target.parentNode;
                        var value = e.target.value.trim();
                        var valueLength = countStrLength(value);
                        if(valueLength < 4 || valueLength > 16){
                           tipwrapper.innerHTML = "请输入4~16个字符";      
                           tipwrapper.className = "redText";
                        }
                        else{
                          tipwrapper.innerHTML = "验证通过";               
                          tipwrapper.className = "greenText";
                        }
                    }
                });
                addListener(inputList[i],"blur",function(e){
                var e = event||window.event;
                if(e.target){
                    var tipwrapper = document.getElementById("tipWrapper");
                    var parent = e.target.parentNode;
                    var value = e.target.value.trim();
                    var valueLength = countStrLength(value);
                    if(valueLength < 4 || valueLength > 16){
                        tipwrapper.innerHTML = "请输入4~16个字符";      
                        tipwrapper.className = "redText";
                    }
                    else{
                        tipwrapper.innerHTML = "验证通过";               
                        tipwrapper.className = "greenText";
                    }
                }
                
            });
            break;
            
            case 1:
                addListener(inputList[i],"blur",function(e){
                    var e = event||window.event;
                    if(e.target){
                        var tipwrapper = document.getElementById("tipWrapper");
                        var parent = e.target.parentNode;
                        var value = e.target.value.trim();
                        key = value;
                        var valueLength = countStrLength(value);
                        if(valueLength < 4 || valueLength > 16){
                            tipwrapper.innerHTML = "密码级别过低";      
                            tipwrapper.className = "redText";
                        }
                        else{
                            tipwrapper.innerHTML = "密码级别通过";               
                            tipwrapper.className = "greenText";
                        }
                    }
                });
                break;

            case 2:
              addListener(inputList[i],"blur",function(e){
                var e = event||window.event;
                    if(e.target){
                        var tipwrapper = document.getElementById("tipWrapper");
                        var parent = e.target.parentNode;
                        var value = e.target.value.trim();
                        if(key == value){
                            tipwrapper.innerHTML = "密码输入一致";               
                            tipwrapper.className = "greenText";
                        }
                        else{
                            tipwrapper.innerHTML = "密码输入不一致";               
                            tipwrapper.className = "greenText";
                        }
                    }

              });
              break;

        case 3:
            addListener(inputList[i],"blur",function(e){
                var e = event||window.event;
                if(e.target){
                    var tipwrapper = document.getElementById("tipWrapper");
                    var parent = e.target.parentNode;
                    var value = e.target.value.trim();
                    var valueLength = countStrLength(value);
                    if(valueLength < 4 || valueLength > 16){
                        tipwrapper.innerHTML = "邮箱格式错误";      
                        tipwrapper.className = "redText";
                    }
                    else{
                        tipwrapper.innerHTML = "验证通过";               
                        tipwrapper.className = "greenText";
                    }
                }
            });
            break;

        case 4:addListener(inputList[i],"blur",function(){
            var e = event || window.event;
            if(e.target){
                var tipwrapper = document.getElementById("tipWrapper");
                var parent = e.target.parentNode;
                    var value = e.target.value.trim();
                    var valueLength = countStrLength(value);
                    if(valueLength < 4 || valueLength > 16){
                        tipwrapper.innerHTML = "邮箱格式错误";      
                        tipwrapper.className = "redText";
                    }
                    else{
                        tipwrapper.innerHTML = "验证通过";               
                        tipwrapper.className = "greenText";
                    }

            }
        })
            
        }
        
    }
}


function addListener(elem,type,func){
   if(elem.addEventListener){
       elem.addEventListener(type,func,false);
   }
   else if(elem.attachEvent){
       elem.attachEvent(type,func);
   }
   else{
       elem['on'+type] = func;
   }
}


function countStrLength(str){
   var length = 0;
   for(var i = 0;i<str.length;i++){
       var perCode = str.charCodeAt(i);
       if(perCode>=0 && perCode<=128){
           length += 1;
       }
       else{
           length += 2;
       }
   }
   return length;
}