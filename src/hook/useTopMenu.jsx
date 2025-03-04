import { useEffect, useState } from "react"
import { TOPDATA_API } from "../components/config/config"

const useTopMenu = () => {
    const [topFoodItems, setTopFoodItems] = useState([])
    useEffect(() => {
        topFood()
    }, [])
    async function topFood() {
        let response = await fetch(TOPDATA_API)
        let data = await response.json()
        setTopFoodItems(data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
    }
    return topFoodItems
}
export default useTopMenu