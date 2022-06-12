import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import CoinPage from "./pages/CoinPage";
import { useState, useEffect, useRef } from "react";
import { ThemeProvider } from './context/ThemeContext';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from 'react-router-dom';
import Signin from "./pages/Signin";
import Account from "./pages/Account";
function App() {
  const checkref = useRef(null);

  const [coins, setCoins] = useState([]);

  const [show, setShow] = useState(false);


  const url =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true';






useEffect(() => {
  axios.get(url).then((response) => {
    setCoins(response.data);
   //  console.log(response.data)
  });
}, [url]);




  return (
    <ThemeProvider>
  <div className="App">

  <Navbar />
   <Routes>
          <Route path='/' element={<Home coins={coins} />} />
          <Route path='/coin/:coinId' element={<CoinPage />}></Route>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
            <Route path='/account' element={< Account/>} />  
       
            {/* <Route path=':coinId' /> */} 
          {/* </Route> */}
        </Routes> 

<Footer />


  </div>
  </ThemeProvider>

  )
}

export default App;
