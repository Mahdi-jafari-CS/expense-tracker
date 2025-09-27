import React from 'react'
import { checkUser } from '@/lib/checkUser'

const Navbar = () => {
    const user = checkUser();
  return (
    <div>
      this is some nav bar
    </div>
  )
}

export default Navbar
