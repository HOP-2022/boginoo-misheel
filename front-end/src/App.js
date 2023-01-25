import React from 'react';
import './App.css';
// import {Home} from "./pages/home-defualt"
import {Short} from "./pages/shortened";
import {History} from "./pages/history";
import {Login} from "./pages/login";
import {SignUp} from "./pages/signUp";
import { ForgotPass } from './pages/forgotPass';

function App() {
  return (
    <div>
    {/* <Home/> */}
    {/* <Short/> */}
    {/* <History/> */}
  {/* <Login/> */}
  {/* <SignUp/> */}
    <ForgotPass/>
    </div>
  );
}

export default App;
