import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import Home from './pages/Home';
import Layout from './layout/Layout';
import { QueryClient, QueryClientProvider } from "react-query";
import News from './pages/News';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/news",
        element: <News />,
      },
    ]
  }

]);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
