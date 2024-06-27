import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
/*import About from './components/About';
import Services from './components/Services';
import Departments from './components/Departments';
import Contact from './components/Contact';
import './App.scss';*/

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
