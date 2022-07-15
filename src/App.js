import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/footer';
import Accueil from './components/pages/Accueil/Accueil';
import Notre_structure from './components/pages/Notre_structure/Notre_structure';
import Nos_offres from './components/pages/Nos_offres/Nos_offres';
import Contact from './components/pages/Contact/Contact';
import Depot from './components/pages/Depot/depot';
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
          <Route path='/Depot' element={<Depot />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
