import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import UseAllCountry from '../hooks/UseAllCountry';

const Destination = () => {
    const { allCountry } = UseAllCountry();
    return (
        <div className="max-w-[1550px] w-[90%] mx-auto my-16 poppins">
            <div className='text-center my-12'>
                <p className='text-green-800'>Eastward Provide Country</p>
                <h1 className='text-4xl font-bold'>Select Your Destination</h1>
            </div>
            <div>
                <Swiper

                    slidesPerView={1}
                    spaceBetween={5}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    {
                        allCountry.map(country => (
                            <SwiperSlide key={country._id}>
                                <Link to={`/places/${country?.countryName}`} className='relative group'>
                                    <img src={country.photoURL} alt=""/>
                                    <p className='absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-800 w-full text-center text-white capitalize py-2 group-hover:bg-green-500 group-hover:-bottom-5 transition-all'>{country?.countryName}</p>
                                </Link>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Destination;