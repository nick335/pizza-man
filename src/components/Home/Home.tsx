import React from 'react'
import CartBox from '../Cart/CartBox'
import RouteTemplate from '../Routes/RouteTemplate'
import Footer from './Footer/Footer'
import Header from './Header/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <RouteTemplate />
      <Footer />
      <CartBox />
    </div>
  )
}
