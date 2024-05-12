
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import HelpCenter from './pages/HelpCenter';
import VacationPackage from './pages/Vacation-Package';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/helpcenter' element={<HelpCenter />} />
          <Route path='/Vacation-Packages' element={<VacationPackage />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
