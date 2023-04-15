import React from 'react'
import { createRoot } from "react-dom/client";
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import Error404 from './components/Error404';
import Hero from './components/Home/Hero/Hero';
import { Provider } from 'react-redux';
import store from './store/store';
import Menu from './components/Menu/Menu';
import Orders from './components/Orders/Orders';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Checkout from './components/Checkout/Checkout';
import { AnimatePresence } from 'framer-motion';
// import { useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';


// const location = useLocation()

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Hero />
      },
      {
        path: "/menu",
        element: <Menu  />
      },
      {
        path: "/orders",
        element: <Orders />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/Register",
        element: <Register />
      },
      {
        path: "/Checkout",
        element: <Checkout />
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
