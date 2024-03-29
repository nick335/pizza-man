import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import App from './App'
const App = React.lazy(() => import('./App'))
const Hero =React.lazy(() => import('./components/Home/Hero/Hero'))
const Menu = React.lazy(() => import('./components/Menu/Menu'))
const Orders =React.lazy(() => import('./components/Orders/Orders'))
const Login = React.lazy(() => import('./components/Auth/Login'))
const Register = React.lazy(() => import('./components/Auth/Register'))
const Checkout = React.lazy(() => import('./components/Checkout/Checkout'))
const Thankyou = React.lazy(() => import('./components/ThankYou/Thankyou'))
import Error404 from './components/Error404';
import { Provider } from 'react-redux';
import store from './store/store';
import { AnimatePresence } from 'framer-motion';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './components/Routes/PrivateRoute';
import PrivateRoute2 from './components/Routes/PrivateRoute2';
import PrivateRoute3 from './components/Routes/PrivateRoute3';
import RouteLoader from './components/Loaders/RouteLoader';
import { nanoid } from '@reduxjs/toolkit';


// const location = useLocation()

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <React.Suspense fallback={<RouteLoader />}><App /></React.Suspense>,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <React.Suspense fallback={<RouteLoader />}><Hero /></React.Suspense>
      },
      {
        path: "/menu",
        element: <Menu  />
      },
      {
        path: "/orders",
        element: <React.Suspense fallback={<RouteLoader />}><PrivateRoute  children={<Orders />} /></React.Suspense>
      },
      {
        path: "/login",
        element: <React.Suspense fallback={<RouteLoader />}><Login /></React.Suspense>
      },
      {
        path: "/Register",
        element: <React.Suspense fallback={<RouteLoader />}><Register /></React.Suspense>
      },
      {
        path: "/Checkout",
        element: <React.Suspense fallback={<RouteLoader />}><PrivateRoute2  children={<Checkout />}/></React.Suspense>
      },
      {
        path: "/thankyou",
        element: <React.Suspense fallback={<RouteLoader />}><PrivateRoute3 children={<Thankyou />}/></React.Suspense>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <Provider store={store}>
        <AnimatePresence mode='wait' key={nanoid()}>
          <RouterProvider router={router} />
          <Toaster />
        </AnimatePresence>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
