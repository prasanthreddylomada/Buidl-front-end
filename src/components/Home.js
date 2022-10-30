import React from "react"
import "./Home.css"
import logo from "./images/logo.png"
class Home extends React.Component {
    render () {
        return (
            <div className="loginback">
                <div className="center" align="center">  
                    <h1>Welcome To group Chats</h1>
                    <div>
                    We are meeting here in order to find people with similiar interests along with security of identity.
                    </div>
                    <div>
                    We provide security with the help of aeternity block chain.
                    </div>
                    <div className="images">
                        <img src={logo} width="400" height="400"/>
                    </div>   
                </div>
            </div>

        );
    }
}



export default Home;