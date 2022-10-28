import React, { Component } from 'react';
import "./Textbox.css"
  
class Textbox extends Component {
  render() {
    

    const data =[{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id:2,name:"Nova",Message:"test2"},{id:2,name:"Nova",Message:"test2"},{id:2,name:"Nova",Message:"test2"},];

    
    return (
        <div >
            <h1>Cricket</h1>
            
            <div align = "left" className="container">
                {data.map((data) => (
                    <ol style={{listStyle: "none"}}>
                        <li Key={(data.id)}>
                            <p>{data.name}: {data.Message}</p>    
                        </li>
                    </ol>
                ))}
            </div>
            <form>
                <div align="left" className="sendbox">
                    
                    <input type="text" name="name" placeholder = "type your message" style={{width: "45%"}}/>
                        <button className="buttonW" style={{width: "5%"}}> send </button>
                </div>
                    
            </form>
        </div>
        
      
      
    );
  }
}
   
export default Textbox;