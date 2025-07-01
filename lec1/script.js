// console.log("hello world");
// console.log(a);
// var a=10;
// console.log(a);

// function abc(){
//     console.log("this is function abc");

//     function hgf(){
//         console.log("this is function hgf");
//     }
//     hgf();
// }

// abc();

// var b=100;

// console.log(b);
// var a=200;
// console.log(a);

// xyz(); //it is now a variable

// var xyz=()=>{
//     console.log("xyz function called");
// } //call it as a variable function

// console.log(b);
// let b=10;


// //SCOPE: LEXICAL SCOPE ENVIRONMENT
// {
//     //compound statement
//     // grandparent
//     var a=10;
//     var b=20;
//     var c=30;
//     // console.log(d);
//     // console.log(a);
//     // console.log(b);
//     // console.log(c);
//     {
//         //parent
//         // console.log(a);
//         // console.log(b);
//         // console.log(c);
//         {
//             //child
//             // let d=20000;
//             console.log(a);
//             console.log(b);
//             console.log(c);
//         }
//     }

// }

// function abc(){
//     var a=10;
//     var b=20;
//     var c=30;
//     function def(){
//         var d=40;
//         function ijk(){
//             console.log(a);
//             console.log(b);
//             console.log(c);
//             console.log(d);
//         }
//         ijk();
//     }
//     def();
// }
// abc();

//cLOSURE

// for(var i=0;i<=5;i++){
//     // console.log(i);

//     //closure
//     function closure(i){
//     setTimeout(()=>{
//         console.log(i);
//     },2000)
// }
// closure(i);
// }

//HOF
// function xyz(cb){
//     console.log("this is normal function");
//     cb();
// }
// function cb(){
//     console.log("i am cb function");
// }
// xyz(cb);

//function that takes and argument as function and returns a function
function abc(){
    console.log("this is abc()")
    efc();
}
function efc(){
    console.log("this is efc()")
}
abc();