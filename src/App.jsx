
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Layout from './Components/Layout/Layout'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import EOR from './Pages/EOR'
function App() {

  return (
    <>
   
    <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/services' element={<Home />} />
          <Route path='/Eor' element={<EOR />}/>
        </Route>
        
    </Routes>
    
    </>
  )
}

export default App
