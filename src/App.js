import logo from './logo.svg';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import home from "./Pages/home";
// import myJob from "./Pages/myJob";
// import contact from "./Pages/contact";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Wrapper from "./components/Wrapper"

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
     
      <Wrapper>
      <Router>
      
      <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/home" component={home} />
            {/* <Route exact path="/myJob" component={myJob} /> */}
            {/* <Route exact path="/contact" component={contact} /> */}
            {/* <Route component={NoMatch} /> */}
          </Switch>
      
       
      </Router>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
