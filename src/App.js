import React from "react";
import Login from "./components/Login"
import { Route, Routes } from "react-router-dom";
import Voting from "./components/Voting";



function App() {
  return (
    <div>
      <Routes><Route path="/" element={<Login />} /></Routes>
      <Routes><Route path="/home" element={<Voting />} /></Routes>
    </div>
  );
}

export default App;
