import logo from './logo.svg';
import {BrowserRouter as Router, Route} from "react-router-dom";
// import home from "./Pages/home";
// import myJob from "./Pages/myJob";
// import contact from "./Pages/contact";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-wrapper">
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
      
      <Router>
        <Route exact path="/"> <home /> </Route>
        <Route exact path="/contact"> <contact /> </Route>
        <Route exact path="/myJob"> <myJob /> </Route>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
