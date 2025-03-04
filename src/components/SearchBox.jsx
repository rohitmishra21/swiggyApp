import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FOOD_SEARCH_API, SEARCH_IMG_URL } from './config/config';
const SearchBox = () => {
  const [querry, setQuerry] = useState("")
  const [searchData, setSearchData] = useState([])

  const fecthData = async () => {
    const response = await fetch(FOOD_SEARCH_API + querry)
    const json = await response.json()
    setSearchData(json?.data?.suggestions);

  }

  useEffect(() => {

    fe()
  }, [])

  async function fe() {
    const response = await fetch("https://www.zomato.com/webroutes/getPage?page_url=/bhopal/little-italy-1-arera-colony/info&location=&isMobile=0")
    const jsonRes = await response.json()
    
  }
  function runCode(e) {
    setQuerry(e.target.value)
    fecthData()
  }

  return (
    <div className='flex items-center  flex-col  w-full'>
      <div className=' items-center mt-8 mb-2 w-full justify-center flex'>
        <input type="text" placeholder='Search food' onChange={runCode} value={querry} className=' border-gray-400 w-1/2 py-2 text-lg px-2 outline-none border-r-0 border' />
        <IoIosSearch onClick={fecthData} size={45.5} className='border-l-0  border text-gray-500 border-gray-400' />
      </div>

      {searchData && searchData.map((data, i) => (
        <div key={i} className='w-[100vh] h-20 mt-4 flex  gap-4'>
          <img className='object-fit rounded-xl object-cover' src={SEARCH_IMG_URL + data?.cloudinaryId} alt="" />
          <div>
            <h1>{data?.cta?.text}</h1>
            <h1 className='text-[#686B78]'>{data?.subCategory}</h1>
          </div>
        </div>
      ))}



    </div>
  )
}

export default SearchBox
