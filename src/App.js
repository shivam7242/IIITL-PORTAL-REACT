import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Dashboard } from './components/Dashboard';
import { LandingPage } from './components/LandingPage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LeaveRequest } from './components/LeaveRequest';
import { Profiles } from './components/Profiles';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/leaveRequest" element={<LeaveRequest />} />
        <Route path="/profile" element={<Profiles />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
