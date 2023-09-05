
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HondaRoutes from './routes/Honda.routes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<HondaRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
