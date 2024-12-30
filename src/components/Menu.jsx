import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Menu = () => {

  const [menuData, setmenuData] = useState([])
  const param = useParams()



  useEffect(() => {
    showMenu()
  }, [])

  async function showMenu() {
    const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=${param.id}`)
    const data = await response.json()
    setmenuData(data);
    console.log(menuData);

  }


  return (
    <div>
      <h1>hii</h1>

    </div>
  )
}

export default Menu
