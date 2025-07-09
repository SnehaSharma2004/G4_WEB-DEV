console.log("SCRIPT START")

// const grandparent= document.getElementById("grandparent");

// const parent= document.getElementById("parent");

// const child= document.getElementById("child");


//BUBBLING

// grandparent.addEventListener("click",()=>{
//     console.log("this is red block")
// })
// parent.addEventListener("click",()=>{
//     console.log("this is green block")
// })
// child.addEventListener("click",()=>{
//     console.log("this is blue block")
// })

//EVENT CAPTURING
// grandparent.addEventListener("click",()=>{
//     console.log("this is red block")
// }, true)
// parent.addEventListener("click",()=>{
//     console.log("this is green block")
// }, true)
// child.addEventListener("click",()=>{
//     console.log("this is blue block")
// }, true)


//e.stopPropagation()

// grandparent.addEventListener("click",(e)=>{
//     console.log("this is red block");
//     e.stopPropagation();
// }, false)
// parent.addEventListener("click",(e)=>{
//     console.log("this is green block")
//     e.stopPropagation();
// }, true)
// child.addEventListener("click",(e)=>{
//     console.log("this is blue block")
//     e.stopPropagation();
// }, false)

//efficient way to use event listener : EVENT DELEGATION
// const productList= document.getElementById("productList");
// productList.addEventListener("click",(event)=>{
//     if(event.target.tagName==="LI"){
//         console.log("CLICKED ON : ", event.target.textContent);
//     }
// })

//to add new list elements
// const newElement=document.createElement("li");
// newElement.textContent="Bottle";
// productList.appendChild(newElement);


/////////////////////////////////////////////////////////////////////

//to capture event
// const textBox=document.getElementById("text-box")
// textBox.addEventListener("input",(e)=>{
//     console.log("typed : ", e.target.value)
// })

//will apply setTimeout and clear previous setTimeout
// const textBox=document.getElementById("text-box")
// textBox.addEventListener("input",(e)=>{
//     setTimeout(()=>{
//         //creating setTimeout value every time
//         console.log("typed : ", e.target.value)
//     },3000)
// })

//DEBOUNCING

// const textBox=document.getElementById("text-box")
// let thisTime; //no encapsulation, function wrapping is solution
// textBox.addEventListener("input",(e)=>{
//     clearTimeout(thisTime);
//     thisTime= setTimeout(()=>{ //will store ref of every timeout
//         //creating setTimeout value every time
//         console.log("typed : ", e.target.value)
//     },3000)
//     //keeps the last timeout ref and clear the rest
    
// })

//ENCAPSULATED DEBOUNCING FUNCTION

function debounce(cb, delay){
    let thisTime;
    return function(...args){
        clearTimeout(thisTime);
        thisTime=setTimeout(()=>{
            cb.apply(this,args);
        }, delay)
    }
}

const textBox=document.getElementById("text-box")
const handleInput=debounce((e)=>{
    console.log("TYPED : ", e.target.value)
}, 3000)

textBox.addEventListener("input", handleInput)
