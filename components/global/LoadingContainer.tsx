import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Skeleton } from '../ui/skeleton'

const LoadingContainer = () => {
  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 '>
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
    </div>

  )
}
const LoadingProduct=()=>{
  return <Card>
    <CardContent  >
      <Skeleton className='h-48 w-full mt-4'/>
      <Skeleton className='h-4 w-3/4 mt-4'/>
      <Skeleton className='h-4 w-1/4 mt-4'/>

    </CardContent>
  </Card>
}

export default LoadingContainer