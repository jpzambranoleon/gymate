import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Footer from "./components/Footer";
import About from "./views/About";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./views/Login";
import Signup from "./views/SignUp";

function App() {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="about" element={<About />} />
          </Routes>
          <Footer />
        </AuthContextProvider>
      </Router>
    </>
  );
}

export default App;
