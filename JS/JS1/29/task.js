window.onload = addEvent();

function addEvent(){
    var testButt = document.getElementsByClassName("test")[0];
    addListener(testButt,"click",function (){
        var contentElem = document.getElementsByClassName("content")[0];
            var inputText = contentElem.value.trim();
            var inputLength = countLength(inputText);
            if(inputLength < 4 || inputLength > 16){
                alert("请输入4~16个字符");
            }
            else{
                var verifyResWrapper = document.getElementsByClassName("verifyResult")[0];
                verifyResWrapper.innerHTML = "格式正确";
            }
    
    
       
    
    });
}


//判断格式校验


function countLength(str){
    var length=0;
    for(var i = 0;i<str.length;i++){
        var perCode=str.charCodeAt(i);
        if(perCode>=0 && perCode<+128){
            length += 1;
        }
        else{
            length += 2;
        }
    }
    return length;
}
//事件监听的兼容性写法
function addListener(element,type,func){
    if(element.addEventListener){
        element.addEventListener(type,func,false);
    }
    else if(element.attachEvent){
        element.attachEvent('on'+type,func);
    }
    else{
        element['on'+type] = func;
    }
}