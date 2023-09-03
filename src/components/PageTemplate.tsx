import Header from './Home/Header/Header'
import ScrollToTop from './Routes/ScrollToTop'
import RouteTemplate from './Routes/RouteTemplate'
import Footer from './Home/Footer/Footer'
import CartBox from './Cart/CartBox'
import Error from './Error'


export default function PageTemplate() {
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
