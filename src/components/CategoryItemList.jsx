import React from 'react'
import { CLOUDNARY_IMG_ID, NON_VEG_SVG, STAR_SVG, VEG_SVG } from './config/config';

const CategoryItemList = ({ categoryData }) => {
    
    return (
        <div>
            {categoryData && categoryData.map((item) => (
                <div key={item?.card?.info?.id} className='mb-10'>
                    <div>
                        {item?.card?.info?.itemAttribute?.vegClassifier === "NONVEG" ? <img width={20} src={NON_VEG_SVG} alt="" /> : <img width={20} src={VEG_SVG} alt="" />}
                        <h1 className='text-lg font-semibold text-gray-800'>{item?.card?.info?.name}</h1>
                        <h1>&#8377;{item?.card?.info?.price / 100}</h1>
                        {item?.card?.info?.ratings?.aggregatedRating && <h1 className='flex items-center my-2 gap-1'>{STAR_SVG} {item?.card?.info?.ratings?.aggregatedRating?.rating}</h1>}


                    </div>

                </div>
            ))}
        </div>
    )
}

export default CategoryItemList
