

import { Route, Routes } from 'react-router-dom'
import Index from './components/Index'
import Loginpage from './components/Loginpage'
import Layout from './Layout/Layout'
import Registerpage from './components/Registerpage'

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Index/>}/>
      <Route path="/login" element={<Loginpage/>}/>
      <Route path="/register" element={<Registerpage/>}/>
      </Route>
      
    </Routes>
  
     
    
  )
}

export default App
