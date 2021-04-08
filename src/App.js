import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import Menu from './components/Menu';
import MainContent from './components/MainContent';
import FoodFacts from './components/FoodFacts';
import Featured from './components/Featured';
import Gallery from './components/Gallery';

// App is the main container component where all the other components are being imported

//The page is divided into 5 components, each containing different sections of the webpage

function App() {
  return (
    <div className="container-fluid">
      <Menu />
      <MainContent />
      <FoodFacts />
      <Featured />
      <Gallery />
    </div>
  );
}

export default App;
