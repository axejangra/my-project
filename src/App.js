
import './App.css';

import React, { useState } from 'react'

import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import Alert from './components/Alert';

// import About from './components/About';
// import {
//   BrowserRouter as Router,
  
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1800);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert("dark mode has been enabled", "success")
    } else {
      setMode('light');
      showAlert("light mode has been enabled", "success")
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="my-App" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Routes> */}
        {/* <Route path="" element={<TextForms heading="enter a text to analyze" />}/> */}
          {/* <Route path="/action" element={<About/>}/> */}
            
          <TextForms heading="enter a text to analyze" />

          
            
          
        {/* </Routes> */}

      {/* </Router> */}
    </>
  );
}

export default App;
