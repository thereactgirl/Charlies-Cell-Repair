import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Example from "./components/Example";
import CellCard from "./components/CellCard";
import './App.css';
commit changes
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>

      <Example />  

      <CellCard /> 

      <footer classname="App-footer">
        <Footer />
      </footer>

    </div>
  );
}

export default App;
