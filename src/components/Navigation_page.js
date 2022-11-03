import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "./Navigation_page.css" 


export function Navigation_page() {
  const navigate = useNavigate();

    const navigateToCricket = () => {
      navigate('/Cricket');
    };
    return (
      <div className="loginback">
        <h1 align="center">Navigation Page</h1>
        <h3 align="center"> select a group in which you want to go and talk with all the people interested in that topic</h3>
        <form>
            <div className="bodycss" align="center">
                <button className="buttons" onClick={navigateToCricket}> Cricket </button>
            </div>
            <div className="bodycss" align="center">
                <button className="buttons" > Food </button>
            </div>
            <div className="bodycss" align="center">
                <button className="buttons"> Movies </button>
            </div>
            <div className="bodycss" align="center">
                    <button className="buttons"> Girls </button>
            </div>
            <div className="bodycss" align="center">
                <button className="buttons"> Boys </button>
            </div>
            <div className="bodycss" align="center">
                <button className="buttons"> College </button>
            </div>
            <div className="bodycss" align="center">
                <button className="buttons"> School </button>
            </div>
        </form>
      </div>
    );
  }

 
export default Navigation_page;