import axios from 'axios';
import { configSwalModal, configSwalToast } from '../lib';

export const fetchAllBooks = async () => {
    try{
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/book`)
        if(res?.data.success){
            return res?.data?.data
        }
        else{
            throw new Error(res?.data.msg)
        }
    }
    catch(error){
        console.log("cannot fetch all books")
    }
}
export const postBook = async (values) => {
    try{
        const post = await axios.post(`${import.meta.env.VITE_BASE_URL}/book`,values)
        return post?.data
    }
    catch(error){
        throw new Error(error)
    }
}
export const deleteBookById = async (id) => {
    const {ToastSuccess,ToastError} = configSwalToast()
    try {
        const Swal = await configSwalModal()
        if (Swal.isConfirmed) {
            const res = await axios.delete(`${import.meta.env.VITE_BASE_URL}/book/${id}`)
            if(res.data?.success){
                ToastSuccess(res?.data.msg)
                return res?.data
            }else{
                ToastError(res?.data.msg)
            }
        }
    }
    catch(error){
        console.log("cannot delete book")
    }
}

export const onUpdate = async (id,values) => {
    try {
        const postBook = await axios.put(`${import.meta.env.VITE_BASE_URL}/book/${id}`,values)
        if(postBook.data?.success){
          return postBook?.data
        } else{
          return postBook?.data
        }
    } catch (error) {
        console.log(error)
    }
}

export const getBookbyId = async (id) => {
    try{
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/book/${id}`)
        return res?.data?.data
    }
    catch(error){
        throw new Error(error)
    }
     
}

export const loginUser = async (values) => {
    try{
        const user = await axios.post(`${import.meta.env.VITE_BASE_URL}/login`,values)
        return user?.data
    }
    catch(err){
        throw new Error(err)
    }
}

export const registerUser = async (values) => {
    try{
        const regisUser = await axios.post(`${import.meta.env.VITE_BASE_URL}/register`,values)
        return regisUser?.data
    }
    catch(err){
        throw new Error(err)
    }
}