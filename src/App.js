import Navbar from "./HomeComponents/Navbar/Navbar";
import Footer from "./HomeComponents/Footer/Footer";
import Request from './HomeComponents/Request/Request'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Features from "./Features";
import Contacts from "./Contacts";

function App() { 
  return (
    <div>
      <Navbar />      
      <BrowserRouter >
        <Routes>
          <Route path = "/" element={<Home />}/>
          <Route path = "about" element={<About />}/>
          <Route path="services" element={<Services />}/>
          <Route path="features" element={<Features />}/>
          <Route path="contacts" element={<Contacts />}/>
        </Routes>
      </BrowserRouter>
      <Request />
      <Footer />
    </div>
  );
}

export default App;
