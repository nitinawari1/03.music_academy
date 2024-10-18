import {connect} from '@/dbconfig/dbconfig'
import User from "@/models/userModels"
import {sendEmail} from '@/helpers/emailer'
import { NextRequest , NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'

connect()

export  async   function POST(request: NextRequest)  {

      try {
         const reqBody  =  await request.json()

         const {token } = reqBody 
         console.log(token)
         
                
         const user =await User.findOne({verifyToken :token , verifyExpire : {$gt: Date.now()}}) 
         //$gt is a opearator that check date is greater than expriry or not 


         if(!user){
                  return NextResponse.json({error: "invalid token "} , {status:400})
         }
         console.log(user)
         
          user.isVerified = true ;
          user.verifyToken = undefined;
          user.verifyExpire = undefined;

         await user.save();

         return NextResponse.json({message: "Email verified succesfully " , success: true} , {status:200})

      }  catch (error: any) {
         return NextResponse.json({error: error.message} , {status:500}) // return internal server error message if any other errors occur
       }
 
}