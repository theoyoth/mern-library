import { useFormik } from 'formik';
import {useEffect, useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {useIsAuthenticated} from 'react-auth-kit';
import axios from 'axios'
import * as Yup from 'yup';


function RegisterUser() {
    const isAuthenticated = useIsAuthenticated()
    const navigate = useNavigate();
    const [errormsg,setErrormsg] = useState("")
    const [msg,setMsg] = useState("")

    const schema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        password: Yup.string().required('Password is required'),
    })

    const onSubmit = async (values) => {
        setErrormsg("")
        setMsg("")

        try {
            const regisUser = await axios.post(`${import.meta.env.VITE_BASE_URL}/register`,values)
            if(regisUser.data.success){
                setMsg(regisUser.data.msg)
                setTimeout(()=>{
                    navigate("/login")
                },2000)
            }
            else{
                setErrormsg(regisUser.data.msg)
            }
            
        } catch (error) {
            console.log(error)
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
        if(isAuthenticated()){
            navigate("/")
      }},[isAuthenticated])
  return (
    <section>
        <div className='w-full grid place-items-center'>
        <img src="/img/icon.webp" alt="logo aplikasi" className='rounded-full w-[80px] h-[80px] shadow-md mt-4 border-4 border-softwhite'/>
            <h1 className='text-3xl text-[#d2d2d2] font-bold mt-2 mb-4'>Register</h1>
            <form onSubmit={formik.handleSubmit} className='w-[300px] lg:w-1/2'>
                <div className="mb-2">
                    <label htmlFor="name" className='block text-sm font-medium'>Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name} className='mt-1 block w-full border-gray-200 shadow-sm text-black px-4 py-2 focus:outline-none focus:border-softblack focus:ring-4 focus:ring-softblack'
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
                        value={formik.values.password} className='mt-1 block w-full border-gray-200 shadow-sm text-black px-4 py-2 focus:outline-none focus:border-softblack focus:ring-4 focus:ring-softblack'
                    />
                    {formik.errors.password && formik.touched.password && (
                        <span className="error text-xs text-red-500">{formik.errors.password}</span>
                    )}
                </div>
                {msg !== "" ? <div className='mt-4'>
                    <p className='text-blue-400 text-xs'>{msg}</p>
                </div> : <div className='mt-4'>
                    <p className='text-red-600 text-xs'>{errormsg}</p>
                </div>
                }
                
                <div className='flex justify-between items-end'>
                    <button type="submit" className='mt-4 bg-softwhite hover:bg-blue-600 border-4 border-[#1a1a1a] text-softblack hover:text-softwhite transition-all ease-in-out duration-200 px-8 py-[2px]'>Register</button>
                    <Link to='/login' className='border-b-4 border-softwhite hover:border-softblack'>Login</Link>
                </div>
            </form>
        </div>
    </section>
  )
}

export default RegisterUser