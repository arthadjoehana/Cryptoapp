import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar'
import Crypto from './Crypto'
import Contact from './components/Contact/Contact'
import About from './components/About/About'

function App() {
  
  return (

    <div>
    <Router>
    <div className="searchbar">
    <Navbar />
    
    </div>
    
    <Route path="/crypto" component={Crypto} />
      
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />
    </Router>
    </div>

    
  );
}

export default App