import Home from 'Pages/Home';
import Login from 'Pages/Login';
import News from 'Pages/News';
import PopularNews from 'Pages/PopularNews';
import Profile from 'Pages/Profile';
import TodayHeadlines from 'Pages/TodayHeadlines';
import { store } from 'Services/store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from 'react-redux';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import i18n from '../i18n';
import './index.css';
import Layout from './layout/Layout';


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
      {
        path: "/profile",
        element: <Profile />,
      }
    ]
  },
  

]);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
 
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
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
      </I18nextProvider>
    </React.StrictMode>

  ,
)
