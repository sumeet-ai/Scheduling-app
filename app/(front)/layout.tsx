import  Navbars  from '@/components/frontend/Navbar'
import React, { ReactNode } from 'react'

export default function layout({children}:{children:ReactNode}) {
  return (
    <div>
    
      <Navbars/>
      {children}
      
    </div>
  )
}
