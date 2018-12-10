
window.onload = init;


var perWidth = 43;
var perHeight = 42.6;

function Createsquare(id,angle){
     this.selfDom = document.getElementById(id);   //获取dom节点
     this.angle = angle;
     var that = this;
    this.operation = {
        "TRA LEF" :function(){
            that.selfDom.style.transition = "left 1s linear";
            if(parseInt(that.selfDom.style.left)>42){
                that.selfDom.style.left = parseInt(that.selfDom.style.left)-43 + "px";
            }
            
        },
        "MOV LEF" :function(){
            if(parseInt(that.selfDom.style.left)>42){
                //that.angle += 270;
                that.selfDom.style.transform = "rotate(270deg)";    //"rotate(" + that.angle + "deg)"
                that.selfDom.style.transition = "left 1s linear ,transform 1s linear";
                that.selfDom.style.left = parseInt(that.selfDom.style.left)-43 + "px";
            }
           
        },
        "MOV BOT":function(){
            if(parseInt(that.selfDom.style.top)<-43){
                that.selfDom.style.transition = "top 1s linear ,transform 1s linear";
                that.selfDom.style.transform = "rotate(180deg)";
                that.selfDom.style.top = parseInt(that.selfDom.style.top) + 42.2 +"px";
            }
        }
        
        //箭头函数
        // "TRA LEF" :()=>{
        //     this.selfDom.style.transition = "left 1s linear";
        //     this.selfDom.style.left = parseInt(this.selfDom.style.left)-43 + "px";
        // },
        // "TRA TOP" : function(){
        // }
    }
}

// Createsquare.prototype.initSquPos = function(){
      
//         var pos_x = Math.floor(Math.random() * 10) * perWidth;  // Math.floor 向下取整 随机取0-9的随机整数，取0的概率极小
//         var pos_y = Math.ceil(Math.random() * 10) * perHeight;  //Math.ceil  向上取整 取1-10的随机整数
//         this.selfDom.style.left = pos_x + "px";
//         this.selfDom.style.top ='-' + pos_y + "px";
   
// };
Createsquare.prototype = {
    
    initSquPos:function(){ 
        var pos_x = Math.floor(Math.random() * 10) * perWidth;  // Math.floor 向下取整 随机取0-9的随机整数，取0的概率极小
        var pos_y = Math.ceil(Math.random() * 10) * perHeight;  //Math.ceil  向上取整 取1-10的随机整数
        this.selfDom.style.left = pos_x + "px";
        this.selfDom.style.top ='-' + pos_y + "px";
    }
}




function init(){
    var inputCommand = document.getElementById("detailCommand");

    var submitButt = document.getElementById("submitB");
    var squ_obj = new Createsquare("square",0);
    squ_obj.initSquPos();  //随机生成小方块位置
    // var squ = document.getElementById("square");
    //initSquarePos(squ);  //随机生成小方块位置
   
   
    submitButt.addEventListener("click",function(e){
       var event = event || window.event;
       if(event && event.target){
           var value = inputCommand.value;
           if(value){
            squ_obj.operation[value]&&  squ_obj.operation[value]();
           }
       }
    })

}



// var operation = {
//     "TRA LEF" : function(){
//         square.style.transition = "left 1s linear";
//         square.style.left = pos_x-43 + "px";
//     },
// }

// function initSquarePos (elem){
//     var pos_x = Math.floor(Math.random() * 10) * perWidth;  // Math.floor 向下取整 随机取0-9的随机整数，取0的概率极小
//     var pos_y = Math.ceil(Math.random() * 10) * perHeight;  //Math.ceil  向上取整 取1-10的随机整数
//     elem.style.left = pos_x + "px";
//     elem.style.top ='-' + pos_y + "px";
// }