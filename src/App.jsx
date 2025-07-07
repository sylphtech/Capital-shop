import React from 'react'
import './App.css'
import Nav from './components/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navber from './components/Navber'
import Text from './components/Text'
import Banner from './components/Banner'
import Card from './components/Card'
import Trending from './components/Trending'
import TrendingCard from './components/TrendingCard'
import Testmonial from './components/Testmonial'
import Youmaylike from './components/Youmaylike'
import Latestnews from './components/Latestnews'
import Footer from './components/Footer'

export default function App() {
  return (
    <Router>
      <Nav/>
      <Navber/>
      <Text/>
      <Banner/>
      <Card/>
      <Trending/>
      <TrendingCard/>
      <Testmonial/>
      <Youmaylike/>
      <Latestnews/>
      <Footer/>
    </Router>
  )
}
