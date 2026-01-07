import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Luxury from './pages/Luxury';
import Neo from './pages/Neo';
import Organic from './pages/Organic';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/luxury" element={<Luxury />} />
        <Route path="/neo" element={<Neo />} />
        <Route path="/organic" element={<Organic />} />
      </Routes>
    </Router>
  );
}

export default App;
