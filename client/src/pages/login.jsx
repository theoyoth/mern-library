import {useEffect, useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useSignIn,useIsAuthenticated } from 'react-auth-kit'
import { useFormik } from 'formik';
import axios from 'axios'
// import config
import { configYupAuth } from '../lib';

function Loginpage() {
    const [errormsg,setErrormsg] = useState("")
    const [isLogin, setIsLogin] = useState(false)
    const navigate = useNavigate()
    const signIn = useSignIn()
    const isAuthenticated = useIsAuthenticated()

    const schema = configYupAuth()

    const onSubmit = async (values) => {
        setErrormsg("")
        try {
            setIsLogin(true)
            const user = await axios.post(`${import.meta.env.VITE_BASE_URL}/login`,values)
            if(user.data?.success){
                const saveToken = signIn(
                    {
                        token: user.data.token,
                        expiresIn:3600,
                        tokenType: "Bearer",
                        authState: {name:user.data.name},
                    })
                setIsLogin(false)
                if(saveToken){
                    window.location.href = "https://booklibraryapp.vercel.app/"
                }     
            } else{
                setIsLogin(false)
                setErrormsg(user.data?.msg)
            }
        } catch (error) {
            console.log(error)
            setIsLogin(false)
        }
    }
    const formik = useFormik({
        initialValues: {
          name: '',
          password: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            onSubmit(values)
        },
    });

      useEffect(() => {
        if(isAuthenticated()) return navigate("/")
      },[isAuthenticated])
  return (
    <section>
        <div className='w-full grid place-items-center relative'>
            <img src="/img/icon.webp" alt="logo aplikasi" className='rounded-full w-[80px] h-[80px] shadow-md mt-4 border-4 border-softwhite'/>
            <h1 className='text-3xl text-[#d2d2d2] font-bold mt-2 mb-4'>Login</h1>
            <form onSubmit={formik.handleSubmit} className='sm:w-1/2'>
                <div className="mb-2">
                    <label htmlFor="name" className='block text-sm font-medium'>Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name} className='mt-1 block w-full shadow-sm text-black px-4 py-2 focus:outline-none focus:border-softblack focus:ring-4 focus:ring-softblack'
                    />
                    {formik.errors.name && formik.touched.name && (
                        <span className="error text-xs text-red-500">{formik.errors.name}</span>
                    )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="password" className='block text-sm font-medium'>Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password} className='mt-1 block w-full border-gray-200 shadow-sm text-black px-4 py-2 focus:outline-none focus:border-softblack focus:ring-4 focus:ring-softblack'
                    />
                    {formik.errors.password && formik.touched.password && (
                        <span className="error text-xs text-red-500">{formik.errors.password}</span>
                    )}
                </div>
                <div className='mt-4'>
                    <p className='text-xs text-red-600'>{errormsg}</p>
                </div>
                <div className='flex justify-between items-end'>
                    <button type="submit" className={`mt-4 bg-softwhite hover:bg-blue-600 border-4 border-[#1a1a1a] text-softblack hover:text-softwhite transition-all ease-in-out duration-200 px-8 py-[2px] ${isLogin ? 'opacity-50' : 'opacity-100'}`} disabled={isLogin}>
                    {isLogin 
                    ? <span>login...</span> 
                    : <span>Login</span>}
                    </button>
                    <Link to='/register' className='border-b-4 border-softwhite hover:border-softblack'>Register</Link>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Loginpage
