import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Home from './pages/home'
import {useState, useEffect} from 'react';
import {ContactUs} from './pages/email'
function App() {

const [data, setData] = useState([]);
const handleClick = () => {
  axios.get('http://localhost:5000/user/reg').then(res => {
    setData(res.data);
    console.log(res.data);
  })
}


  return (
    <div className="App">
      
      mian branch here

<button
onClick={handleClick}
>fetch data</button>
    

    {/* <Home/> */}


<ContactUs/>
    </div>
  );
}

export default App;
