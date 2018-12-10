function init(){
    var tabForward = function (event){
        var event = event || window.event;
        var target = event.target;
        if(target.value.length == target.maxLength){
            var form = target.form;
            for(var i=0,len = form.elements.length;i<len;i++){
                if(form.elements[i] == target){
                    if(form.elements[i+1]){
                        form.elements[i+1].focus();
                    }
                    return;
                }
            }
        }
       
        
    };
    var textbox1 = document.getElementById("txtTel1");
        var textbox2 = document.getElementById("txtTel2");
        var textbox3 = document.getElementById("txtTel3");

        addHandler(textbox1,"keyup",tabForward);
        addHandler(textbox2,"keyup",tabForward);
        addHandler(textbox3,"keyup",tabForward);
};

function addHandler(elem,type,func){
     if(elem.addEventListener){
         elem.addEventListener(type,func,false);
     }
     else if(elem.attachEvent){
         elem.attachEvent("on"+type,func);
     }
     else{
         element["on"+type] = null;
     }
}

window.onload = init();