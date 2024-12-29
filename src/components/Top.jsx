
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Top = () => {

    const [topFoodItems, setTopFoodItems] = useState([])
    useEffect(() => {
        topFood()
    }, [])

    async function topFood() {
        let response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        let data = await response.json()

        setTopFoodItems(data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
    }

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
