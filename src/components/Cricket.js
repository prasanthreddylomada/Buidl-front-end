import React, { Component } from 'react';
import "./Textbox.css"
  
class Cricket extends Component {
  render() {
    

    const data =[{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id:2,name:"Nova",Message:"test2"},{id:2,name:"Nova",Message:"test2"},{id:2,name:"Nova",Message:"test2"},];

    
    return (
        <div className='loginback'>
            <div className='textbox-center'>
                <h1 align="center">Cricket</h1>
                <div align = "left" className="container">
                    {data.map((data) => (
                        <ol style={{listStyle: "none"}}>
                            <li Key={(data.id)}>
                                <p>{data.name}: {data.Message}</p>    
                            </li>
                        </ol>
                    ))}
                    
                </div>
                <div className='fullwidth' align="right">   
                    
                    <form >
                        <input  type="text" placeholder = "type your message" />
                        <button className="sendbuttons"> send </button>
                    </form>
                </div>
            </div>
            
        </div>  
    );
  }
}
   
export default Cricket;