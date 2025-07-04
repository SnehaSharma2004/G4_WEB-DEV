// let userData=[
//     {
//         firstName: "Sneha",
//         age:"21"
//     },
//     {
//         firstName:"simran",
//         age:"21"
//     },
//     {
//         firstName:"sujal",
//         age:"22"
//     }
// ]

// //filter age less than 20
// //map firstName

// let result = userData
//     .filter(user => user.age < 22)
//     .map(user => user.firstName);

// console.log(result); 


///////////////////////////////////////////////////////////////////////////////

//PROMISE
// const priyanshu=new Promise((resolve, reject)=>{
//     // resolve("i got placed!"); //fulfilled state
//     setTimeout(()=>{
//         resolve("i got placed") //will be fulfilled after 5 sec
//     }, 5000)
// })

// const priyanshu=new Promise((resolve, reject)=>{
//     // resolve("i got placed!"); //fulfilled state
//     setTimeout(()=>{
//         reject("i did not got placed") //will be fulfilled after 5 sec
//     }, 5000)
// })
// // console.log(priyanshu);

// //yes we can add .catch block after every .then
// priyanshu.then((res)=>{
//     // console.log(res) //gives error
//     console.log("priyanshu getting salary")
//     return res;
// })
// .catch((err)=>{
//     console.log("error found :", err)
// })
// .then(()=>{
//     console.log("party time")
// })
// .catch((err)=>{
//     console.log("error found 1:", err)
// })
// .then(()=>{
//     console.log("working hard")
// })
// .catch((err)=>{
//     console.log("error found 2:", err)
// })
// .then(()=>{
//     console.log("got layoff")
// })
// //if resolve(), then .then will be executed
// //wild card error handler
// .catch((err)=>{
//     console.log("error found 3: ",err);
// })

//////////////////////////////////////////////////////////////////////////

//PROMISE APIs
// const p1=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject("assignment submitted by sneha")
//     },2000)
// })
// const p2=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("assignment submitted by simran")
//     },5000)
// })
// const p3=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("assignment submitted by sujal")
//     },7000)
// })
// const p4=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("assignment submitted by shivi")
//     },1000)
// })

// Promise.all(p1,p2,p3,p4); //not iterable
// Promise.all([p1,p2,p3,p4]).then((res)=>console.log(res)).catch((err)=> console.log("rejected: ",err)); //if one fails, it will just return the err and stop the API

// Promise.allSettled([p1,p2,p3,p4]).then((res)=> console.log(res)).catch((err)=> console.log("rejected: ", err)) //will show everything

// Promise.race([p1,p2,p3,p4]).then((res)=> console.log(res)).catch((err)=> console.log("rejected: ", err))

// Promise.any([p1,p2,p3,p4]).then((res)=> console.log(res)).catch((err)=> console.log("rejected: ", err))


//////////////////////////////////////////////////////////////////////////////////////////////////////////

//ASYNC AWAIT

//asynchronous
// const p1=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("assignment submitted by sneha")
//     },2000)
// })

//synchronous
// function checkassignment(){
//     const dataAssignment=p1;
//     console.log("checking the assignemnet", dataAssignment)
// }
// checkassignment();

// async function checkassignment(){
//     const dataAssignment= await p1;
//     console.log("checking the assignement: ", dataAssignment);
// }
// checkassignment();



async function dummy(){
    try{
        const get=await fetch("https://dummyjson.com/products")
    // console.log(get);//returning headers only
        const data=await get.json() //returns in json format
    // Extract only id, title, and description for each product
        const filteredProducts = data.products.map(product => {
            return {
                id: product.id,
                title: product.title,
                description: product.description
            };
        });

        console.log(filteredProducts);
    }catch(err){
        console.log(err);
    }
}
dummy();


