import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-text flex flex-col">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
