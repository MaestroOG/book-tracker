import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AddBook from './pages/AddBook'
import Profile from './pages/Profile'
import Header from './components/Header'
import Navbar from './components/Navbar'
import BookPage from './pages/BookPage'

const App = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/profile' && <Header />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/add-book' element={<AddBook />} />
        <Route path='/book/:id' element={<BookPage />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Navbar />
    </>
  )
}

export default App