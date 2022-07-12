import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/footer';
import Accueil from './components/Accueil/Accueil';
import Notre_structure from './components/Notre_structure/Notre_structure';
import Nos_offres from './components/Nos_offres/Nos_offres';
import Contact from './components/Contact/Contact';
import Plaquette from './components/Plaquette/Plaquette';
import Depot from './components/Depot/depot';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/Notre_structure' element={<Notre_structure />} />
          <Route path='/Nos_offres' element={<Nos_offres />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Plaquette' element={<Plaquette />} />
          <Route path='/Depot' element={<Depot />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
