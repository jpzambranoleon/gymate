import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Footer from "./components/Footer";
import About from "./views/About";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./views/Login";
import Signup from "./views/SignUp";
import Contact from "./views/Contact";
import Classes from "./views/Classes";
import Blog from "./views/Blog";
import Price from "./views/Price";
import GalleryPage1 from "./views/Gallery/GalleryPage1";
import GalleryPage2 from "./views/Gallery/GalleryPage2";
import Schedule from "./views/Schedule/Schedule";
import Monday from "./views/Schedule/Monday";
import Tuesday from "./views/Schedule/Tuesday";
import Wednesday from "./views/Schedule/Wednesday";
import Thursday from "./views/Schedule/Thursday";
import Friday from "./views/Schedule/Friday";
import Saturday from "./views/Schedule/Saturday";
import Sunday from "./views/Schedule/Sunday";
import Gallery from "./views/Gallery/Gallery";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/pricing" element={<Price />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />

          <Route path="/schedule" element={<Schedule />}>
            <Route path="monday" element={<Monday />} />
            <Route path="tuesday" element={<Tuesday />} />
            <Route path="wednesday" element={<Wednesday />} />
            <Route path="thursday" element={<Thursday />} />
            <Route path="friday" element={<Friday />} />
            <Route path="saturday" element={<Saturday />} />
            <Route path="sunday" element={<Sunday />} />
          </Route>

          <Route path="/gallery" element={<Gallery />}>
            <Route path="page-1" element={<GalleryPage1 />} />
            <Route path="page-2" element={<GalleryPage2 />} />
          </Route>
        </Routes>
        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;
