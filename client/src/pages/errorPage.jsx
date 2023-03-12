// import rrd
import { Link, useRouteError } from "react-router-dom";
// import icon
import {BiHomeAlt} from "react-icons/bi"

const errorPage = () => {
    const error = useRouteError();
  
    return (
      <div id="errorPage" className="px-[1rem] lg:px-[20rem]">
        <img src="/img/404.webp" alt="404 icon" className="w-[400px] m-auto"/>
        <div className="text-center text-3xl text-[#d2d2d2]">
            <p className="text-medium">Sorry, it looks like you get lost.</p>
            <p className="font-semibold">
            <i>{error.statusText || error.message}</i>
            </p>
        </div>
        <div className="flex justify-center mt-4">
            <Link to="/" className='flex items-center gap-2 px-3 py-2 bg-softwhite border-4 border-softblack hover:bg-blue-600 transition-all ease-in-out duration-200 font-medium'><span><BiHomeAlt /></span>Back to home</Link>
        </div>
      </div>
    );
}

export default errorPage