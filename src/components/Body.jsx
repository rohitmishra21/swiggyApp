import { useState, useEffect } from "react"
import RestroCard from "./Card/RestroCard";
import Shemer from "./Shemer/Shemer";
import Top from "./Top";
import { Link } from "react-router-dom";
const Body = () => {
    const [topResaurants, setTopResaurants] = useState([])
    const [filter, setfilter] = useState([])
    const [search, setSearch] = useState("")
    useEffect(() => {
        topFood()
    }, [])

    async function topFood() {
        let response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        let data = await response.json()

        setTopResaurants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfilter(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    function clickHendler() {
        const newData = filter.filter((res) =>
            res.info.name.toLowerCase().includes(search.toLowerCase())
        )

        setTopResaurants(newData)
        setSearch('')
    }

    return topResaurants.length === 0 ? (
        <div className="flex flex-col gap-10">
            <h1>loading....</h1>
        </div>
    ) : (
        <>
            <Top />
            <div>

                <h1 className='pt-10 text-2xl font-bold'>Top restaurant chains in Indore</h1>

                <div className="flex justify-end items-center py-20 ">

                    <div className="flex   items-center">
                        <input
                            type="text"
                            className="border-black w-1/2 p-3 text-black border-2 py-2"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value)
                            }}
                        />
                        <button onClick={clickHendler} className="bg-black  text-gray-200 py-2.5 px-4">search</button>
                    </div>
                </div>
                <div className="md:grid grid-cols-4 gap-10">
                    {topResaurants.map((res, i) => (
                       <Link key={i} to={`menu/${res.info.id}`}>
                            <RestroCard res={res} />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Body
