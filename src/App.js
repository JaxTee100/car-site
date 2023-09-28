
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HondaRoutes from './routes/Honda.routes';
import HomePage from './main-home/HomePage';
import { AccessoriesResults, SearchFilter } from './containers';
import { BrandDropdown, FilterDropdown, ItemsDropdown, ModelDropdown, PostalDropdown, Toggle, YearDropdown } from './components';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' exact element={<HomePage />} />
        <Route path='*' element={<HondaRoutes />} />
        
      </Routes>
    </Router>
    // <AccessoriesResults/>
    
    
  );
}

export default App;
