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


const [show, setShow] = useState(false);


const showlogin = () => {


setShow(true)


}





  return (
    <div className="App">
      


<div  className={`  fixed top-0 left-0 right-0  ${show ? '   translate-y-0' : 'translate-y-[-100vh] '}   transition-all duration-500  h-[30vh]   bg-green-700  `}>

<h1

onClick={() => setShow(!show)}
>close me</h1>

overlay here


</div>


<div
onClick={showlogin}
className=''
>
  show form
</div>


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
