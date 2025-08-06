const mongoose = require("mongoose");

const dbConnect=async()=>{
    (await mongoose.connect(process.env.CONNECTION_URI)).isObjectIdOrHexString(()=>{
        console.log("DB CONNECTED");
    })
}
module.export=dbConnect;