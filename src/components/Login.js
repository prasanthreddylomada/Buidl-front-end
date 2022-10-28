import React from "react"


class Login extends React.Component {
    render () {
        return (
            <div align="center">
                <div>
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
                    <button>Login</button>
                </div>
                <div>
                    <label>New User? Sign Up</label>
                </div>
            </div>

        );
    }
}



export default Login;