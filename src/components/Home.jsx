import Nav from './Nav'
import Footer from './Footer'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const Home = () => {
    return (
        <div>
            <Nav />
            <div>
                <header className='grid grid-cols-2 p-24 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  animate__animated animate__fadeIn'>
                    <div>
                        <img
                            src='./images/faculty.jpg'
                            className='w-3/4 rounded-full animate__animated animate__pulse border border-2 shadow-xl'
                        />
                    </div>
                    <div className='flex flex-col gap-8 justify-center'>
                        <h1 className='text-7xl font-bold text-white'>" Say Hello!</h1>
                        <p className='text-2xl font-semibold'>Enjoy complete digital learning experience with CodeSchool </p>
                        <div className='flex gap-4'>
                            <button className='bg-[#100d22] text-white px-12 py-4 rounded-md text-lg hover:bg-orange-600'>Learn More</button>
                            <button className='border border-2 border-[#100d22] text-[#100d22] px-12 py-4 rounded-md text-lg font-semibold'>Watch Video</button>
                        </div>
                    </div>
                </header>

                <div className='p-24'>
                    <h1 className='text-center text-4xl font-bold'>Benefits & Advantages</h1>
                    <p className='text-gray-600 text-center mt-2 text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque sit ducimus quibusdam. Ratione vel sed quisquam, delectus velit hic non voluptas, consectetur perferendis quidem facilis voluptatum ipsam totam, quo ipsa? </p>
                    <div className='w-11/12 mx-auto mt-12 grid grid-cols-3 gap-8'>
                        <div className='shadow-lg border rounded-md p-4 text-center'>
                            <i className='ri-presentation-fill text-6xl'></i>
                            <h1 className='text-2xl font-semibold mb-3'>Great Faculty</h1>
                            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, numquam! </p>
                        </div>

                        <div className='shadow-lg border rounded-md p-4 text-center'>
                            <i className='ri-edit-box-line text-6xl'></i>
                            <h1 className='text-2xl font-semibold mb-3'>Latest curriculum</h1>
                            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, numquam! </p>
                        </div>

                        <div className='shadow-lg border rounded-md p-4 text-center'>
                            <i className='ri-tree-line text-6xl'></i>
                            <h1 className='text-2xl font-semibold mb-3'>Green Environment</h1>
                            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, numquam! </p>
                        </div>

                    </div>
                </div>

                <div className='grid grid-cols-2 p-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                    <div>
                        <Swiper className="mySwiper w-6/12 bg-black">
                            <SwiperSlide>
                                <img src='./images/s1.jfif' className='w-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='./images/s2.jfif' className='w-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='./images/s3.jfif' className='w-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='./images/s4.jfif' className='w-full' />
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div>
                        <div className='flex flex-col gap-8 justify-center'>
                            <h1 className='text-7xl font-bold'>" Say Hello!</h1>
                            <p className='text-2xl font-semibold'>Enjoy complete digital learning experience with CodeSchool </p>
                            <div className='flex gap-4'>
                                <button className='bg-[#100d22] text-white px-12 py-4 rounded-md text-lg hover:bg-orange-600'>Learn More</button>
                                <button className='border border-2 border-[#100d22] text-[#100d22] px-12 py-4 rounded-md text-lg font-semibold'>Watch Video</button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <Footer />
        </div>
    )
}

export default Home