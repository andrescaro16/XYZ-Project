import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
/* import Register from './pages/Register' */
import Profile from './pages/Profile'
import Product from './pages/Product'
import Commerce from './pages/Commerce'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
         {/*  <Route path='/' element={ <Register /> } /> */}
          <Route path='/login' element={ <Login /> } />
          <Route path='/commerce' element={ <Commerce /> } />
          <Route path='/profile/:id' element={ <Profile /> } />
          <Route path='/product/:id' element={ <Product /> } />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
