
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Page/Home/Home'
import Login from './Page/Login/Login'
function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
