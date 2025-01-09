import React, { useContext } from "react";
import Login from "./components/Login"
import { Route, Routes } from "react-router-dom";
import Voting from "./components/Voting";

import End from "./components/End"
import Dashboard from "./components/Dashboard";
import { Contextuse } from "./Providers";

function App() {

  const { currentLoggedIn, isAuth, votingStatus } = useContext(Contextuse)

  return (
    <Routes><Route path="/login" element={<Login />} />
      <Route path="/home" element={<Voting />} />
      <Route path="/complete" element={<End />} />


      <Route path="/" element={
        isAuth === true ?
          (currentLoggedIn.role === 'admin' ? <Dashboard /> : (votingStatus === true ? <Voting /> : <End />))
          : <Login />
      } />

    </Routes>

  );
}

export default App;
