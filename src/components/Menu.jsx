import { useParams } from 'react-router-dom';
import { GoDotFill } from "react-icons/go";
import Slider from './Slide/Slider';
import useMenuRestro from '../hook/useMenuRestro';
import { STAR_SVG } from './config/config';
import RestrouentCategory from './RestrouentCategory';
const Menu = () => {


  const { id } = useParams()
  const menuData = useMenuRestro(id)

  const { name, avgRating, totalRatingsString, costForTwoMessage, cuisines, sla } = menuData?.data?.cards[2]?.card?.card?.info || 'Unknown Name';

  const rate = menuData?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel

  const category = menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
    c.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
    c.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"

  )

  return (
    <div className='w-full flex justify-center'>
      <div className='w-2/3 min-h-screen '>
        <div className="text-lg leading-loose py-7 rounded-3xl">
          <div className='shadow-2xl shadow-gray-400 rounded-3xl p-8'>
            <h1 className="font-bold text-2xl py-3">{name}</h1>
            <div className="flex items-center gap-1 font-medium">
              {STAR_SVG}
              <h1 className=''>{avgRating}</h1>
              <h1>({totalRatingsString})</h1>
              <h1><GoDotFill className='text-xs text-[#8D8F91]' /></h1>
              <h1>{costForTwoMessage}</h1>
            </div>
            <h1 className='text-[#FF5200] underline font-bold'>{cuisines?.join(" ,")}</h1>
            <h1 className=' font-bold'>{sla?.slaString}</h1>
          </div>
        </div>

        {rate && <div>
          <h1 className='py-8 text-2xl font-bold'>Top Picks</h1>
          <Slider cards={rate} />
        </div>
        }

        {category &&
          category.map((category, i) => (
            <RestrouentCategory key={i} data={category?.card?.card} />
          ))
        }
      </div>

    </div>
  )
}

export default Menu
