import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Portfolio from './Portfolio';
import Project from './Project';
import ScrollToTop from './scrollToTop';
import './assets/css/style.css';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/zen-focus" element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
