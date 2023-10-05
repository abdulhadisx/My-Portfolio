import React from 'react'

import Forntend from '../../assets/images/front-end.png'
const Service = () => {
    return (
        <section id="services ">
            <div className="container lg:pt-5">
                <div className="text-center">
                    <h2 className="text-black text-[2.4rem] font-[800] mb-5 "> Unlocking the Power of Front-End Development</h2>
                    <p className='lg:max-w-[600px] lg:mx-auto tect-black font-[500]
                    text-[16px] leading-7'> I offer my expertise as a Front-End Developer. I specialize in crafting captivating and user-friendly web interfaces that leave a lasting impression. With a keen eye for design and a commitment to seamless functionality, I bring digital concepts to life. Whether you need a responsive website, an interactive application, or a fresh user interface, I'm here to transform your ideas into reality. Explore the range of services I offer, and let's collaborate to create exceptional digital experiences that resonate with your audience.</p>
                </div>
                <div className="flex flex-col justify-center sm:py-12 ">
                    <div className="w-full py-3 px-2 sm:mx-auto  sm:px-0">
                        <div className="relative text-grey-700 antialiased text-sm font-semibold ">
                            {/* =============vertical line running in middle ================*/}
                            <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2 "></div>
                            {/* ==========================leftcard=================== */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">

                                    <div className="flex justify-start w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div data-aos='fade-in' data-aos-duration='1200' className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                                <h3 className='text-primaryColor font-[700] mb-3  group-hover:text-white group-hover:font-[600] text-2xl '>Front-End Developer</h3>
                                                <p className='text-[15px] text-back group-hover:text-white group-hover:font-[500] '>Unlocking the Web's Potential: Proficient in HTML, CSS, JavaScript, and React.js, Tailwind, Bootstrap  I craft visually stunning and highly interactive websites. My expertise lies in blending creativity with technical precision to deliver captivating and user-friendly digital experiences that leave a lasting impact. Explore my portfolio to see the magic unfold..</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 items-center justify-center ">
                                        <figure>
                                            <img src={Forntend} alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            {/* ===============right card=================== */}


                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">

                                    <div className="flex justify-end w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div data-aos='fade-in' data-aos-duration='1200' className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                                <h3 className='text-primaryColor font-[700] mb-3  group-hover:text-white group-hover:font-[600] text-2xl '>Web Development</h3>
                                                <p className='text-[15px] text-back group-hover:text-white group-hover:font-[500] '>Front-end development with React.js is my passion. I specialize in crafting dynamic and user-friendly interfaces that elevate web experiences. With expertise in HTML, CSS, and JavaScript, I bring creativity and precision to every project, ensuring seamless interactions and stunning visuals. Let's transform your ideas into engaging digital solutions.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 items-center justify-center ">
                                        <figure>
                                            <img src={Forntend} alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>


                            {/* ==========second left card=========== */}


                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Service