import React from 'react'
import logo from '../../../assets/pizzman-hero.png'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../store/RootReducer'
import { NavLink } from 'react-router-dom'
import { toggleMenu } from '../../../store/Features/Menu/MenuSlice'
import { auth, firestore } from '../../firebase/firebase'
import { useAuthSignOut } from '@react-query-firebase/auth'
import { toast } from 'react-hot-toast'
import { LoggedOut } from '../../../store/Features/User/UserSlice'


export default function MenuItems() {
  // menu state from redux menu store
  const { isOpen } = useSelector((state: RootState) => state.menu)
  // auth state from redux user store
  const { loggedIn } = useSelector((state: RootState) => state.user.auth)
  const dispatch = useDispatch()

  //Signout from firebase
const mutation = useAuthSignOut(auth, {
  onError(error){
    toast.error(error.message, {
      duration: 8000,
      position: 'top-right'
    })
  },
})

// handle logout function
function handleLogout(){
  dispatch(toggleMenu())
  mutation.mutate()
}
  return (
    <div className={`md:static md:block lg:w-fit lg:h-fit absolute top-0 left-0 w-screen h-screen md:h-fit md:w-fit  bg-black z-30 bg-opacity-75 overflow-hidden ${ isOpen ? 'block' : 'hidden'} md:bg-transparent md:bg-opacity-100 md:z-0 md:ml-auto`}>
     <div className={`h-full absolute top-0 md:static  w-[70%] md:w-fit lg:pt-0 transition-all duration-300 delay-75 ease-in-out bg-white md:bg-transparent pt-5 pl-4 md:pt-0 md:pl-0 ${ isOpen ? 'animate-[comeout_0.3s_ease-in-out_0.1s_both]' : 'animate-[goout_0.5s_ease-in-out_both]'} xs:w-[270px] `}>
        <img alt='logo' src={logo} className=' w-[150px] h-[75px] object-cover ml-3 md:hidden' />
        <ul className='mt-9 font-Roboto font-bold text-base md:flexCenter md:mt-0  md:p-0 w-fit md:gap-4'>
          <NavLink to="/" end>{({isActive})=>(
            <li onClick={() => dispatch(toggleMenu())} className={`menuList ${isActive ? 'menuActive' : 'menuHover'}`}>Home</li>
          )}
          </NavLink>
          <NavLink to="/menu" end>{({isActive})=>(
            <li onClick={() => dispatch(toggleMenu())} className={`menuList ${isActive ? 'menuActive' : 'menuHover'}`}>Menu</li>
          )}
          </NavLink>
          {
            loggedIn ? 
            <>
              <NavLink to="/orders" end>{({isActive})=>(
                <li onClick={() => dispatch(toggleMenu())} className={`menuList ${isActive ? 'menuActive' : 'menuHover'}`}>Orders</li>
              )}
              </NavLink>
              <li onClick={handleLogout} className='menuList menuHover'>Logout</li>
            </> 
            : <>
                <NavLink to="/login" end>{({isActive})=>(
                  <li onClick={() => dispatch(toggleMenu())} className={`menuList ${isActive ? 'menuActive' : 'menuHover'}`}>Login</li>
                )}
                </NavLink>
                <NavLink to="/Register" end>{({isActive})=>(
                  <li onClick={() => dispatch(toggleMenu())} className={`menuList ${isActive ? 'menuActive' : 'menuHover'}`}>Register</li>
                )}
                </NavLink>
              </> 
          }
        </ul>
      </div> 
    </div>
  )
}
