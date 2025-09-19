import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './component/NavBar';
import Home from './pages/Home';
import City from './pages/City';
import CityDetail from './pages/CityDetail';
import Culture from './pages/Culture';
import Tips from './pages/Tips';

function App() {
  return (
    <div className="App">
      <NavBar />

      <main className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/city' element={<City />} />
          <Route path='/city/:id' element={<CityDetail />} />
          <Route path='/culture' element={<Culture />} />
          <Route path='/tips' element={<Tips />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <small>&copy; {new Date().getFullYear()} CITY EXPLORER</small>
      </footer>
    </div>
  );
}

export default App;
