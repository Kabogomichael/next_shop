import React from 'react'
import { Button } from '../ui/button'

const AddToCart = ({productId}:{productId:string}) => {
  return (
    <Button className='capitalize mt-8' size={'default'} >Add To Cart</Button>
  )
}

export default AddToCart