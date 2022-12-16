import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Portfolio from './Portfolio';
import ZenFocus from './projects/ZenFocus';
import Selenite from './projects/Selenite';
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
          <Route path="/zen-focus" element={<ZenFocus />} />
          <Route path="/selenite" element={<Selenite />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
