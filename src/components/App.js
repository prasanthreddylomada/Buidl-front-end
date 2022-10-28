import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Textbox from './Textbox';
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
         {/* <Navbar sticky="top" bg="light" >
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        
        <Navbar.Collapse id="navbar">
          <Nav >
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Signup">Signup</Nav.Link>
            <NavDropdown title="Chats" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Cricket">Cricket</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}



      <Router>
        <ul>
          <li><a href="/">Home</a></li>
          <li class="right"><a href="/login">Login</a></li>
          <li class="right"><a href="/signup">Signup</a></li>
          <li class = "right"><a href="/Navigationpage">Nav</a></li>
          {/* <NavDropdown title="Chats" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Cricket">Cricket</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
        </ul>
          
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/NavigationPage" element={<Navigation_page />} />
          <Route path="/Cricket" element={<Textbox/>} />
        </Routes>
      
      </Router>
    </div>        
    );
  }
}




export default App;
