import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Footer from './footer/Footer.jsx';
import './index.css';
import Form from './form/Form.jsx';
import Atservices from './ATservices/Atservices.jsx';
import ATservicesDesktop from './ATservicesDesktop/ATservicesDesktop.jsx';
import AboutATservices from './aboutATservices/AboutATservices.jsx';
import Soon from './soon/Soon.jsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/test",
      element: <Footer />,
    },
    {
      path: "/contact",
      element: <Form />,
    },
    {
      path: "/ATservices",
      element:<> <Atservices /> <ATservicesDesktop /> </>, 
    },
    {
      path: "/AboutATservices",
      element:<AboutATservices />, 
    },
    {
      path: "/ATimmobilier",
      element:<Soon />, 
    },
    {
      path: "/ATpromotion",
      element:<Soon />, 
    },
  ],
  {
    basename: "/ATdeploy", // Ajoutez cette ligne pour définir le chemin de base
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <RouterProvider router={router} />
    </StyledEngineProvider>
  </React.StrictMode>
);
