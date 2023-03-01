import {NavLink, useNavigate} from 'react-router-dom'
import { useSignOut } from 'react-auth-kit'


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
        <button onClick={() => logout()} className='px-4 bg-softwhite hover:bg-red-700 text-softblack hover:text-softwhite border-4 border-softblack transition-all duration-200 ease-in-out'>Logout</button>
    </nav>
  )
}

export default Navbar