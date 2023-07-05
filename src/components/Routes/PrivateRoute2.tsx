import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/RootReducer' 

interface routeProps {
  children: JSX.Element[] | JSX.Element
}

export default function PrivateRoute2({children}: routeProps ){
  const { pizzaData, dessertData } = useSelector((state: RootState) => state.cart.cartItems)
  const restrict = pizzaData.length === 0 && dessertData.length === 0 ? false : true
  const { loggedIn } = useSelector((state: RootState) => state.user.auth)

  return restrict && loggedIn ?  <>{children}</> : <Navigate to='/login' /> 
}