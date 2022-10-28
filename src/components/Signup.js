import React, { Component } from "react";
 
class Signup extends Component {
  render() {
    return (
      <div>
        <h2>Sign up</h2>
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
                    <button > Sign up </button>
            </div>
        </form>
      </div>
    );
  }
}
 
export default Signup;