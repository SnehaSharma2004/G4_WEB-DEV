// console.log("script start") //synchronus 

// setTimeout(()=>{
//     console.log("i am going to a restaurant"); //asynchronus
// },4000)

// setTimeout(()=>{
//     console.log("i am checking the menu for ordering");
// },3000)

//CALLBACK
// function walkInRestaurant(cb){
//     console.log("i am walking inside the restaurant"); //this is synchronus
//     setTimeout(cb,3000);
// }
// function menuCheck(cb){
//     console.log("i am checking the menu");//this is in setTimeout
//     setTimeout(cb,2000);
// }
// function foodOrder(cb){
//     console.log("i am ordering the food");
//     setTimeout(cb,6000);
// }
// function havingLunch(cb){
//     console.log("i am having the lunch");
//     setTimeout(cb,8000);
// }
// function payBill(cb){
//     console.log("i am paying the bill");
//     setTimeout(cb,3000);
// }
// function WalkAway(){
//     console.log("bye bye going home");
// }

// //how to call
// //PYRAMID OF DOOM
// walkInRestaurant(()=>{
//     menuCheck(()=>{
//         foodOrder(()=>{
//             havingLunch(()=>{
//                 payBill(()=>{
//                     WalkAway();
//                 })
//             })
//         })
//     })
// }) //growing horizontally, difficult to debug, therefore promise is used

// console.log("script end")


let arr=[2,3,4,5,6,7];
// function doubleArrayVal(arr){
//     let double=[]
//     for(var i=0;i<arr.length;i++){
//         double.push(arr[i]*2)
//     }
//     console.log(double);
// }
// doubleArrayVal(arr);

//create prototype
Array.prototype.doubleArrayVal=function(logic){ //data is array, ... (data)
    let double=[]
    for(var i=0;i<this.length;i++){ //this will refer the data passed as parameter
        double.push(logic(this[i]))
    }
    console.log(double);
}
function triple(x){
    return x*x*x;
}
//data: arr which we are passing
//logic: calculate using functions
let result=arr.doubleArrayVal(triple)
console.log(result)

// function doubleArrayVal(arr){
//     return arr.map(num => num * 2);
// }
// let doubleArray=doubleArrayVal(arr);
// console.log(doubleArray);

