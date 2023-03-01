import axios from 'axios';

export const fetchAllBooks = (setBooks) => {
    const source = axios.CancelToken.source();
    axios.get(`${import.meta.env.VITE_BASE_URL}/book`,{ cancelToken: source.token}).then(res => {
        if(res?.data?.success){
            setBooks(res?.data?.data)
            return source.cancel()
        }
    }).catch(err => {
        if(axios.isCancel(err)) {
            console.log("cancel fetch")
        }
    })
}
export const deleteBookById = async (id) => {
    const res = await axios.delete(`${import.meta.env.VITE_BASE_URL}/book/${id}`)
    if(res.data?.success){
        return res?.data
    }else{
        console.error(err)
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

export const getBookbyId = async (id,setBook) => {
    const source = axios.CancelToken.source();
    axios.get(`${import.meta.env.VITE_BASE_URL}/book/${id}`,{ cancelToken: source.token})
    .then(res => {
        setBook({title: res.data?.data?.title, author: res.data?.data?.author, genre: res.data?.data?.genre.toString(), information: res.data?.data?.information})
        return source.cancel();
    })
    .catch(err => {
        if(axios.isCancel(err)) {
            console.log("cancel fetch")
        }
    })
}