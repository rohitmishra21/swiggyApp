import React from 'react'
import CategoryItemList from './CategoryItemList';

const RestrouentCategory = ({ data }) => {


    return (
        <div>
            <div className=' px-5 rounded-lg'>
                <div className='flex justify-between bg-blue-100 my-2 h-12 items-center '>
                    <h1 className='font-bold text-lg'>{data?.title} ({data?.itemCards ? data?.itemCards?.length : data?.categories?.length})</h1>
                    ⬇️
                </div>

                <CategoryItemList categoryData={data?.itemCards} />

            </div>

        </div>
    )
}

export default RestrouentCategory
