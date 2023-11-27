import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Rhome from './Component/Rhome'
import Singup from './Component/Singup'
import Error from './Component/Error'
import Info from './Component/Info'
import Singed from './Singed'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import './App.css'

function App() {

  return (
    <>
  <Navbar/>

  <Routes>

  <Route path="/" element={<Rhome/>} />
  <Route path="Home/Info" element={<Info/>} />
  <Route path="/Home" element={<Home/>} />
  <Route path="/Singup" element={<Singup/>} />
  <Route path="Home/Singup/Singed" element={<Singed/>} />
  <Route path="/*" element={<Error/>}/>
  <Route path="/*/*" element={<Error/>}/>

  </Routes>
  
    </>
  )
}

export default App
