import Navbar from './components/Navbar/Navbar';
import Home from './pages/HomePage/Home';
import Teachers from './pages/TeachersPage/Teachers';
import Login from './pages/LoginPage/Login';
import Signup from './pages/SignupPage/Signup';
import TeachersQueryProvider from './context/TeachersQueryContext';
import RedirectGoogleAuth from './authentication/RedirectHandler';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return <>
    <TeachersQueryProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

          {/* Login callback */}
          <Route path="/login/callback" element={<RedirectGoogleAuth />} />
        </Routes>
      </BrowserRouter>
    </TeachersQueryProvider>
  </>
}

export default App;
