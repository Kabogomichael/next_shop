import React from 'react'
import { Button } from '../ui/button'
import { PiShoppingCartThin } from "react-icons/pi";
import Link from 'next/link'
 const CartButton = async() => {
  const numItemsInCart = 9
  return (
    <Button asChild variant={'outline'} size={'icon'} className='flex justify-center items-center relative '>
      <Link  href={'/cart'}>
        <PiShoppingCartThin />
        <span className='absolute -top-3 -right-3 bg-primary text-secondary rounded-full h-6 w-6 flex items-center justify-center text-xs'> {numItemsInCart}</span>
      </Link>

    </Button>
  )
}

export default CartButton