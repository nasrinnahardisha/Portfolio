import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <div className="dark relative flex  justify-center bg-black min-h-screen w-full lg:px-4 xl:px-8 ">
        <Header></Header>
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
