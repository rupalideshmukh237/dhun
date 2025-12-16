import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Home Page/Navbar";
import Videocard from "./Home Page/Videocard";
import SingleVideo from "./Home Page/SingleVideo";
import Home from '../src/Home Page/Home'
import Wellness from "./Wellness/Wellness";
import Treatment from "./Treatments/Treatment";
import About from './About/About'
import Contact from "./Contact/Contact";
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
     <Navbar /> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Wellness"element={<Wellness/>}/>
        <Route path="" element={<Videocard />} />
        <Route path="/video/:id" element={<SingleVideo />} />
        <Route path="/Treatment" element={<Treatment/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
