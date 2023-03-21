import { useState } from 'react'
// import rrd
import {Link} from 'react-router-dom'
// react-query
import { useQuery } from 'react-query'
// api request
import { fetchAllBooks } from '../api';
// import components
import Title from '../components/TitlePage';
import Booklist from '../components/Booklist';

const book = () => {
  const [search, setSearch] = useState("")

  // fetch all books from Database
  const { status, data } = useQuery("books", fetchAllBooks)

  return (
    <section className='h-[90vh]'>
      <Title title='Book list' />
      <div className='flex justify-between items-center'>
        <Link to="/post" className='px-2 py-2 border-4 border-softblack transition-all duration-400 ease-in-out bg-softwhite hover:bg-blue-600 text-softblack hover:text-softwhite text-sm sm:text-[16px]'>add book</Link>
        <div className='flex gap-2 items-center border border-black'>
          <input required
              type="text"
              name="search"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="search book"
              className='block w-[150px] sm:w-full shadow-sm text-black px-4 py-2 focus:outline-none bg-softwhite focus:border-softblack focus:ring-4 focus:ring-softblack text-sm sm:text-[16px]'
          />
        </div>
      </div>

      {status === 'loading' && <p className='mt-2'>Loading...</p>}
      {status === 'error' && <p className='mt-2'>there is problem when fetching data</p>}
      {
        status === 'success' && data?.length > 0 && (
          <div className="relative overflow-x-auto mt-4">
            <Booklist data={data} search={search} />
          </div>)
        // ) : (
        //   <p className='mt-4 text-xl'>There is no book</p>
        // )
      } 

    </section>
  )
}

export default book