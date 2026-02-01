import About from './components/About.js'
import './App.css';
import Navbar from './components/Navbar.js';
import { useState } from 'react';
import Alerts from './components/Alerts.js';
function App() {
  const [mode, setmode] = useState('light');
  const [alert,setalert] = useState('null');
  const showalert = (message,type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
   const togglemode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      showalert("Dark mode is enabled","success");
      document.title = 'TextUtils-Dark Mode';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode is enabled","success");
      document.title = 'TextUtils-Light Mode';
    }
  }
  return (
   <>
   <Navbar mode={mode} togglemode={togglemode}/>
   <Alerts alert={alert} />
     <About/>
   </>
  );
}

export default App;
