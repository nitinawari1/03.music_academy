"use client"
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect } from 'react';

import { useState }  from 'react'; 



export default function VerifyEmail() {

  const [token , setToken] = useState("")
  const [verified , setVerified] = useState(false)
  const [error , setError] = useState(false)



  const  verifyUserEmail = async () => {
    
    try {
      await axios.post('/api/users/verifymail', token )
      setVerified(true)

    } catch (error:any) {
     setError(true);
     console.log(error.responce.data);
      
    }
  } 

  useEffect(()=>{
    setError(false)
    const urlToken = window.location.search.split("=")[1]
    setToken(urlToken || " ")
  }, [])

  useEffect(()=>{
    setError(false)
   if(token.length > 0 ){

     verifyUserEmail();
   
  }
},[token])
  
  return (
    <div className='flex items-center justify-center'>
      <h2 className=' items-center '>Verify mail</h2>
      {token ? `${token}` : "no token"}
     {verified &&(
      <div>
        <h2>Verified</h2>
        <Link href="/login">Login </Link>
      </div>
     )
     
     }
     {
      error && (
        <div>
          <h2>error</h2>
        </div>
      )
     }
    </div>
  )
}

