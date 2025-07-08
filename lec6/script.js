// const promise1=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("this is promise object")
//     },3000)
// })
// promise1
//asynchronus
// promise1.then((res)=>console.log(res))
//     .then(()=> setTimeout(()=>{
//         console.log("P2")
//     },5000))
//     .then(()=> setTimeout(()=>{
//         console.log("P3")
//     },2000))
//     .then(()=> setTimeout(()=>{
//         console.log("P4")
//     },3000))
//     .catch((err)=>console.log(err))

//synchronus
//if multiple promises, then make a function
// const promise1=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("this is promise object")
//     },3000)
// })
// function something(msg, delay){
//     return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("promise resolved",msg)
//         resolve("promise resolved", msg)
//     },delay)
// })
// }
// promise1.then((res)=>console.log(res))
//     .then(()=>{
//         return something("p2",5000)
//     })
//     .then(()=>{
//         return something("p3",3000)
//     })
//     .then(()=>{
//         return something("p4",1000)
//     })
//     .catch((err)=>console.log(err))


const promise1=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("this is promise object")
    },3000)
})
function something(msg, delay){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("promise resolved: ",msg)
        resolve("promise rejected: ", msg)
    },delay)
})
}
function somethingReject(msg, delay){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("promise rejected : ",msg)
        reject("promise rejected: ", msg)
    },delay)
})
}
promise1.then((res)=>console.log(res))
    .then(()=>{
        return something("p2",5000)
    }).catch((err)=>console.log(err))
    .then(()=>{
        return somethingReject("p3",3000)
    }).catch((err)=>console.log(err))
    .then(()=>{
        return something("p4",1000)
    })
    .catch((err)=>console.log(err))