// var divList = document.getElementsByClassName("wrapper");
// var root = divList[0];     //最外面的div
// var elemNodeList = root.getElementsByTagName("div");
// var firCh = elemNodeList[0];
// // var laCh = root.lastChild;
// console.log(typeof firCh);

var btn = document.getElementById("myBtn");
btn.onclick = function(event){
      alert(event.eventPhase);
}

document.body.onclick = function(event){
    alert(event.eventPhase);
};

document.body.addEventListener("click",function(event){
    alert(event.eventPhase);
},true)