//CALLBACK FUNCTION

let cart=["shoes","shirt","wallets"]

function orderDetail(cart, cb){
    //1. total no of products
    //2. total amount of products nos*1000
    console.log("Fetching order details...")
    setTimeout(()=>{
        let totalProducts=cart.length;
        let totalCost=totalProducts*1000;
        console.log(`Total Products: ${totalProducts}`);
        console.log(`Total Cost: ${totalCost}`);
        cb(totalProducts, totalCost,paymentGateWay);
    },2000)
}

function orderSummary(totalProducts, totalCost, cb){
    //total price and total product 
    //then generate orderID
    setTimeout(()=>{
        let orderID= Math.floor(Math.random()*10000);
        console.log(`your order ID: ${orderID}`);
        cb(totalProducts, totalCost, orderID,successfulOrder);
    }, 2000)
}

function paymentGateWay(totalProducts, totalCost, orderID, cb){
    //orderID, product details and price...payment is successful
    console.log("Processing payment...");
    setTimeout(() => {
        console.log(`Payment of ₹${totalCost} for ${totalProducts} items done successfully.`);
        cb(orderID, cart, totalCost);
    }, 2000)
}

function successfulOrder(orderID, cart, totalCost){
    //it will display all the details about the payment product name and everything
    console.log("Order Placed Successfully!");
    console.log(`Order ID: ${orderID}`);
    console.log(`Items Ordered: ${cart.join(", ")}`);
    console.log(`Total Paid: ₹${totalCost}`);
}

// orderDetail(cart, (totalProducts, totalCost) => {
//     orderSummary(totalProducts, totalCost, (orderID, totalProducts, totalCost) => {
//         paymentGateway(orderID, totalProducts, totalCost, (orderID, cart, totalCost) => {
//             successfulOrder(orderID, cart, totalCost);
//         });
//     });
// });

orderDetail(cart, orderSummary);

//PROTOTYPE OF FILTER

// let arr = [6,7,8,2,4,9]
// Array.prototype.filterr = function (logic){
//     let output = [];
//     for(let i=0;i<this.length;i++){
//         if(logic(this[i])){
//             output.push(this[i]);
//         }
//     }
//     return output;
// }
// function logic(x){
//     return x%2==0;
// }
// let output = arr.filterr(logic);
// console.log(output);


//REDUCE PROTOTYPE
// let arr1=[0,1,2,3,4]
// Array.prototype.reducer=function(logic){
//     let sum=initial;
//     for(let i=0;i<arr1.length;i++){
//         sum=logic(sum, this[i]);
//     }
//     return sum;
// }
// function logic(sum,x){
//     sum=sum+x;
//     return sum;
// }
// const sumOfAll=arr1.reduce(function(acc,curr){
//     acc=acc+curr;
//     return acc;
// },0)
// console.log(sumOfAll);

// const initialValue=0;
// const sumWithInitial=arr1.reduce(
//     (accumulator, currentValue)=> accumulator+currentValue, initialValue
// )
// console.log(sumWithInitial);