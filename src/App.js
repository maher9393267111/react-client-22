import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Home from "./pages/home";
import { useState, useEffect, useRef } from "react";
import { ThemeProvider } from './context/ThemeContext';
import Navbar from "./components/Navbar";
import { Route, Routes } from 'react-router-dom';
function App() {
  const checkref = useRef(null);

  const [coins, setCoins] = useState([]);

  const [show, setShow] = useState(false);

  return (
    <ThemeProvider>
  <div className="App">

  <Navbar />
  {/* <Routes>
          <Route path='/' element={<Home coins={coins} />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account' element={<Account />} />
          <Route path='/coin/:coinId' element={<CoinPage />}>
            <Route path=':coinId' />
          </Route>
        </Routes> */}

{/* <Footer /> */}


  </div>
  </ThemeProvider>

  )
}

export default App;
