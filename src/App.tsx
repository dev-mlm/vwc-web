import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { StaffPage } from './pages/StaffPage';
import { ServicesPage } from './pages/ServicesPage';

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/staff">Staff</Link> | <Link to="/services">Services</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
