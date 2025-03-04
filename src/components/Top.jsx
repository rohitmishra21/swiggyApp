import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import useTopMenu from '../hook/useTopMenu';

const Top = () => {
    const topFoodItems = useTopMenu()
    return (
        <div>
            <h1 className='py-10 text-2xl font-bold'>Rohit, what's on your mind?</h1>
            <div>
                <Swiper
                    slidesPerView={7}
                    spaceBetween={30}
                    className="mySwiper"
                >
                    {topFoodItems.map((item, i) => (
                        <SwiperSlide key={i} >
                            <img className='object-conver' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`} alt="" />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    )
}

export default Top
