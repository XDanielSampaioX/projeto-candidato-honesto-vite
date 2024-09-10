import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Footer from './components/Footer';

export default function App() {
  return (
      <div className="bg-blue-950 p-3 m-auto flex flex-col items-center justify-center flex-1 bg-cover min-h-screen">
        <Menu />
        <Routes>
            <Route path='/admin' element={<Admin />} />
            <Route path='/' element={<Home />} />
        </Routes>
        <Footer/>
      </div>
  );
}
