import { useEffect, useState } from "react"
import { MENU_API } from "../components/config/config"

const useMenuRestro = (id) => {
    const [menuData, setmenuData] = useState([])
    useEffect(() => {
        showMenu()
    }, [])

    async function showMenu() {
        const response = await fetch(MENU_API + id)
        const data = await response.json()
        setmenuData(data);
    }

    return menuData
}

export default useMenuRestro