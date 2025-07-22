import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import HeroCarousel from './HeroCarousel'

const Hero = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-2 items-center'>
      <div>
        <h1 className='max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl capitalize'>
          we are changing the way people shop
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground '>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.

        </p>
        <Button  asChild size={'lg'} className='mt-10'>
          <Link href={'/products'}>Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  )
}

export default Hero