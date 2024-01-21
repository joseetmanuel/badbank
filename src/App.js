import "./App.css";
import Home from "./home";
import React from "react";
import CreateAccount from "./createAccount";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import AllData from "./allData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from './context';

function App() {
  return (
    <BrowserRouter>
      <UserContext.Provider value={{users: []}}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/allData" element={<AllData />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
