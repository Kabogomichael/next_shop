'use client'
import { SignOutButton } from '@clerk/nextjs'
import React from 'react'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import Link from 'next/link'

const SignOutLink = () => {
 
  const handleLogout = ()=>{
    toast.success("Logout Successful")
  }
  return (
    <SignOutButton  >
      <Link href={'/'} className='w-full text-left' onClick={handleLogout}>Logout</Link>
    </SignOutButton>
  )
}

export default SignOutLink