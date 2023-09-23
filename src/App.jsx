import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComingSoon from './views/ComingSoon';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="container">
          <Routes>
            <Route path="/" element={<ComingSoon />} />
          </Routes>

          <Footer />
      </div>
    </Router>
  );
};

export default App;
