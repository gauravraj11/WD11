// var A = {
//     "name": "mern",
//     "desig" : "faculty",
//     add : function(){
//         console.log("Hello we are the member of object A");
//         console.log(this); 
//     }
// }
// this.a = 13;
// var A = {
//     "name": "mern",
//     "desig" : "faculty",
//     add : ()=> {
//         console.log("Hello we are the member of object A second");
//         console.log(this); 
//     }
// }


// var A = {
//     "name": "mern2",
//     "desig" : "faculty2",
//     sub: function(){

//     },
//     add : function(){
//         abc=()=>{
//             console.log(this.desig);   
//         }
//         abc();
//     }
// }

var A = {
    "name": "mern2",
    "desig" : "faculty2",
    sub: function(){

    },
    add : function(){
        
        function abc(){
            console.log(this);   
        }
        abc();
    }
}

A.add();