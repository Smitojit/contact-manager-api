const mongoose= require('mongoose');

const connect=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected");
    }catch(err){
        console.error("Connection failed: ",err.message);
        process.exit(1);
    }
}

module.exports=connect;