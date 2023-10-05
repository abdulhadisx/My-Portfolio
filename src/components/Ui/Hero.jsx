import React from 'react'
import heroImg from '../../assets/images/profile-pic.png'
import CountUp from 'react-countup'

const Hero = () => {
    return (
        <section className='pt-0' id='about'>
            <div className="container pt-14">

                <div className="md:flex items-center justify-between sm:flex-col md:flex-row ">
                    {/* =====hero left content================ */}
                    <div className="w-full md:basis-1/2">
                        <h5 className='text-black font-[600] text-[20px]' data-aos='fade-right' data-aos-duration='1500'> Hello welcome</h5>
                        <h1 data-aos='fade-up' data-aos-duration='1500' className='text-black font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5' >I'm Abdulhadi <br />React.Js Developer</h1>
                        <div data-aos='fade-right' data-aos-duration='1800' data-aos-delay='200' className="flex items-center gap-6 mt-7">
                            <a href="#contact"> <button className=' bg-primaryColor  flex items-center gap-2 text-black font-[700] border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-white hover:font-[800] hover:text-black ease-in duration-300 '><i class='ri-mail-line' /> Hire Me</button></a>
                            <a href="#portfolio" className='text-smallTextColor font-[700] text-[16px] border-b border-solid hover:border-black'>See Portfolio</a>


                        </div>
                        <p data-aos='fade-left ' data-aos-duration='1800' className='flex gap-2 text-black font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10 mt-14'>  <i class='ri-apps-2-line' />LWelcome to My Portfolio: Discover my journey through web development. Explore projects, skills, and experiences that define my passion for creating stunning digital solutions</p>
                        <div className="flex items-center gap-9 mt-14"><span className='text-black text-[15px] font-[600]'>Follow Me</span>
                            <span>
                                <a href="#youtube" className='text-black text-[18px] font-[600]'><i class='ri-youtube-line' /></a>
                            </span>
                            <span>
                                <a href="#linkedin" className='text-black text-[18px] font-[600]'><i class='ri-linkedin-line' /></a>
                            </span>
                            <span>
                                <a href="#github" className='text-black text-[18px] font-[600]'><i class='ri-github-line' /></a>
                            </span>
                            <span>
                                <a href="#twitter" className='text-black text-[18px] font-[600]'><i class='ri-twitter-line' /></a>
                            </span>
                            <span>
                                <a href="#instagram" className='text-black text-[18px] font-[600]'><i class='ri-instagram-line' /></a>
                            </span>
                        </div>
                    </div>

                    {/* ==========heading left end============== */}
                    {/*=============== hero img===================== */}
                    <figure className='flex items-center justify-center'>

                        <img src={heroImg} alt="" className='max-h-[350px]' />
                    </figure>
                    {/*=============== hero img end===================== */}
                    {/* ============hero-content right================ */}
                    <div className="flex md:basis1/2 justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
                        <div className="mb-10">
                            <h2 className=' text-black font-[700] text-[32px] '>
                                <CountUp start={0} end={0} duration={2} suffix='+' />
                            </h2>
                            <h4 className=' text-black font-[500] text-[28px] '>Years Of Experience</h4>
                        </div>
                        <div className="mb-10">
                            <h2 className=' text-black font-[700] text-[32px] '>
                                <CountUp start={0} end={100} duration={2} suffix='%' />
                            </h2>
                            <h4 className=' text-black font-[500] text-[28px] '>Success Rate</h4>
                        </div>
                        <div className="mb-10">
                            <h2 className=' text-black font-[700] text-[32px] '>
                                <CountUp start={0} end={150} duration={2} suffix='+' />
                            </h2>
                            <h4 className=' text-black font-[500] text-[28px] '>Happy Clients </h4>
                        </div>
                        <div className="mb-10">
                            <h2 className=' text-black font-[700] text-[32px] '>
                                <CountUp start={0} end={70} duration={2} suffix='+' />
                            </h2>
                            <h4 className=' text-black font-[500] text-[28px] '>Projects Completed</h4>
                        </div>
                    </div>



                    {/* ============hero-content right end================ */}
                </div>
            </div>
        </section>
    )
}

export default Hero