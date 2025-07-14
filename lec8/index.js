console.log("script js")

const {sumOfTwo, xy}=require("./calculate/sum")
const mulOfTwo=require("./calculate/mulOfTwo")

// var {sumOfTwo, xy}=require("./sum")

// var xy=5000 //will give error coz, opens the scope error

// console.log(xy)

// function sumOfTwo(a,b){
//     console.log(a+b);
//     return a+b;
// }
// function subOfTwo(a,b){
//     console.log(a-b);
//     return a-b;
// }
// function mulOfTwo(a,b){
//     console.log(a*b);
//     return a*b;
// }
// function divOfTwo(a,b){
//     console.log(a/b);
//     return a/b;
// }
// sumOfTwo(3,4);
mulOfTwo(25,2);
// subOfTwo(7,6);
// divOfTwo(56,7);
