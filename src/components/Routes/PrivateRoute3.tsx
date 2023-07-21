import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/RootReducer'

interface routeProps {
 children: JSX.Element[] | JSX.Element
}

export default function PrivateRoute3({children}: routeProps) {
 const { loggedIn } = useSelector((state: RootState) => state.user.auth)
 const { orderSuccessful } = useSelector((state: RootState) => state.user)
  return loggedIn && orderSuccessful ? <>{children}</> : <Navigate to='/' />
}
