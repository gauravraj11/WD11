// var person1 = {
//     name: "MERN",
//     greet: function () {
//       console.log("Hello, my name is " + this.name);
//     },
//   };
//   var person2 = {
//     name: "Raj",
//   };
//   person1.greet.call(person2); 
//   person1.greet();

function add(a,b){
    console.log(this.c);
    
}

var obj = {
    c : 123
}

add.call(obj);
