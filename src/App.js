import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";
import Header from "./client/components/Header/Header"
import Menu from "./client/components/Menu/Menu"
import Blog from "./client/components/Blog/Blog"
import Upcoming from "./client/components/Upcoming/Upcoming"
import Footer from "./client/components/Footer/Footer" 

function App() {
  return (
    // thinking about Mo.js implementation for animations! ( like button to DB, upvotes, ecc)
    <Router> 
      <div className="App">
        <Header/>
        <Menu />
        
          <Switch>
            <Route path="/" exact component={Blog}/> 
            <Route path="/upcoming" component={Upcoming} /> 
          </Switch>
      
        <Footer/>
      </div>
    </Router> 
  );
}

export default App;
