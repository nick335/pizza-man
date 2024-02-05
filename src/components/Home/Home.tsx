import React from 'react'
import CartBox from '../Cart/CartBox'
import RouteTemplate from '../Routes/RouteTemplate'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import ScrollToTop from '../Routes/ScrollToTop'
import SEOPAGEHeader from '../SEO/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <RouteTemplate />
      <Footer />
      <CartBox />
    </div>
  )
}
