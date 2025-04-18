import React, { useState } from 'react'
import CategoryItemList from './CategoryItemList';

const RestrouentCategory = ({ data, showItem }) => {

    return (
        <div>
            <div className=' px-5 rounded-lg'>
                <div className='flex justify-between shadow-sm shadow-gray-800 my-4 px-5 h-12 items-center '>
                    <h1 className='font-bold text-lg'>{data?.title} ({data?.itemCards ? data?.itemCards?.length : data?.categories?.length})</h1>
                    <h1 className='cursor-pointer' >  ⬇️</h1>
                </div>
                {showItem && <CategoryItemList categoryData={data?.itemCards} />}
            </div>

        </div>
    )
}

export default RestrouentCategory
