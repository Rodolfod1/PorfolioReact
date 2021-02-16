import React from 'react'
import HomeItems from "../components/HomeItems"
import logo from '../logo.svg';

const home = () => {
    return (
        
        <header className="App-wrapper">
          <HomeItems />
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
      </header>
    )
}

export default home
