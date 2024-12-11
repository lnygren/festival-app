
import './App.css';

import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import Lineup from './pages/Lineup';
import Home from './pages/Home';
import Tickets from './pages/Tickets';
import Support from './pages/Support';
import Week from './pages/Week';
import Oneday from './pages/Oneday';
import Getthere from './pages/Getthere';
import BandPage from './pages/Band';
import { Auth0Provider } from '@auth0/auth0-react';

import { loader as commentsLoader } from './pages/Support';
import CallBackPage from './pages/Callback';

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./store/rootReducer";
import {Provider} from "react-redux";

import store from './store/store'

const router = createBrowserRouter ([
  {
      path: '/', element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true, element: <Home />
        },
        {
          path: 'callback' , element: <CallBackPage />
        },
        {
          path: 'tickets' , children: [
            {
              index: true, element: <Tickets />
            },
            {
              path: 'oneday', element: <Oneday />
            },
            {
              path: 'week', element: <Week />
            },
          ]
        },
        {
          path: 'lineup',children: [
            {
              index: true, element: <Lineup />
            },
            {
              path: ':bandId', element: <BandPage />
            },
          ]
        },
        {
          path: 'getthere', children: [
            {
              index: true, element: <Getthere />
            },
          ]
        },
        {
          path: 'support', children: [
            {
              index: true, element: <Support />, loader: commentsLoader
            },
          ]
        },
      ]
  },
 
]);


function App() {
  return (
    <Auth0Provider
        domain="dev-i0q8gya6f645slv1.eu.auth0.com"
        clientId="A0vfnZdjpXPunkEghuBUazgJhCyPsR6W"
        authorizationParams={{
        redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
      <RouterProvider router={router}/>

    </Provider>
 
  </Auth0Provider>
  );
}

export default App;
