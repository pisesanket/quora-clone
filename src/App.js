
import './App.css';
import SignUpModal from './components/Modals/SignUpModal';
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';

import {useState} from 'react';
import AuthProvider from './context/AuthProvider';
import ProfileModal from './components/Modals/ProfileModal';
function App() {
  
  
  return (<>
    <AuthProvider>
    <Router>
    <div className="App">
      <Navbar />
    </div>
    {/* <ProfileModal /> */}

    </Router>
    </AuthProvider> 
  </>
  );
}

export default App;
