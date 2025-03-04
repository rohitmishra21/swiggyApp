import { useState, useEffect } from 'react';
import { TOPDATA_API } from '../components/config/config';

const useRestroBody = () => {
    const [topResaurants, setTopResaurants] = useState([]);
    const [filterRestroData, setFilterRestroData] = useState([]);

    useEffect(() => {
        topFood();
    }, []);

    async function topFood() {
        try {
            let response = await fetch(TOPDATA_API);
            let data = await response.json();
            const restaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setTopResaurants(restaurants);
            setFilterRestroData(restaurants);
        } catch (error) {
            console.error('Error fetching top restaurants:', error);
        }
    }

    return { topResaurants, filterRestroData, setTopResaurants };
};

export default useRestroBody;
