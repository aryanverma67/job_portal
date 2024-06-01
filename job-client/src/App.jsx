import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {


  return (
    <div>
      <Outlet />
    </div>
  );
};

export default App;
