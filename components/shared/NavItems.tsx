'use client'
import { headerLinks } from '@/constant'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function NavItems() {
  const pathname = usePathname();
  return (
    <ul className='md:flex-betwen flex w-full flex-col items-start
    gap-6 md:flex-row'>
        {headerLinks.map((link)=>{
           const isActive =pathname===link.route;
           return (
            <li key={link.route} className={`${isActive && 'text-primary-500'}  flex-center p-medium-16 whitespace-nowrap`}>
              <Link href={link.route}>{link.label}</Link>
            </li>
           )
        })}
    </ul>
  )
}

export default NavItems