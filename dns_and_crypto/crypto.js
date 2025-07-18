// const { createHmac } = require('node:crypto'); //using createHmac from crypto which is required from the method pool of node

// const secret = 'abcdefg';
// const hash = createHmac('sha256', secret) //mix these two and incorporate in the update msg
//                .update('I love cupcakes')
//                .digest('hex'); //in hexa code
// console.log(hash);

/////////////////////////////////////////////////////////////////////////////

// .checkPrime(candidate [,options], callback) -->asynchronous

/*
CANDIDATE: the input you want to check for prime
OPTIONS: optional. how you want to check the input
CALLBACK: function called after it finishes checking
*/

// const crypto = require("node:crypto")

// const number=21 //number to check

// crypto.checkPrime(Buffer.from([number]), (err, result)=>{  //number is stored in buffer in byte
//     if(err){
//         console.log("ERROR: ", err);
//     }
//     if(result){
//         console.log(number, "is prime")
//     }else{
//         console.log(number, "is not prime")
//     }
// })

/////////////////////////////////////////////////////////////////////////////////////////////

// .checkPrimeSync(candidate[, options]) -->synchronous

//answers in true or false

// const crypto = require("node:crypto")

// const number=17

// const isPrime=crypto.checkPrimeSync(Buffer.from([number]))

// console.log(isPrime)

////////////////////////////////////////////////////////////////////////////////////////////

// const crypto=require("node:crypto")
// console.log(crypto.constants);

/* .constants: object in node js crypto module, contains a collection of predefined constant values used for cryptographic and security-related operations.*/

////////////////////////////////////////////////////////////////////////////////////////////

//  crypto.createCipheriv(algorithm, key, iv[, options])

/* >turn readable simple text to secret code using encryption
   > "iv" stands for initialization vector, and it helps make encryption more secure 
   by making sure that even if you encrypt the same message twice, you get different results each time.
*/

const crypto=require("node:crypto")

const algorithm = 'aes-128-cbc';  //use OpenSSL algorithm
const key = crypto.randomBytes(16); //randomly generate
const iv = crypto.randomBytes(16);  //randaomly generate

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('I love cupcakes', 'utf8', 'hex');
encrypted += cipher.final('hex');

console.log("ENCRYPTED: ", encrypted);
