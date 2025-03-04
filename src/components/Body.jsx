
import RestroCard, { vegRestroCard } from "./Card/RestroCard";
import Top from "./Top";
import { Link } from "react-router-dom";
import useRestroBody from "../hook/useRestoBody";
const Body = () => {
    const { topResaurants, setTopResaurants, filterRestroData } = useRestroBody()
    const VegCard = vegRestroCard(RestroCard)
    const filterData = () => {
        const filterBodyPrice = filterRestroData.filter((price) => {
            const filtePrice = price.info.avgRating
            return filtePrice > 4.5
        })
        setTopResaurants(filterBodyPrice)
    }

    return topResaurants.length === 0 ? (
        <div className="flex flex-col gap-10">
            <h1>loading....</h1>
        </div>
    ) : (
        <>
            <Top />
            <div>

                <h1 className='pt-10 text-2xl font-bold mb-5'>Top restaurant chains in Indore</h1>
                <button className="my-8 bg-slate-400 px-2 text-white font-bold capitalize py-1 rounded" onClick={filterData}>Top-Rated</button>
                <div className="md:grid grid-cols-4 gap-10">
                    {topResaurants.map((res, i) => (
                        <Link key={i} to={`menu/${res.info.id}`}>
                            {res.info.veg ? <VegCard res={res} /> : <RestroCard res={res} />}

                        </Link>
                    ))}
                </div>
            </div >
        </>
    )
}

export default Body
