import React from "react"
import "./login.css"
import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();

    const navigateToSignup = () => {
      // 👇️ navigate to /contacts
      navigate('/Signup');
    };
    
     {
        return (
            <div align="center" className="loginback">
                <div className="center">
                    <div >
                        <h2>Login</h2>
                    </div>
                    <div>
                        <label>Wallet ID</label>
                    </div>
                    <div>
                        <input type="text" name="name" placeholder="wallet id"></input>
                    </div>
                    <div>
                        <label>Password</label>
                    </div>
                    <div>
                        <input type="text" name="password" placeholder="password"></input>
                    </div>
                    <div>
                        <button className="loginbuttons">Login</button>
                    </div>
                    <div >
                        if you are new
                        <button onClick={navigateToSignup} className="Signupbuttons">Signup</button>
                    </div>
                </div>
                
            </div>

        );
    }
}



export default Login;