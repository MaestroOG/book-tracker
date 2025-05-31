import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AddBook from './pages/AddBook'
import Profile from './pages/Profile'
import Header from './components/Header'
import Navbar from './components/Navbar'
import BookPage from './pages/BookPage'
import ProtectionRoute from './pages/ProtectionRoute'

const App = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/profile' && <Header />}
      <Routes>
        <Route path='/' element={
          <ProtectionRoute>
            <Home />
          </ProtectionRoute>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/add-book' element={
          <ProtectionRoute>
            <AddBook />
          </ProtectionRoute>
        } />
        <Route path='/book/:id' element={<BookPage />} />
        <Route path='/profile' element={
          <ProtectionRoute>
            <Profile />
          </ProtectionRoute>
        } />
      </Routes>
      {location.pathname !== '/login' && location.pathname !== '/sign-up' && <Navbar />}
    </>
  )
}

export default App