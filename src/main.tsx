import React from 'react'
import { createRoot } from "react-dom/client";
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
import Error404 from './components/Error404';
import { Provider } from 'react-redux';
import store from './store/store';
// import Menu from './components/Menu/Menu';
// import Orders from './components/Orders/Orders';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';
// import Checkout from './components/Checkout/Checkout';
import { AnimatePresence } from 'framer-motion';
// import { useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './components/Routes/PrivateRoute';
import PrivateRoute2 from './components/Routes/PrivateRoute2';


// const location = useLocation()

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <React.Suspense fallback={<>loading...</>}><App /></React.Suspense>,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <React.Suspense fallback={<>loading...</>}><Hero /></React.Suspense>
      },
      {
        path: "/menu",
        element: <Menu  />
      },
      {
        path: "/orders",
        element: <React.Suspense fallback={<>loading...</>}><PrivateRoute  children={<Orders />} /></React.Suspense>
      },
      {
        path: "/login",
        element: <React.Suspense fallback={<>loading...</>}><Login /></React.Suspense>
      },
      {
        path: "/Register",
        element: <React.Suspense fallback={<>loading...</>}><Register /></React.Suspense>
      },
      {
        path: "/Checkout",
        element: <React.Suspense fallback={<>loading...</>}><PrivateRoute2  children={<Checkout />}/></React.Suspense>
      }
    ]
  }
])


const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <Provider store={store}>
        <AnimatePresence mode='wait'>
          <RouterProvider router={router} />
          <Toaster />
        </AnimatePresence>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
