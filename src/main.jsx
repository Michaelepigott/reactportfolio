import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';
import './index.css';
import Error from './pages/errorpage.jsx';
import About from './pages/aboutme.jsx';
import Portfolio from './pages/portfoliopage.jsx';
import Contact from './pages/contactme.jsx';
import Resume from './pages/resumepage.jsx';
//Establish and name Paths, assign destinations
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement:<Error/>,
    children:[
      {
        index: true,
        element: <About/>,
      },
      {
        path: '/Portfolio',
        element: <Portfolio/>,
      },
      {
        path:'/Contact',
        element: <Contact/>,
      },
      {
        path:'/Resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router} />
)
