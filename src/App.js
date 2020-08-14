import React from 'react';
import './App.css';
import Header from './components/Header'
import Article from './components/Article'
import Section from './components/Section'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <Article />
      <Section />
    </div>
  );
}

export default App;
