import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <div className="bg-blue-950 p-3">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}
