const mongoose =require("mongoose");
const initData =require("./data.js");
const Listing = require("../models/listing.js");

//Databses connection
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main().then((res)=>{
   console.log("Databases connected!");
}).catch((err)=>{
   console.log(err);
}); 
async function main(){
   await mongoose.connect(MONGO_URL)
}

const initDB = async()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj) => ({...obj,owner:"669a9625db2be2d013fb77a6"}));
    await Listing.insertMany(initData.data); 
    console.log("Data was initialized");

};
 initDB(); 