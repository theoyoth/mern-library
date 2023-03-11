import * as Yup from "yup";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const configSwal = () => {
    return withReactContent(Swal)
}

export const configSwalModal = async () => {
    const MySwal = configSwal()
    return (
        MySwal.fire({
        title: 'are you sure?',
        icon: 'warning',
        showDenyButton: true,
        confirmButtonText: 'yes',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        denyButtonText: 'no',
        customClass:{
          popup: 'bg-confirm',
          title: 'title-confirm',
          icon:'icon-confirm'
        }
    })
    )
}
    
export const configSwalToast = () => {
    const MySwal = withReactContent(Swal)
    const Toast = MySwal.mixin({
        toast: true,
        position: 'top-right',
        showConfirmButton: false,
        timer: 1400,
        timerProgressBar: false
    })
    const ToastSuccess = (msg) => {
        Toast.fire({
            title:msg,
            icon:'success',
            iconColor: 'lightgreen'
        })
    }
    const ToastError = (msg) => {
        Toast.fire({
            title:msg,
            icon:'error',
            iconColor: 'red'
        
        })
    } 

    return {ToastSuccess, ToastError}
}

export const configYup = () => {
    return (
        Yup.object().shape({
            title: Yup.string().required("Title is required"),
            author: Yup.string().required("Author is required"),
            genre: Yup.string().required("Genre is required"),
            status: Yup.string().required("Status is required"),
            information: Yup.string().required("Information is required"),
            summary: Yup.string()
        }))
}

export const configYupAuth = () => {
    return (
        Yup.object().shape({
            name: Yup.string().required('Name is required'),
            password: Yup.string().min(6,'password should at least 6 characters').required('Password is required'),
        })
    )
}