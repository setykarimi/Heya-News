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
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

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
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Provider>
    </I18nextProvider>
  </React.StrictMode>,
)
