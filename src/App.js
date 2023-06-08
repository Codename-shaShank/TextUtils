import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import About from './components/About';
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { Switch } from "react-router-dom";

// import { 
//   BrowserRouter as Router,
//   Routes,
//   Route
//  } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null)

  const showalert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
     setalert(null);
    },1500);
  }

  const toggleMode = () =>{
    if (mode ==='light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showalert('Dark mode enabled', 'success');
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showalert('Light mode enabled', 'success');
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" about="about" mode={mode} toggleMode={toggleMode}/>
    <Alert alert ={alert} />
    <div className="container my-3">
    <TextForm showalert={showalert} heading="Enter the text to analyze below" mode={mode}/>
         {/* <Routes> */}
         {/* <Route> */}
          {/* <Route path="/about" element={<About mode={mode} />}  > */}
         {/* </Route> */}
          {/* <Route path="/" element={<TextForm showalert={showalert} heading="Enter the text to analyze below" mode={mode}/>}  > */}
         {/* </Route> */}
         {/* </Route> */}
          {/* </Routes> */}
      
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
