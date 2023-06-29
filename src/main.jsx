import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from "react-query";
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import './index.css';
import Layout from './layout/Layout';
import News from 'Pages/News';
import Home from 'Pages/Home';
import PopularNews from 'Pages/PopularNews';
import TodayHeadlines from 'Pages/TodayHeadlines';
import Login from 'Pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import { store } from 'Services/store';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
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
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer position="top-center"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="colored" />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
