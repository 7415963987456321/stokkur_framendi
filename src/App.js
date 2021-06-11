import React, { useState, useEffect } from 'react';
import {SearchBar} from './components/SearchBar';
import {ResultList}    from './components/Result';
import logo from './img/logo.svg';
import './App.css';

function App() {
  // Keep state
  const [searchTerm, setSearchTerm] = useState("stokkur");

  // test
  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);

  // Setjum titil á tab
  useEffect(() => {
    document.title = "Leitir"
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchBar
          setSearchTerm={setSearchTerm}
        />
      </header>
    <ResultList
      searchTerm={searchTerm}
    />

    </div>
  );

}



export default App;
