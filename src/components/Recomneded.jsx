import React from 'react'

const Recomneded = ({ itemCards = [], visible }) => {

    return (
        <>
            {itemCards.map(function (item, i) {
                return (
                    <div key={i} className='  justify-between shadow-sm gap-4 shadow-gray-500 p-9' style={{ display: visible ? "none" : "flex" }}>
                        <div className='w-[90%]'>
                            <h1 className='text-lg font-bold text-gray-600'>{item?.card?.info?.name} </h1>
                            <div className='flex items-center  py-2'>
                                <h1 className='font-bold text-xl'>Rs {item?.card?.info?.price / 100}</h1>
                                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className='ml-3' xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.63362 8.39604C1.28368 8.7446 1.28368 9.30972 1.63362 9.65828L6.1293 14.1362C6.47924 14.4848 7.0466 14.4848 7.39654 14.1362L12.9543 8.60038C13.1228 8.43251 13.2173 8.20468 13.2168 7.96728L13.2069 3.49924C13.2058 3.00785 12.8061 2.60977 12.3128 2.60868L7.827 2.5988C7.58866 2.59828 7.35993 2.69235 7.1914 2.86022L1.63362 8.39604ZM10.8177 6.90055C11.3458 6.37452 11.3439 5.51976 10.8134 4.99139C10.283 4.46302 9.4248 4.46113 8.89668 4.98717C8.36856 5.5132 8.37045 6.36796 8.90092 6.89633C9.43138 7.4247 10.2895 7.42659 10.8177 6.90055Z" fill="#1BA672"></path></svg>
                                <h1 className='text-xs font-bold text-gray-700'>60% OFF USE STEALDEAL</h1>

                            </div>
                            <div className='text-gray-600'>
                                <p className=''>{item?.card?.info?.description}</p>
                            </div>
                        </div>
                        <div className='' >
                            <img className='w-56  object-cover' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`} alt="" />
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Recomneded
