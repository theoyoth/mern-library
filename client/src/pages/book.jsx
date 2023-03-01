import { useEffect, useState } from 'react'
import axios from 'axios'
import { BiPencil, BiTrash,BiRightArrowAlt,BiBookAlt,BiUser} from "react-icons/bi";
import {Link} from 'react-router-dom'

import Title from '../components/TitlePage';
import { configSwalModal, configSwalToast } from '../lib';
import { deleteBookById} from '../api';

const book = () => {
  const [search, setSearch] = useState('')
  const [books, setBooks] = useState([])
  
  // config Swal Toast
  const {ToastSuccess,ToastError} = configSwalToast()

  // fetch all books from Database
  useEffect(() => {
    const source = axios.CancelToken.source();
    axios.get(`${import.meta.env.VITE_BASE_URL}/book`,{ cancelToken: source.token}).then(res => {
      if(res?.data?.success){
        setBooks(res?.data?.data)
      }
    }).catch(err => {
      if(axios.isCancel(err)) {
          console.log("cancel fetch")
      }
    })

    return () => {
      source.cancel()
    }
  },[])

  // delete book by id
  const deleteBook = async (_id) => {
    const Swal = await configSwalModal()
    if (Swal.isConfirmed) {
      const res = await deleteBookById(_id);
        if(res?.success){
          const filterBook = books.filter(book => book._id !== _id)
          setBooks(filterBook)
          ToastSuccess(res?.msg)
        }
        else{
          ToastError(res?.msg)
        }
    }
  }
  
  return (
    <section className='h-[90vh] py-4'>
      <Title title='Book list' />
      <div className='flex justify-between items-center'>
        <Link to="/post" className='px-2 py-2 border-4 border-softblack transition-all duration-400 ease-in-out bg-softwhite hover:bg-blue-600 text-softblack hover:text-softwhite text-sm sm:text-[16px]'>add book</Link>
        <div className='flex gap-2 items-center'>
          <input required
              type="text"
              name="search"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="search book"
              className='block w-full shadow-sm text-black px-4 py-2 focus:outline-none bg-softwhite focus:border-softblack focus:ring-4 focus:ring-softblack text-sm sm:text-[16px]'
          />
        </div>
      </div>

      <div className="relative overflow-x-auto mt-4">
      <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-2'>
        {books.filter(book => book.title.toLowerCase().includes(search.toLocaleLowerCase())).map(book => (
          <div className="px-6 py-4 bg-blue-900 border-4 border-softblack" key={book._id}>
            <div className='flex gap-2 items-baseline'>
              <span><BiBookAlt/></span>
              <h5 className="text-xl font-bold tracking-tight text-softwhite">{book.title}</h5>
            </div>
            <div className='flex gap-2 items-center mb-2'>
              <span><BiUser/></span>
              <p className='text-lg'>{book.author}</p>
            </div>
            <div className='flex gap-2'>
                <button aria-label="button delete function" className='px-3 py-2 bg-red-600 transition-all ease-in-out duration-200 hover:bg-red-700 flex items-center' onClick={() => deleteBook(book._id)}>
                    <BiTrash />
                </button>
                <Link to={`/book/edit/${book._id}`} aria-label="link to go to edit page" className='px-3 py-2 bg-green-700 hover:bg-green-800 transition-all ease-in-out duration-200 flex items-center'>
                    <BiPencil />
                </Link>
                <Link to={`/book/${book._id}`} className="inline-flex items-center px-4 text-xs text-center text-white bg-blue-700 hover:bg-blue-800 group">
                    more
                    <BiRightArrowAlt className='transition-all duration-100 group-hover:translate-x-[2px]'/>
                </Link>
            </div>
        </div>
        ))}
      </div>
      </div>
    </section>
  )
}

export default book