import React, { useEffect, useState } from 'react'
import data from '../../assets/data/portfolioData'


const Portfolio = () => {
  const [portfolios, setPortfolios] = useState(data)
  const [selectTab, setSelectTab] = useState('all')
  useEffect(() => {
    if (selectTab === 'all') {
      setPortfolios(data);
    }
    if (selectTab === 'web-design') {

      const filterData = data.filter(item => item.category === 'Web Design')
      setPortfolios(filterData)
    }
    if (selectTab === 'ux-design') {

      const filterData = data.filter(item => item.category === 'Ux')
      setPortfolios(filterData)
    }

  }, [selectTab]);

  return <section id='portfolio'>
    <div className="container">
      <div className="flex items-center justify-between flex-wrap ">
        <div className="mb-7 sm:mb-0">
          <h3 className='text-black text-[2rem]  font-[700]'>My Recent Projects</h3>
        </div>
        <div className="flex gap-3">
          <button onClick={() => setSelectTab('all')} className="text-black border border-solid border-black py-2 px-4 rounded-[8px] hover:bg-black hover:text-white">ALL</button>
          <button onClick={() => setSelectTab('web-design')} className="text-black border border-solid border-black py-2 px-4 rounded-[8px] hover:bg-black hover:text-white">Web Designs</button>
          <button onClick={() => setSelectTab('ux-design')} className="text-black border border-solid border-black py-2 px-4 rounded-[8px] hover:bg-black hover:text-white">React.js</button>
          <button className="text-black border border-solid border-black py-2 px-4 rounded-[8px] hover:bg-black hover:text-white">Javascript</button>
        </div>
      </div>
      <div className="flex items-center gap-4 flex-wrap mt-12">
        {
          data?.map((portfolio, index) => (
            <div data-aos='fade-zoom-in' data-aos-delay='50' data-aos-duration='1000' className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]' >
              <figure>
                <img src={portfolio.imgUrl} alt="" className='rounded-[8px] ' />
              </figure>
              <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                <div className="w-full h-full flex items-center justify-center">
                  <button className=' border border-solid bg-white text-black border-black py-2 px-4 rounded-[8px] hover:bg-headingColor font-[500] ease-in duration-200'>See Details</button>
                </div>

              </div>
            </div>
          ))
        }
      </div>
    </div>
  </section>
}

export default Portfolio