// import rrd
import { useParams } from "react-router-dom"
// import react-query
import { useQuery } from "react-query"

// import components
import Title from "../components/TitlePage"
// import helper
import { getBookbyId } from "../api"

const bookDetail = () => {
    const {id:bookId} = useParams()
    // get book by id
    const {status,data:book} = useQuery(['book',bookId], () => getBookbyId(bookId))
    
  return (
    <div className="py-4">
        <Title title="Detail book" />
        {status === "loading" && <div>Loading...</div>}
        {status === "error" && <div>error when fetching</div>}
        {status === "success" && (
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
        )}
    </div>
  )
}

export default bookDetail