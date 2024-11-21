// Named function : normal fn

function add(a, b){
   return a+b
}

var res = add(11, 22);
console.log(res);


// Anonymous function : normal function
var sub = function(c, d){
   return c-d;
}

var res1 = sub(23, 10);
console.log(res1);

// Arrow function

const mul =(e,f)=>{
   return e*f;
}

var res2 = mul(11,8);
console.log(res2);
