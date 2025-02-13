import React, { useContext } from "react";
import Login from "./components/Login"
import { Route, Routes } from "react-router-dom";
import Voting from "./components/Voting";

import End from "./components/End"
import Dashboard from "./components/Dashboard";
import { Contextuse } from "./Providers";
import User_manage from "./components/User_manage";
import Voting_manage from "./components/Manage";
import Home from "./components/Home";

function App() {

  const { currentLoggedIn, isAuth, votingStatus } = useContext(Contextuse)

  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/live" element={<Voting />} />
      <Route path="/complete" element={<End />} />


      <Route path="/dashboard" element={
        isAuth === true ?
          (currentLoggedIn.role === 'admin' ? <Dashboard /> : (votingStatus === true ? <Voting /> : <End />))
          : <Login />
      } />
      <Route path="/user" element={<User_manage />} />
      <Route path="/voter" element={<Voting_manage />} />
    </Routes>

  );
}

export default App;
