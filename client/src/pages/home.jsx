import {useAuthUser} from 'react-auth-kit'
import {FaInstagram,FaYoutube,FaGlobe,FaGithub} from 'react-icons/fa'

function Home() {
  const auth = useAuthUser()

  return (
    <section className='py-4'>
      <div>
        <h1 className='text-center text-3xl font-bold mb-4'>Welcome {auth().name}</h1>
        <div className='about mb-2'>
          <h1 className='text-2xl font-bold'>About</h1>
          <div>
            <p className='text-sm sm:text-lg text-justify sm:leading-[1.3rem]'><span className='font-bold'>Theoyoth Library</span>, this website for record all my books detail. So, I have some books in my racks and I want to record all the books so I know where my book, either in my hand or borrow by friend</p>
          </div>
        </div>
        <div className='creator mb-2'>
          <h1 className='text-2xl font-bold'>Creator</h1>
          <div>
            <img src="/img/avatar.webp" alt="creator avatar" loading="lazy" className='w-[100px]'/>
            <p className='text-sm sm:text-lg'>My name is Theo</p>
          </div>
        </div>
        <div className='social-media'>
          <h1 className='text-2xl font-bold mb-2'>Social media</h1>
          <div className='w-full flex flex-wrap items-center gap-2'>
            <a href="https://theoyoth.vercel.app/" target="_blank" className='w-[110px] py-2 px-4 shadow-md gap-2 font-medium text-xs border-4 border-softblack bg-softwhite hover:bg-blue-600 text-softblack hover:text-softwhite transition-all ease-in-out duration-200 flex items-center justify-center'>Website<span><FaGlobe className='text-lg'/></span></a>
            <a href="https://www.instagram.com/theoyoth/?next=%2F&hl=id" target="_blank" className='w-[110px] py-2 px-4  gap-2 shadow-md font-medium text-xs border-4 border-softblack bg-softwhite hover:bg-gradient-to-r from-[#405DE6] via-[#C13584] to-[#F77737] text-softblack hover:text-softwhite transition-all ease-in-out duration-200 flex items-center justify-center'>Personal<span><FaInstagram className='text-lg'/></span></a>
            <a href="https://www.instagram.com/yothphotos/?next=%2F&hl=id" target="_blank" className='w-[110px] py-2 px-4  gap-2 shadow-md font-medium text-xs border-4 border-softblack bg-softwhite hover:bg-gradient-to-r from-[#405DE6] via-[#C13584] to-[#F77737] text-softblack hover:text-softwhite transition-all ease-in-out duration-200 flex items-center justify-center'>Art<span><FaInstagram className='text-lg'/></span></a>
            <a href="https://www.youtube.com/channel/UCd1DGoZCWy1xPX1K7WvVvFg" target="_blank" className='w-[110px] py-2 px-4 gap-2 shadow-md font-medium text-xs border-4 border-softblack bg-softwhite hover:bg-[#FF0000] text-softblack hover:text-softwhite transition-all ease-in-out duration-200 flex items-center justify-center text-center'>Coding<span><FaYoutube className='text-lg'/></span></a>
            <a href="https://www.youtube.com/channel/UCF3t40-awz3eOb9FqNhcesQ" target="_blank" className='w-[110px] py-2 px-4 gap-2 shadow-md font-medium text-xs border-4 border-softblack bg-softwhite hover:bg-[#FF0000] text-softblack hover:text-softwhite transition-all ease-in-out duration-200 flex items-center justify-center text-center'>Art<span><FaYoutube className='text-lg'/></span></a>
            <a href="https://github.com/theoyoth" target="_blank" className='w-[110px] py-2 px-4 shadow-md gap-2 font-medium text-xs border-4 border-softblack bg-softwhite hover:bg-black text-softblack hover:text-softwhite transition-all ease-in-out duration-200 flex items-center justify-center'>Github<span><FaGithub className='text-lg'/></span></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home