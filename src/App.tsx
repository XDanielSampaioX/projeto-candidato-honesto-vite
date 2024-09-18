import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Contato from './pages/Contato';


export default function App() {
  return (
      <div className="bg-blue-950 m-auto flex flex-col items-center justify-center">
        <Header />
        <Routes>
            <Route path='/admin' element={<Admin />} />
            <Route path='/Contato' element={<Contato />} />
            <Route path='/' element={<Home />} />
        </Routes>
        <Footer/>
      </div>
  );
}
