import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages and components
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import ContactForm from './components/pages/ContactForm';
import Footer from './components/Footter';
import About from './components/pages/Aboutpg';
import Scrollbtn from './components/scrollbutton';
import EventDetails from './components/pages/EventDetails';
import Events from './components/pages/Events';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Scrollbtn />
        <div className='pages'>
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/event' element={<Events />} />
            <Route path='/contactus' element={<ContactForm />} />
            <Route path='/about' element={<About />} />
            <Route path="/event/:id" element={<EventDetails />} />

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
