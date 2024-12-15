import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js'
import Carousel1 from './components/carousel.js';
import Container1 from './components/container1.js'
import Gallery from './components/gallery.js'
import Order from './components/order.js'
import Form from './components/form.js'
import Footer from './components/footer.js'

function App() {
  return (
    <div className="App">
      <header className="">
        <Navbar />
      </header>
      <div className='body'>
        <Carousel1 />
        <Container1 />
        <Gallery />
        <Order />
        <Form />
        <Footer />
      </div>
    </div>
  );
}

export default App;
