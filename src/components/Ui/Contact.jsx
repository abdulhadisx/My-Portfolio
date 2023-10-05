import React from 'react'

const Contact = () => {
    return <section id="contact" className='pb-16'>
        <div className="container">
            <h2 className='text-black font-[700] text-[2.5rem] mb-9'>Get In Touch</h2>
            <div className="md:flex justify-between items-center">
                <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
                    <iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27219.49501087161!2d74.3033236398306!3d31.484673398486155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904106691c4c7%3A0xfb24ddaf1e7bc6c2!2sModel%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1696416748897!5m2!1sen!2s" className='border-0 w-full h-full ' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-headingColor px-4 lg:px-8 py-8 ">
                    <form className="w-full">
                        <div className="mb-5">
                            <input type="text" placeholder='Enter Your Name' className='w-full p-3 focus:outline-none rounded-[5px]' />
                        </div>
                        <div className="mb-5">
                            <input type="email" placeholder='Enter Your Email' className='w-full p-3 focus:outline-none rounded-[5px]' />
                        </div>
                        <div className="mb-5">
                            <input type="text" placeholder='Subject' className='w-full p-3 focus:outline-none rounded-[5px]' />
                        </div>
                        <div className="mb-5">
                            <textarea type="write" placeholder='Enter Your Massage' className='w-full p-3 focus:outline-none rounded-[5px]' />
                        </div>
                        <button className='w-full p-3 focus:outline-none rounded-[5px] hover:bg-black hover:text-white bg-primaryColor font-[700]'>Send Massage</button>
                    </form>
                </div>


            </div>
        </div>

    </section>
}

export default Contact 