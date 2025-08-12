import { Separator } from '@/components/ui/separator'
import React from 'react'
import SideBar from './SideBar'

function DashboardLayout({children}:{children:React.ReactNode}) {
  return (
    <>
    <h2 className='text-2xl pl-4 '>Dashboard</h2>
    <Separator />
    <section className='grid lg:grid-cols-12 gap-12 mt-12 '>
        <div className='lg:col-span-2'>
            <SideBar/>
        </div>
        <div className='lg:col-span-10 px-4'>
{children}
        </div>
        

    </section>
    
    </>
  )
}

export default DashboardLayout