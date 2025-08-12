import React from 'react'
import hero1 from '@/public/hero1.jpg'
import hero2 from '@/public/hero2.jpg'
import hero3 from '@/public/hero1.jpg'
import hero4 from '@/public/hero4.jpg'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Image from 'next/image'
import { Card, CardContent } from '../ui/card'
const carouselImages = [hero1,hero2,hero3,hero4]
const HeroCarousel = () => {

  return (
    <div className='hidden lg:block '>
      <Carousel  >
        <CarouselContent>
          {carouselImages.map((image,index)=>(
            <CarouselItem key={index} >
              <Card className='p-0' >
                <CardContent className='p-0' >
                  <Image  src={image} alt='hero ' className='w-full h-[24rem] rounded-md object-cover '/>
                </CardContent>
              </Card>

            </CarouselItem>

          ))}

        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
       
    </div>
  )
}

export default HeroCarousel