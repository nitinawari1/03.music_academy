import {connect} from '@/dbconfig/dbconfig'
import User from "@/models/userModels"
import {sendEmail} from '@/helpers/emailer'
import { NextRequest , NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'



 connect() // connect to database
//why we using req: NextApiRequest, res: NextApiResponse ?

export  async   function POST(request: NextRequest)  {

  try {
         // first we have to connect to database because next run on egde browsing so for every route we have to connect databse  every time  

    const reqBody = await request.json();
    const {username,email, password} = reqBody // get email and password from request body
         console.log(username , email , password ) ; 
    const user = await User.findOne({email}) // check if user already exists in database

    if (user) {
      return NextResponse.json({message: 'User already exists'},{status:400}) // return error message if user already exists
    }

    const hashedPassword =await  bcryptjs.hash( password , 10 )



    const newUser = new User({username , email, password: hashedPassword}) // create a new user with email and password

    const savedUser =  await newUser.save() // save the new user to database


    //send verification email   to verify account 
    
    const mailResponce = await sendEmail({email, emailType: "VERIFY", userId: newUser._id}) // send verification email to user's email
    if (mailResponce) {
      return NextResponse.json({message: 'User created successfully' , success:true ,savedUser } ) // return success message if user is created and email is sent
    } else { 
      throw new Error('Error sending verification email') // throw error if there is an issue sending the verification email
    }

  } catch (error: any) {
    return NextResponse.json({message: error.message} , {status:500}) // return internal server error message if any other errors occur
  }
} 