// import icon
import { BiPencil, BiTrash,BiRightArrowAlt,BiBookAlt,BiUser} from "react-icons/bi";
// import rrd
import {Link} from 'react-router-dom'
// import react-query
import {useQueryClient, useMutation} from "react-query"

// import helper
import { deleteBookById } from "../api";

const Booklist = ({data,search}) => {
    const queryClient = useQueryClient();

    const deleteBook = useMutation((id) => deleteBookById(id),{
      onSuccess: () => {
        queryClient.invalidateQueries("books");
      }
    })

  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
        {data.filter(bookData => bookData.title.toLowerCase().includes(search.toLowerCase())).map(book => (
          <div className="px-6 py-4 bg-blue-900 border-4 border-softblack" key={book._id}>
            <div className='flex gap-2 items-baseline'>
              <span><BiBookAlt/></span>
              <h5 className="text-xl font-bold tracking-tight text-softwhite">{book.title}</h5>
            </div>
            <div className='flex gap-2 items-center mb-2'>
              <span><BiUser/></span>
              <p className='text-sm'>{book.author}</p>
            </div>
            <div className='flex gap-2'>
                <button aria-label="button delete function" className='px-3 py-2 bg-red-600 transition-all ease-in-out duration-200 hover:bg-red-700 flex items-center' onClick={() => deleteBook.mutate(book._id)}>
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
  )
}

export default Booklist