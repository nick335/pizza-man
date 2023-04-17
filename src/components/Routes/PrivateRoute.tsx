import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/RootReducer'

interface routeProps {
  children: JSX.Element[] | JSX.Element
}

export default function PrivateRoute({ children}: routeProps) {
  const { uid } = useSelector((state: RootState) => state.user)
  return uid ? <>{children}</> : <Navigate to='/' />
}
