import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./Componets/HomePage";
import Signin from "./Componets/Register/Signin";
import Signup from "./Componets/Register/Signup";
import Profile from "./Componets/Profile/Profile";
import Main from "./Componets/Main";

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
  );
}

export default App;
