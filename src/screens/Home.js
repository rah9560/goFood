import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Caraousal from '../components/Caraousal'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Caraousal/>
      <Card/>
      <Footer />
    </div>
  )
}

export default Home