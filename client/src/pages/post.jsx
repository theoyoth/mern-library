// import formik
import {useFormik} from "formik";
// import rrd
import { useNavigate } from "react-router-dom";
// import react-query
import { useMutation} from "react-query";

// import component
import Title from "../components/TitlePage";
// import helper
import {configYup,configSwalToast} from "../lib"
import { postBook } from "../api";

const Post = () => {
  const navigate = useNavigate();
  
  const {ToastSuccess,ToastError} = configSwalToast()
  const schema = configYup()

  const usePostBook = useMutation((values) => postBook(values))

    const formik = useFormik({
        initialValues: {
          title: '',
          author: '',
          genre: [],
          status:'',
          information: '',
          summary:'',
        },
        validationSchema: schema,
        onSubmit: values => {
            usePostBook.mutate(values,{
              onSuccess:(res) => {
                ToastSuccess(res?.msg)
                navigate("/book")
              },
              onError:(res) => {
                ToastError(res?.msg)
              }
            })
        },
    });

  return (
    <div className="mt-5 md:col-span-2 md:mt-0">
      <Title title="Add new book" />
      <form className='shadow-md' onSubmit={formik.handleSubmit}>
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6 text-black">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="title" className="block text-sm font-medium text-[#d2d2d2]">
                  title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.title}
                  className="mt-1 block w-full px-4 py-2 shadow-sm bg-softwhite focus:outline-none focus:border-softblack focus:ring-4 focus:ring-softblack"
                />
                {formik.errors.title && formik.touched.title && (
                    <span className="error text-xs text-red-500">{formik.errors.title}</span>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="author" className="block text-sm font-medium text-[#d2d2d2]">
                  author
                </label>
                <input
                  type="text"
                  name="author"
                  id="author"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.author}
                  className="mt-1 block w-full px-4 py-2 shadow-sm bg-softwhite focus:outline-none focus:border-softblack focus:ring-4 focus:ring-softblack"
                />
                {formik.errors.author && formik.touched.author && (
                    <span className="error text-xs text-red-500">{formik.errors.author}</span>
                )}
              </div>

              <div className="col-span-6 lg:col-span-3">
                <label htmlFor="genre" className="block text-sm font-medium text-[#d2d2d2]">
                  genre
                </label>
                <input
                  type="text"
                  name="genre"
                  id="genre"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.genre}
                  className="mt-1 block w-full px-4 py-2 shadow-sm bg-softwhite focus:outline-none focus:border-softblack focus:ring-4 focus:ring-softblack"
                />
                {formik.errors.genre && formik.touched.genre && (
                    <span className="error text-xs text-red-500">{formik.errors.genre}</span>
              )}
              </div>

              <div className="col-span-6 lg:col-span-3">
                <label htmlFor="status" className="block text-sm font-medium text-[#d2d2d2]">
                  status
                </label>
                <select name="status" id="status" onChange={formik.handleChange}
                  onBlur={formik.handleBlur} value={formik.values.status} className="mt-1 block w-full px-4 py-2 shadow-sm bg-softwhite focus:outline-none focus:border-softblack focus:ring-4 focus:ring-softblack">
                  <option disabled></option>
                  <option value="Di tangan">Di tangan</option>
                  <option value="Pinjam">Pinjam</option>
                </select>
                {formik.errors.status && formik.touched.status && (
                    <span className="error text-xs text-red-500">{formik.errors.status}</span>
              )}
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-6">
                <label htmlFor="information" className="block text-sm font-medium text-[#d2d2d2]">
                  information
                </label>
                <textarea
                  type="text"
                  name="information"
                  id="information"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.information}
                  className="mt-1 block w-full px-4 py-2 shadow-sm bg-softwhite focus:outline-none focus:border-softblack focus:ring-4 focus:ring-softblack"
                />
                {formik.errors.information && formik.touched.information && (
                    <span className="error text-xs text-red-500">{formik.errors.information}</span>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-6">
                <label htmlFor="summary" className="block text-sm font-medium text-[#d2d2d2]">
                  summary
                </label>
                <textarea
                  type="text"
                  name="summary"
                  id="summary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.summary}
                  className="mt-1 block w-full px-4 py-2 shadow-sm bg-softwhite focus:outline-none focus:border-softblack focus:ring-4 focus:ring-softblack"
                />
                {formik.errors.summary && formik.touched.summary && (
                    <span className="error text-xs text-red-500">{formik.errors.summary}</span>
                )}
              </div>
            </div>
          </div>
          <div className="px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center border-4 border-softblack bg-softwhite py-2 px-4 text-sm font-medium text-softblack hover:text-softwhite shadow-sm hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Post