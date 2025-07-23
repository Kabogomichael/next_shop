import React from 'react'
import { DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuSeparator,DropdownMenuTrigger } from '../ui/dropdown-menu'
import { LuAlignLeft } from "react-icons/lu"
import { Button } from '../ui/button'
import {links} from '@/utils/link'
import Link from 'next/link'
import UserIcon from './UserIcon'
import SignOutLink from './SignOutLink'
import { SignedIn, SignedOut, SignInButton, SignUpButton,  } from '@clerk/nextjs'


const LinksDropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger  asChild>
        <Button variant={'outline'} className='flex gap-4 max-w-[100px]' >
          <LuAlignLeft  className='w-6 h-6'/>
          <UserIcon />


        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-40 ' align='start' sideOffset={10}>
        <SignedOut >
          <DropdownMenuItem>
            <SignInButton mode='modal'>
              <button className='w-full text-left '>
                login
              </button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignUpButton mode='modal'>
              <button className='w-full text-left '>
                Register
              </button>
            </SignUpButton>
          </DropdownMenuItem>

        </SignedOut>
        <SignedIn>
           {links.map((link) =>(
          <DropdownMenuItem key={link.href}>
            <Link href={link.href} className='capitalize w-full'>{link.label}</Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <SignOutLink />
        </SignedIn>
       

      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LinksDropDown