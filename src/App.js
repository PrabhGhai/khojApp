import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Images from "./pages/Images";
import Videos from "./pages/Videos";
import News from "./pages/News";
import Footer from "./components/Footer";
import Search from "./search";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Search />} />
        <Route path="/home" element={<Home />} />
        <Route path="/images" element={<Images />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
