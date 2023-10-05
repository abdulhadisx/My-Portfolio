import React from 'react'
const year = new Date().getFullYear()
const Footer = () => {
  return <footer className="bg-[#12141e]">

    {/* ======footer__top======== */}
    <div className="container">
      <div className="sm:flex items-center justify-between md:gap-8">
        <div className="w-full sm:w-1/2">
          <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem] ">Do You Want To Make Beautiful Products?</h2>
          <a href="#contact"> <button className=' bg-primaryColor  flex items-center gap-2 text-black font-[700] border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-white hover:font-[800] hover:text-black ease-in duration-300 '><i class='ri-mail-line' /> Hire Me</button></a>

        </div>
        <div className="w-full sm:w-1/2 ">

          <p className=" leading-7 mt-4 sm:mt-0  text-white">
            Stay connected with us. Follow us on social media for updates, news, and exclusive content. Join our online community today!
          </p>
          <div className="items-center flex gap-4 flex-wrap md:gap-8 mt-10">
            <span className="text-white font-[600] text-[15px] ">Follow Me:</span>
            <span className='w-[35px] h-[35px] bg-black p-1 rounded-[50px] cursor-pointer text-center'>
              <a href="#" className='text-white  font-[500] text-[18px]'><i class='ri-github-line' /></a>
            </span>
            <span className='w-[35px] h-[35px] bg-black p-1 rounded-[50px] cursor-pointer text-center'>
              <a href="#" className='text-white  font-[500] text-[18px]'><i class='ri-facebook-line' /></a>
            </span>
            <span className='w-[35px] h-[35px] bg-black p-1 rounded-[50px] cursor-pointer text-center'>
              <a href="#" className='text-white  font-[500] text-[18px]'><i class='ri-instagram-line' /></a>
            </span>
            <span className='w-[35px] h-[35px] bg-black p-1 rounded-[50px] cursor-pointer text-center'>
              <a href="#" className='text-white  font-[500] text-[18px]'><i class='ri-twitter-line' /></a>
            </span>
          </div>
        </div>


      </div>
      <div >
        <ul className='flex items-center gap-10 mt-10'>
          <li><a className='text-white font-[600]' href="#about">About</a></li>
          <li><a className='text-white font-[600]' href="#services">Services</a></li>
          <li><a className='text-white font-[600]' href="#portfolio">Portfolio</a></li>
          <li><a className='text-white font-[600]' href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
    {/* =============footer__botttom===================== */}
    <div className="bg-[#1b1e29] py-3 mt-14 ">
      <div className="container">
        <div className="flex items-center justify-center  sm:justify-between " >
          <div className="hidden sm:block">
            <div className="flex items-center gap-[10px]">
              <span className='w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center' >AB's</span>
              <div className="leading-[20px] flex justify-center items-center">
                <h2 className="text-[grey] font-[500]  text-[18px] ">AbdulHadi</h2>
                <p className="text-[grey] text-[14px]">Personal Portfolio</p>

              </div>
            </div>
          </div>
          <div className="">
            <p className='text-[grey] text-[14px]   '>Copyright {year} by AbdulHadi - All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer