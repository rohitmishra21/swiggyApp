import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SwiggyCoprate from './components/Home/SwiggyCoprate.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './components/Body.jsx'
import Menu from './components/Menu.jsx'
import User from './components/User.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} >
        <Route path='/' element={<Body />} />
        <Route path='/menu/:id' element={<Menu />} />
        <Route path='SwiggyCoprate' element={<SwiggyCoprate />} />
        <Route path='user' element={<User />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
