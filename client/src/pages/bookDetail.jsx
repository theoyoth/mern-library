import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import Title from "../components/TitlePage"

const bookDetail = () => {
    const params = useParams()
    const [book, setBook] = useState([])

    useEffect(() => {
        const source = axios.CancelToken.source();
        axios.get(`${import.meta.env.VITE_LOCAL_BASE_URL}/book/${params.id}`,{ cancelToken: source.token}).then(res => {
            setBook(res.data.data)
        }).catch(err => {
        if(axios.isCancel(err)) {
            console.log("cancel fetch")
        }
        })

        return () => {
        source.cancel();
        }
    },[params.id])
    
  return (
    <div className="py-4">
        <Title title="Detail book" />
        <div className="relative overflow-x-auto mt-4">
            <div>
                <h1 className="text-xl font-bold">Title</h1>
                <p>{book?.title}</p>
            </div>
            <div className="mt-4">
                <h1 className="text-xl font-bold">Author</h1>
                <p>{book?.author}</p>
            </div>
            <div className="mt-4">
                <h1 className="text-xl font-bold">Genre</h1>
                <p>{book?.genre}</p>
            </div>
            <div className="mt-4">
                <h1 className="text-xl font-bold">Status</h1>
                <p>{book?.status}</p>
            </div>
            <div className="mt-4">
                <h1 className="text-xl font-bold">Information</h1>
                <p>{book?.information}</p>
            </div>
            <div className="mt-4">
                <h1 className="text-xl font-bold">Summary</h1>
                <p>{book?.summary}</p>
            </div>

        </div>
    </div>
  )
}

export default bookDetail