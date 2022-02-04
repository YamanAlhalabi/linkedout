import React from "react";
import "./App.css";
import SignIn from "./pages/SignIn";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Restore from "./pages/Restore";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="restore" element={<Restore />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
