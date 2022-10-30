import React, { Component } from "react";
import { useNavigate } from "react-router-dom"; 
export function Signup() {
  const navigate = useNavigate();

  const navigateToNavigation_page = () => {
    // 👇️ navigate to /contacts
    navigate('/Navigationpage');
  };
    return (
      <div align="center" className="loginback">
        <div className="center">
          <h2>Lets get you signed up</h2>
          <form>
              <div align="center">
                  <input type="text" name="name" placeholder = "username" style={{width: "200px"}}/>
              </div>
              <div align="center">
                  <input type="text" name="name" placeholder = "Password" style={{width: "200px"}}/>
              </div>
              <div align="center">
                  <input type="text" name="name" placeholder = "confirm your password" style={{width: "200px"}}/>
              </div>
              <div align="center">
                <button onClick={navigateToNavigation_page} className="loginbuttons">Signup</button>
              </div>
          </form>
        </div>
      </div>
    );
  }

 
export default Signup;