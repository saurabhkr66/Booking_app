

import { Route, Routes } from 'react-router-dom'
import Index from './components/Index'
import Loginpage from './components/Loginpage'
import Layout from './Layout/Layout'

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Index/>}/>
      <Route path="/login" element={<Loginpage/>}/>
      </Route>
      
    </Routes>
  
     
    
  )
}

export default App
