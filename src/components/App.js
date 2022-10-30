import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cricket from './Cricket';
import Signup from './Signup';
import Navigation_page from './Navigation_page';
import Login from './Login';
import Home from './Home';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
class App extends Component {
  render() { 
    return ( 
      <div> 
      <Router>
      <div>
        <div>
        <ul>
          
          <li><a href="/">Home</a></li>
          <li class="right"><a href="/login">Login</a></li>
          <li class="right"><a href="/signup">Signup</a></li>
          <li class = "right"><a href="/NavigationPage">Nav</a></li>
          
        </ul>
        </div>
        <div>

        </div>
      </div>   
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/NavigationPage" element={<Navigation_page />} />
          <Route path="/Cricket" element={<Cricket/>} />
          
        </Routes>
      
      </Router>
    </div>        
    );
  }
}




export default App;
