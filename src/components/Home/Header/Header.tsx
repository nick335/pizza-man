import React from 'react'
import logo from '../../../assets/pizzman-hero.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import MenuItems from './MenuItems'
import { RootState } from '../../../store/RootReducer'
import { toggleMenu } from '../../../store/Features/Menu/MenuSlice'
import { toggleCartDisplay } from '../../../store/Features/Cart/CartSlice'
// import Cart from '../../Cart/Cart'



export default function Header() {
  // const [menu, setMenu] = React.useState<boolean>(false)
  const dispatch = useDispatch()
  const { isOpen } = useSelector((state: RootState) => state.menu)
  const { cartItems } = useSelector((state: RootState) => state.cart)
  const noOfCartItems = cartItems.dessertData.length + cartItems.pizzaData.length
  return (
    <header className=' bg-NavBg sticky top-0 z-10'>
      <nav className='flex items-center layout py-2'>
        <div>
          <img alt='logo' src={logo} className=' w-20 h-10 object-cover'/>
        </div>
        <MenuItems />
        <div className={`ml-auto relative ${ isOpen ? 'mr-16' : 'mr-4' } md:ml-12 md:mr-0`}>
          <FontAwesomeIcon icon={faCartShopping} className="text-lg text-BarBg"  onClick={() => dispatch(toggleCartDisplay())}/>
          <div className=' absolute -top-1 -right-1 text-white w-3.5 h-3.5 z-10  text-[8px] rounded-full bg-LinkColor flex items-center justify-center' onClick={() => dispatch(toggleCartDisplay())}>{noOfCartItems}</div>
        </div>
        <div className={`md:hidden mr-4 cursor-pointer ${ isOpen ? ' fixed right-[3.5%] z-50 ' : ''}`} onClick={() => dispatch(toggleMenu())}>
          <div className= {`bar ${isOpen ? 'translate-y-[8px] rotate-45 bg-slate-50' : ''}`}  ></div>
          <div className={`bar ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`bar mb-0 ${isOpen ? 'transform -translate-y-[8px] -rotate-45 bg-slate-50' : '' }`}></div>
        </div>
      </nav>
    </header>
  )
}
