import mongoose  from "mongoose";

export async function  connect(){
         try {
                console.log(process.env.MONGO_URI)
                  mongoose.connect(process.env.MONGO_URI!)  
                 const connection = mongoose.connection

                 connection.on('connected',()=>{
                         console.log("Connected to MongoDB");
                 })

                 connection.on('error',(err)=>{
                         console.log("Error connecting to MongoDB , make sure mongodb is up and running ");
                         console.log(err);
                         process.exit();
                 })
                  
         } catch (error) {
                  console.log("something went wrong with db connection");
                  console.log(error);
                  
         }
}