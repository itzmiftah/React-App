
      import './App.css';
      import React from 'react';
      import Navbar from './components/Navbar';
      import TextForm from './components/TextForm';
      import Alert from './components/Alert';
      import About from './components/About';
      import Contact from './components/Contact';
     
      import { useState } from 'react';
      
      import {
        BrowserRouter as Router,
        Route,
        Switch,
      } from "react-router-dom";
   
      
      function App(probs) {
        
         
     const  [mode,setMode] = useState('light');

      const  [alert,setAlert] = useState(null);

      const showAlert= (message,type) =>{
         setAlert({
          msg:message,
          type:type
         })
         setTimeout(() => {
          setAlert(null);
         }, 1500); 
      }
         
     const toggleMode = () =>{
        if(mode === "light"){
        setMode("dark");
        document.body.style.backgroundColor='#042743';
        showAlert("Dark mode enable","success");
        }
        else {
          setMode("light");
          document.body.style.backgroundColor='white';
          showAlert("Light mode enable","success");
        } 
      } 

        return (
      <> 
       
    <Router>
      <Navbar  aboutHome="Home" aboutText='About' contact='Contact' mode={mode}    toggleMode={toggleMode} />
      <Alert alert={alert}/>
    

      <div className="container my-3 ">
        <Switch> 
           <Route exact path="/about">
           <About />
           </Route>
           <Route exact path="/contact">
           <Contact/>
           </Route>
            <Route exact path="/">
             <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /> 
           </Route>
        </Switch>
    </div>
    
    </Router>
       </>
        );
      };
  export default App;
