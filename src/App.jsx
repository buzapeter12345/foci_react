import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Jatekosma from './pages/Jatekosma/Jatekosma';
import Jatekosokma from './pages/Jatekosokma/Jatekosokma';
import Ujjatekosma from './pages/Ujjatekosma/Ujjatekosma';
import Jatekosokfc from './pages/Jatekosokfc/Jatekosokfc';
import Jatekosfc from './pages/Jatekosfc/Jatekosfc';
import Ujjatekosfc from './pages/Ujjatekosfc/Ujjatekosfc';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/jatekosma/:id" element={<Jatekosma />} />
          <Route path="/jatekosokfc" element={<Jatekosokfc />} />
          <Route path="/jatekosfc/:id" element={<Jatekosfc />} />
          <Route path="/jatekosokma" element={<Jatekosokma />} />
          <Route path="/ujjatekosma" element={<Ujjatekosma />} />
          <Route path="/ujjatekosfc" element={<Ujjatekosfc />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
