"use client"
import { adminLinks } from '@/utils/link'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

const SideBar = () => {
    const pathname = usePathname()
  return (
    <aside>
        {adminLinks.map((link)=>{
            const isActivePage = pathname === link.href
            const variant = isActivePage? 'default':'ghost'
            return <Button asChild key={link.href} className='w-full  mb-2 capitalize font-normal flex justify-start' variant={variant}>
                <Link href={link.href}>{link.label}</Link>
            </Button>
        })}
    </aside>
  )
}

export default SideBar