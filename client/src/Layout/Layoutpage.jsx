import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'

import {useIsAuthenticated} from 'react-auth-kit';

function Layoutpage() {
  const isAuthenticated = useIsAuthenticated()

  return (
    <div className='h-full text-[#d2d2d2] md:px-[10rem] lg:px-[20rem] px-[2rem] py-2 overflow-x-hidden'>
      {isAuthenticated() && <Navbar />}
      <Outlet />
    </div>
  )
}

export default Layoutpage