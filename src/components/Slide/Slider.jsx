
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export default function Slider({ cards = [] }) {
    return (
        <>
            <Swiper
                slidesPerView={2.5}
                spaceBetween={10}
                className="mySwiper  h-96  "

            >
                {cards.length === 0 ? null : cards?.map(function (elem, i) {
                    return (


                        <SwiperSlide key={i} className={`overflow-hidden bg-cover bg-center rounded-3xl`}>
                            <img className='w-full h-full object-cover' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/${elem?.creativeId}`} alt="" />
                            <div className='text-white flex justify-between p-3 absolute bottom-0 w-full '
                                style={{ background: "linear-gradient(rgba(27, 30, 36, 0) 0%, rgb(27, 30, 36) 84.21%)" }}>

                                <h1>Rs {elem?.dish?.info?.price / 100}</h1>
                                <button className='py-2 px-10 text-lg rounded uppercase font-extrabold text-[#1BA672] bg-[#D9DADB]'>add</button>
                            </div>
                        </SwiperSlide>


                    )
                })}
            </Swiper>


        </>
    );
}

