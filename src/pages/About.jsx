import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { useLoaderData } from "react-router-dom";
import avater from "../assets/avater.jpg"

const About = () => {
    const reviews = useLoaderData();
    return (
        <div className="poppins">
            <h1 className="text-center text-4xl font-bold mt-4 md:mt-8 max-w-[1550px] w-[90%] mx-auto ">About Us</h1>
            <div className="max-w-[1550px] w-[90%] mx-auto flex flex-col-reverse lg:flex-row justify-center items-center gap-6">
                <div className="flex-1 md:px-8 space-y-4">
                    <h1 className="text-sm font-bold text-green-800">DISCOVER STORY</h1>
                    <p className="text-3xl">Our Story</p>
                    <p className="text-sm">Welcome to my corner of the world, where ancient history meets vibrant culture, and every alleyway whispers tales of antiquity. My journey through the Middle East wasnt just about visiting landmarks; it was about immersing myself in a tapestry of traditions, flavors, and experiences that left an indelible mark on my soul.</p>
                    <br />
                    <p className="text-sm">It all began with a desire to step off the beaten path and delve into the unknown. From the moment I set foot in this enchanting region, I was captivated by its allure. The scent of spices wafting through bustling markets, the echo of the call to prayer reverberating against centuries-old walls – each moment was a symphony of senses.</p>
                </div>
                <div className="flex-1 md:px-8">
                    <img src="/traveler.png" alt="" className="lg:max-w-[600px]" />
                </div>
            </div>
            <div className="max-w-[1550px] w-[90%] mx-auto  flex flex-col-reverse lg:flex-row-reverse justify-center items-center gap-6 mt-4">
                <div className="flex-1 md:px-8 space-y-4">
                    <h1 className="text-sm font-bold text-green-800">OUR MISSION</h1>
                    <p className="text-3xl">Our Mission</p>
                    <p className="text-sm">At Eastward journeys, our mission is simple yet profound: to bridge cultures, inspire wanderlust, and foster a deep appreciation for the diverse tapestry of the Middle East. We believe that travel is not just about visiting new places; its about forging connections, embracing diversity, and celebrating the shared humanity that unites us all.</p>
                    <br />
                    <p className="text-sm">Our journey began with a passion for exploration and a desire to showcase the rich heritage and unparalleled beauty of the Middle East. From the ancient wonders of Egypt to the bustling souks of Morocco, this region is a treasure trove of history, culture, and natural splendor waiting to be discovered.</p>
                </div>
                <div className="flex-1 md:px-8">
                    <img src="/hero_1.jpg" alt="" className="lg:max-w-[600px]" />
                </div>
            </div>
            <div className="bg-[url('/hero_1.jpg')] bg-no-repeat bg-cover bg-center bg-fixed my-14">
                <div className="text-center bg-green-300 py-16 px-4 bg-opacity-30 space-y-5">
                    <h1 className="text-2xl font-bold">Join and Trip With Us</h1>
                    <p className="max-w-[600px] mx-auto text-sm">Are you ready to embark on an unforgettable adventure through the enchanting lands of the Middle East?</p>
                    <button className="px-4 rounded border-2 border-green-800 py-1 capitalize focus:bg-green-800 focus:text-white hover:bg-green-700 hover:text-white text-black">Get on touch</button>
                </div>
            </div>

            <div className="max-w-[1550px] w-[90%] mx-auto ">
                <div className="container p-4 mx-auto text-center">
                    <h2 className="text-4xl font-bold">Reviews</h2>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={3}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        '@0.00': {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        '@0.75': {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        '@1.00': {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        '@1.50': {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    {
                        reviews.map((review, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800 shadow-2xl min-h-[400px]">
                                    <div className="flex justify-between p-4">
                                        <div className="flex space-x-4">
                                            <div>
                                                <img src={avater} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold">{review.author_name}</h4>
                                                <span className="text-xs dark:text-gray-600">{review.date}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2 dark:text-yellow-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                            </svg>
                                            <span className="text-xl font-bold">{review.rating}</span>
                                        </div>
                                    </div>
                                    <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                                        {review.review_description}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>

            </div>
        </div>
    );
};

export default About;