import React, { Component } from 'react';
import "./Textbox.css"
  
class Textbox extends Component {
  render() {
    const myStyle={
        backgroundImage: 
                        "url(data:image/jpeg;base64,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)",
        height:'50vh',
        marginTop:'0px',
        fontSize:'15px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const data =[{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id: '1',name: "Prasanth",Message:"test1"},{id:2,name:"Nova",Message:"test2"},{id:2,name:"Nova",Message:"test2"},{id:2,name:"Nova",Message:"test2"},{id:2,name:"Nova",Message:"test2"},];

    
    return (
      <div >
        <div style={{alignItems: 'center',justifyContent: 'center',height: '100vh',}}>
                    <div className="container" style={myStyle}>
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
                        
                        <input type="text" name="name" placeholder = "type your message" style={{width: "750px"}}/>
                            <button className="buttonW"> send </button>
                    </div>
                        
                </form>
                 </div>
      </div>
    );
  }
}
   
export default Textbox;