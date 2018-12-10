var drawing = document.getElementById("drawing");
// if(drawing.getContext){
//     var context = drawing.getContext("2d");
//     context.beginPath();

 
//     context.arc(100,100,90,0,2*Math.PI,false);
//     context.moveTo(195,100);
//     context.arc(100,100,95,0,2*Math.PI,false);

//     context.translate(100,100);

//     context.rotate(1);

//     context.moveTo(0,0);
//     context.lineTo(0,-80);
//     context.moveTo(0,0);
//     context.lineTo(-75,0);
// // context.stroke();
//  context.font = "bold 14px Arial";
//  context.textAlign = "center";
//  context.textBaseline = "center";
//  context.fillText("12",0,-80);

//  context.shadowColor = "rgba(0,0,0,0.5)";
//  context.shadowOffsetX = 5;
//  context.shadowOffsetY = 5;
//  context.shadowBlur = 4;
  
   
//    context.stroke();
// }

// if(drawing.getContext){
//     var context = drawing.getContext("2d");
//     context.strokeRect(0,0,140,200);
    
//     var fontSize = 100;
//     context.font = fontSize + "px Arial";
//     while(context.measureText("Hello world!").width>140){
//         fontSize--;
//         context.font = fontSize + "px Arial";
//     }
// context.textBaseline = "top";
//     context.fillText("Hello world!",10,10);
//     // context.stroke();
// }

if(drawing.getContext){
    var context = drawing.getContext("2d");
    
    context.fillStyle = "red";
    context.fillRect(10,10,50,50);

    context.globalCompositeOperation = "destination-over";

    context.fillStyle = "blue";
    context.fillRect(30,30,80,80);
}