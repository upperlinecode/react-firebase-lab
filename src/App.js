import React from 'react';
import './App.css';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';

const App = () => {
  const component = new React.Component();

  component.render = () => {
    return (
      <div className="App">
        <Header />

        <div className="Posts">
          <p>No posts to show</p>
        </div>
        
        <Footer />
      </div>
    );
  }

  return component
}

export default App;
