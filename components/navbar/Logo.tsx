import React from 'react'


import { SiShopware } from "react-icons/si";
import { Button } from '../ui/button';
import Link from 'next/link';

const Logo = () => {
  return (
    <Button asChild size={'icon'} variant={'outline'} >
      <Link href={'/'}>
       <SiShopware  className='w-6 h-6'/>
      </Link>
     
    </Button>
  )
}

export default Logo