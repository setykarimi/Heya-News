import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from "react-query";
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import './index.css';
import Layout from './layout/Layout';
import Home from './pages/Home';
import PopularNews from './pages/PopularNews';
import TodayHeadlines from './pages/TodayHeadlines';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/news/popular",
        element: <PopularNews />,
      },
      {
        path: "/news/today-headlines",
        element: <TodayHeadlines />,
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
