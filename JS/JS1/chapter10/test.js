// var wrapper = document.getElementById("wrapper");
// var childList = wrapper.getElementsByTagName("div");
// console.log(childList.length);



// for (var i = 0; i < 5; i++) {
//     setTimeout(function() {
//       console.log(i);
//     }, 1000 * i);
//   }

//   var k=0;

// for (var i = 0; i < 5; i++) {
//     (function() {
//       setTimeout(function() {
//         console.log(i);
//       }, i * 1000);
//     })(i);
//   }



// function fun1(){
//     var foo = 2;
//     return function(){
//         console.log(foo);
//     }
// }
// fun1()();//?
// var fun2 = fun1();
// var foo = "foo";
// fun2();


for (var i = 0; i < 5; i++) {
    (function() {
      setTimeout(function() {
        console.log(i);
      }, i * 1000);
    })(i);
  }
console.log(6);