// function Person(name,age){
//   this.name = name;
//   this.age = age;
// }
// Person.prototype = {
//     sayName: function(){
//         alert(this.name);
//     }
// }

// var per1 = new Person("sherry",23);
// per1.sayName();
// var a ;
// function hello (cont){
//     console.log(this.name + " say hello " + cont);
// }

// person = {name:"sheey"};
// person.hello = hello;

// var name = "john";

// person.hello("world");

// hello("world");


// function FruitA (n1,n2){
//     this.n1 = n1;
//     this.n2 = n2;
//     this.change = function(x,y){
//         this.n1 = x;
//         this.n2 = y;
//     }
// }
// var fA = new FruitA("banana","peach");
// console.log(fA.n1);
// fA.change("pear","apple");
// console.log(fA.n1);

// var name = "XL";
// function Person(){
//     this.name = "xl";
//     this.showName = function(){
//         console.log(this.name);
//     }
//     setTimeout(this.showName,50);
// }
// var person = new Person();


var x=20;
var obj = {x:10,
f:function(){
    console.log(this.x);
    var foo = function(){console.log(this.x);}
    foo();
}   
}
obj.f();

var top = "34px";
console.log(parseInt("-34px"));