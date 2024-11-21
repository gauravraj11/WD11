var A = {

    123: "faculty",
    desig: "employee"
}

var B = {

    "name" : "gaurav",
    "roll" : "007",
    
}

var C = Object.assign({},A,B)
// console.log(A["roll"]);
console.log(C);

const {name, roll} = B; // destructuring
console.log(name);




