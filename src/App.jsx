import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import About from "./views/About";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
          <Footer />
        </AuthContextProvider>
      </Router>
    </>
  );
}

export default App;
