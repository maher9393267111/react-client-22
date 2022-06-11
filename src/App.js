import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Home from './pages/home'
import {useState, useEffect,useRef} from 'react';


function App() {


  const checkref= useRef(null);
  


// make checked input clicked when clkick to button

const hamndlechecked = () => {

  checkref.current.click();
  console.log(checkref.current.checked);
  if(checkref.current.checked){
      
      document.body.style.backgroundColor = "blue";
    }
    else{
      document.body.style.backgroundColor = "white";

    }
}





  return (
    <div className="App">
      
     hello maher

<h1
 onClick={hamndlechecked}

>  change site mode</h1>



<input type="checkbox"   className='    hidden' ref={checkref} />

    

    {/* <Home/> */}



    </div>
  );
}

export default App;
