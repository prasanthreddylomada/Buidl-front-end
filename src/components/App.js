import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Textbox from './Textbox';
import Signup from './Signup';
import Navigation_page from './Navigation_page';
import Login from './Login';
import { Link, NavLink } from 'react-router-dom';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
class App extends Component {
  render() { 
    return (       
      <div >
          <Login/>
          <Signup/>
          <Navigation_page/>
          <Textbox/>
      </div>           
    );
  }
}
   
export default App;
