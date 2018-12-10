// function Person(){
//     this.name="jack";
//   this.colors=["red","yellow"];
// };
// Person.prototype.getName = function(){
//     console.log(this.name);
// }
// function B(){};
// B.prototype = new Person();
// var obj1 = new B();
// obj1.colors.push("black");
// var obj2 = new B();
// obj2.colors.push("blue");
// var anoPerson = new Person();
// console.log(anoPerson.colors);
// var i=0;

// function B(name){
//     Person.call(this, name);
// };
// var obj1 = new B("sherry");
// console.log(obj1.name);
// obj1.colors.push("black");
// var obj2 = new B("Jack");
// console.log(obj2.colors);
// var i =0;
// Person.prototype={
//     name:"Sherry",
//     age:23,
//     sex:"female",
//     sayName:function(){
//         // 
//         return this.name;
//     }
// }

// var obj1 = new Person();
// alert(obj1.sayName());
// alert(obj2.sayName());



// var person={name:"sherry",friends:["jack","john"]};
// var anothPer = Object.create(person);
// anothPer.friends.push("Rose");
// var yetAnoPerson = Object.create(person);
// yetAnoPerson.friends.push("kitty");
// person.friends.push("mary");
// var i=1;


//寄生式继承
function createAnother(o){
 var clone = Object.create(o);
 clone.sayHi=function(){
     alert("hi");
 }
 return clone;
}
function object(o){
function F(){}
F.prototype = 0;
return new F();
}

var person={name:"sherry",friends:["jack","rose"]};
var per1 = createAnother(person);
var per2 = createAnother(person);
per1.friends.push("john");
per2.friends.push("kitty");
person.friends.push("Mary");
var i=0;



//寄生组合式继承
// function inheritPrototype(subType,superType){
//     var prototype = Object.create(superType.prototype);
//     prototype.constructer = subType;
//     subType.prototype = prototype;
// }

// function superType(name){
//     this.name = name;
//     this.colors = ["yellow","pink"];
// }
// superType.prototype.sayColors = function (){
//     console.log("this.colors");
// }
// function subType(name,age){
//     superType.call(this,name);
//     this.age = age;
// }
// // inheritPrototype(subType,superType);
// var instance1 = new subType("kitty",20);
// var instance2 = new subType("jack",22);
// instance1.colors.push("red");
// instance2.colors.push("black");
// var i=0;