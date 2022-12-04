import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Portfolio from './Portfolio';
import Project from './Project';
import './assets/css/style.css';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/zen-focus" element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
