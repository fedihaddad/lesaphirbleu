import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MenuPage from './pages/MenuPage'
import RestaurantCard from './components/RestaurantCard'

export default function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RestaurantCard />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Router>
  )
}
