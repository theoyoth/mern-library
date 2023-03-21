import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'

import {useIsAuthenticated} from 'react-auth-kit';

const date = new Date()

function Layoutpage() {
  const isAuthenticated = useIsAuthenticated()

  return (
    <div className='h-full text-[#d2d2d2] md:px-[10rem] lg:px-[20rem] px-[2rem] py-2 overflow-x-hidden'>
      {isAuthenticated() && <Navbar />}
      <Outlet />
      <p className='text-[10px] text-center absolute left-[50%] bottom-[15px] -translate-x-[50%]'>&copy;{date.getFullYear()} | Theoyoth | All rights reserved.</p>
    </div>
  )
}

export default Layoutpage