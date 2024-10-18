import nodemailer from "nodemailer"
import bcryptjs from 'bcryptjs'
import User from "@/models/userModels"


export const sendEmail = async ({ email, emailType, userId }: any) => { // this parameter come from user 
  try {
    //TODO : configure mail for usage
    const hashedToken = await bcryptjs.hash(userId.toString(), 10)
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId,
        {
          $set: {
            verifyToken: hashedToken, verifyExpire: Date.now() + 360000
          }
        }
      );
    }
    else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId,
      { $set: {
          forgetPasswordToken: hashedToken, forgetPasswordExpire: Date.now() + 360000
        }}
      )
    }


    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "d06cce9d903657",
        pass: "cfede2c544a537"
      }
    });

    const mailOptions = { //data that send with email 
      from: 'nitinawari.services@gmail.com', // sender address
      to: email, // list of receivers
      subject: emailType === 'VERIFY' ? "verify your email " : "Reset your password", // Subject line
      html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
                  or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
                  </p>`
    }

    const mailResponce = await transporter.sendMail(mailOptions) // send email
    return mailResponce

  } catch (error: any) {
    throw new Error(error.message)
  }
}