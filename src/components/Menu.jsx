import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom';
import { GoDotFill } from "react-icons/go";
import Slider from './Slide/Slider';
import Recomneded from './Recomneded';
import { FaChevronUp } from "react-icons/fa";

const Menu = () => {

  const [menuData, setmenuData] = useState([])
  const [isVisible, setisVisible] = useState(false)
  const { id } = useParams()

  function show() {
    setisVisible((p) => !p)
  }
  useEffect(() => {
    showMenu()
  }, [])

  async function showMenu() {
    const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=${id}`)
    const data = await response.json()
    setmenuData(data);
  }



  const { name, avgRating, totalRatingsString, costForTwoMessage, cuisines, sla } = menuData?.data?.cards[2]?.card?.card?.info || 'Unknown Name';
  const rate = menuData?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel
  const itemCards = menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
  const item = menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3].card.card.itemCards

  console.log(item);



  return (
    <div className='w-full flex justify-center'>
      <div className='w-2/3 min-h-screen '>
        <div className="text-lg leading-loose py-7 rounded-3xl">
          <div className='shadow-2xl shadow-gray-400 rounded-3xl p-8'>
            <h1 className="font-bold text-2xl py-3">{name}</h1>
            <div className="flex items-center gap-1 font-medium">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stopColor="#21973B"></stop><stop offset="1" stopColor="#128540"></stop></linearGradient></defs></svg>
              <h1 className=''>{avgRating}</h1>
              <h1>({totalRatingsString})</h1>
              <h1><GoDotFill className='text-xs text-[#8D8F91]' /></h1>
              <h1>{costForTwoMessage}</h1>
            </div>
            <h1 className='text-[#FF5200] underline font-bold'>{cuisines?.join(" ,")}</h1>
            <h1 className=' font-bold'>{sla?.slaString}</h1>
          </div>
        </div>

        <div>
          <h1 className='py-8 text-2xl font-bold'>Top Picks</h1>
          <Slider cards={rate} />
        </div>
        <div>
          <div className='flex justify-between items-center'>
            <h1 className='py-8 text-2xl font-bold'>Recommended </h1>
            <FaChevronUp size={20} className='cursor-pointer' onClick={show} />
          </div>
          <Recomneded itemCards={itemCards} visible={isVisible} />
        </div>
      </div>
    </div>
  )
}

export default Menu
