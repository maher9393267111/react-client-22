import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Home from './pages/home'
import {useState, useEffect,useRef} from 'react';


function App() {


  const checkref= useRef(null);
  


// make checked input clicked when clkick to button



const [show, setShow] = useState(false);








  return (
    <div className="App">
      
<div

className='bg-[background: linear-gradient(315deg, #a85dd4 0%, #25342b 100%)]  w-[200px] h-[200px]'
>
<img
className='w-full h-full'
src="https://websitedemos.net/courier-04/wp-content/uploads/sites/540/2020/01/bg-overlay-01-free-img.png" alt="" />

</div>






    </div>
  );
}

export default App;
