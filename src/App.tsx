import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Admin from './pages/Admin';
import Home from './pages/Home';

export default function App() {
  return (
      <div className="bg-blue-950 p-3 m-auto flex flex-col items-center justify-center flex-1 bg-cover min-h-screen">
        <Header />
        <Routes>
            <Route path='/admin' element={<Admin />} />
            <Route path='/' element={<Home />} />
        </Routes>
        <Footer/>
      </div>
  );
}
