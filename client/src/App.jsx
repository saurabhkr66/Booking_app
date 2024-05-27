

import { Route, Routes } from 'react-router-dom'
import Index from './components/Index'
import Loginpage from './components/Loginpage'
import Layout from './Layout/Layout'
import Registerpage from './components/Registerpage'
import axios from 'axios'
import {UserContextProvider} from './init/UserContext'
import Account from './components/Account'


axios.defaults.baseURL='http://localhost:4000'
axios.defaults.withCredentials=true;
function App() {
  

  return (
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Index/>}/>
      <Route path="/login" element={<Loginpage/>}/>
      <Route path="/register" element={<Registerpage/>}/>
      <Route path="/account/:subpage" element={<Account/>}/>
      <Route path="/account/:subpage/:action" element={<Account/>}/>


      </Route>
      
    </Routes>
    </UserContextProvider>
  
     
    
  )
}

export default App
