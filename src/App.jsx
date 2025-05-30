import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AddBook from './pages/AddBook'
import Profile from './pages/Profile'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/sign-up' element={<Signup />} />
      <Route path='/add-book' element={<AddBook />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  )
}

export default App