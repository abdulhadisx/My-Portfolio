import React from 'react'

const Header = () => {
  return <header className='w-full h-[80px] leading-[80px] flex items-center'>
    <div className="container">
      <div className="flex items-center justify-between">
        {/* ============logo========== */}
        <div className="flex items-center gap-[10px ]">
          <span className="w-[35px] h-[35px] bg-primaryColor text-black text-[18px] font-[800] rounded-full flex items-center justify-center cursor-pointer">AB's</span>
          <div className="leading-[20px]">
            <h2 className="text-xl cursor-pointer text-smallTextColor font-[700] ml-[4px]">Abdulhadi</h2>
            <p className=" cursor-pointer text-smallTextColor text-[14px] ml-[4px]">Personal Portfolio</p>
          </div>
        </div>
        {/* =============menu============== */}
        <div className="menu">
          <ul className='flex items-center gap-10 '>
            <li><a className='text-smallTextColor font-[600]' href="#about">About</a></li>
            <li><a className='text-smallTextColor font-[600]' href="#services">Services</a></li>
            <li><a className='text-smallTextColor font-[600]' href="#portfolio">Portfolio</a></li>
            <li><a className='text-smallTextColor font-[600]' href="#contact">Contact</a></li>
          </ul>
        </div>
        {/* menu end ============================= */}
        {/* menu right=============== */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-black font-[60px] border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:font-[500] hover:text-white ease-in duration-300">
            <span className="text-2xl text-black  "><i class='ri-send-plane-line' /></span>Let's talk</button>
          <span className="text-2xl text-black md:hidden cursor-pointernpmstart"><i class='ri-menu-line' /></span>

        </div>
      </div>
    </div>
  </header>
}

export default Header