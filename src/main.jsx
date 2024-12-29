import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './components/Body.jsx'
import SwiggyCoprate from './components/Home/SwiggyCoprate.jsx'

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/SwiggyCoprate",
    element: <SwiggyCoprate />
  }
])


createRoot(document.getElementById('root')).render(

  <RouterProvider router={Router}>
    <App />

  </RouterProvider>
)
