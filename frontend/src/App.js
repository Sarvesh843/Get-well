import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import './App.css'
import { useNavigate } from 'react-router-dom';

function App() {

  return (


    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
