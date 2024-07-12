import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Routes from './Routes/Routes';
import { ToastContainer } from 'react-toastify';

const App = () => {

  return (
    <>
      <RouterProvider router={Routes} />
      <ToastContainer />
    </>
  );
};

export default App;