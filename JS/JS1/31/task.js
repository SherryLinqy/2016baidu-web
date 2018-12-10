

var schData=[{name:"北京",sch:["北京大学","清华大学","中国人民大学"]},
{name:"上海",sch:["上海交通大学","上海复旦大学","上海同济大学"]},
{name:"南京",sch:["南京大学","东南大学","南京邮电大学"]}];


(function(){
    var radioChoice = document.getElementById("radioChoice");
    addHandler("change",radioChoice,addRadioEvent);
   

    var cityChoice = document.getElementById("city");
    cityChoice.addEventListener("change",function(event){
        var event = event || window.event;
        if(event.target){
            for(var i = 0,len = schData.length;i < len;i++){
                if(event.target.value==schData[i].name){
                    var school = document.getElementById("city-school");
                    school.innerHTML = renderSch(schData[i].sch);
                }
            }
        }
    })
})();

function addRadioEvent(){
    var event = event || window.event;
    
    var inschChoiceCont = document.getElementById("insch");
    var noschChoiceCont = document.getElementById("nosch");
    if(document.getElementById("in-school").checked){
        noschChoiceCont.className = "hide";
        inschChoiceCont.className = "choiceSch";
    }
    else if(document.getElementById("no-school").checked){
        inschChoiceCont.className = "hide";
        noschChoiceCont.className = "noschpos";
    }
}

function renderSch(array){
    var str="";
    for(var k = 0;k<array.length;k++){
        str+= `<option>${array[k]}</option>`;
    }
return str;
}

function addHandler(type,elem,func){
    if(elem.addEventListener){
        elem.addEventListener(type,func);
    }
    else if(elem.attachEvent){
        elem.attachEvent("on"+type,func);
    }
    else{
        elem["on" + type] = null;
    }
}