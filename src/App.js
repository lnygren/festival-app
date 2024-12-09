
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

const router = createBrowserRouter ([
  {
      path: '/', element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true, element: <Home />
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
          path: 'lineup', children: [
            {
              index: true, element: <Lineup />
            },
          ]
        },
        {
          path: 'support', children: [
            {
              index: true, element: <Support />
            },
          ]
        },
      ]
  },
 
]);


function App() {
  return <RouterProvider router={router}/>;
}

export default App;
