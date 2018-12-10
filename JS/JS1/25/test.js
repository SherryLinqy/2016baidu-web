function F(name){
    this.name = name;
    }
    // // __proto__
   
    // F.prototype = {
    // // constructor: obj,
    // sayHello:function(){
    // return  this.name;
    // }
    // }
  
    
    
    
var num = 0;
outermost:
for(var i=0;i<10;i++){
    for(var j=0;i<10;j++){
        if(i==1 && j==1){
            break outermost;
        }
        num++;
    }
}
num++;