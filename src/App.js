
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import OTP from './pages/OTP';
import HelpCenter from './pages/HelpCenter';
import VacationPackage from './pages/Vacation-Package';
import Hotels from './pages/Hotels';
import Cars from './pages/Cars';
import Flights from './pages/Flights';
import Cruises from './pages/Cruises';
import Activities from './pages/Activities';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/otp' element={<OTP />} />
          <Route path='/helpcenter' element={<HelpCenter />} />
          <Route path='/Cars' element={<Cars />} />
          <Route path='/Flights' element={<Flights />} />
          <Route path='/Cruises' element={<Cruises />} />
          <Route path='/Activities' element={<Activities />} />
          <Route path='/Hotels' element={<Hotels />} />
          <Route path='/Vacation-Packages' element={<VacationPackage />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
