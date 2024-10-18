import mongoose  from "mongoose";


const userSchema = new  mongoose.Schema({
         username:{
                  type: String,
                  required: [true , "please provide a username "],
                  unique:true

         },
         email:{
                  type: String,
                  required: [true , "please provide a email"],
                  unique:true
         },
          password:{
                 type:String,
                 required:[true,"please provide a password"]
         },
         isVerified:{
                  type:Boolean,
                  default:false
         },
         isAdmin:{
                 type:Boolean,
                 default:false
         },
         forgetPasswordToken:String,
         forgetPasswordExpire:Date,
         verifyToken:String,
         verifyExpire:Date
})

const User = mongoose.models.users || mongoose.model("users",userSchema) // nextjs run on egde that why we have to check first if the model is already defined or we have to define it


export default User;