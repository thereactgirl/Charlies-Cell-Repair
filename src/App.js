import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>

       
      <footer classname="App-footer">
        <Footer />
      </footer>

    </div>
  );
}

export default App;
