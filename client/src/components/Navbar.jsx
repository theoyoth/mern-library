// import rrd
import { NavLink, useNavigate } from 'react-router-dom'
// import react auth
import { useSignOut } from 'react-auth-kit'
// import icon
import { BiLogOut } from 'react-icons/bi'


const Navbar = () => {
  const navigate = useNavigate()
  const signOut = useSignOut()
  const logout = () => {
    signOut()
    navigate("/login")
  }

  return (
    <nav className='w-full py-2 flex justify-center'>
        <ul className='w-1/2 flex justify-around items-center'>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/book">Book</NavLink>
            </li>
        </ul>
        <button onClick={() => logout()} className='px-4 py-[2px] bg-softwhite hover:bg-red-700 text-softblack hover:text-softwhite border-4 border-softblack transition-all duration-200 ease-in-out flex items-center gap-[4px]'><BiLogOut /><span className='hidden md:block'>Logout</span></button>
    </nav>
  )
}

export default Navbar