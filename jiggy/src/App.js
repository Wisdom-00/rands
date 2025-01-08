import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar.js';
import Home from './jiggy/home/home.js';
import Gallery from './jiggy/gallery/gallery.js';
import About from './jiggy/about/about.js';
import Footer from './components/footer.js'

function App() {
  return (
    <div className="App">
      
        <Router>
          <Navbar />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/portfolio" element={<Gallery />} />
            <Route path="/about_us" element={<About />} />
          </Routes>
          <Footer/>
        </Router>
      
    </div>
  );
}

export default App;
