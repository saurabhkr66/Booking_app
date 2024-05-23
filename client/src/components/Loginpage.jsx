import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../init/UserContext.jsx'
function Loginpage() {
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [redirect,setredirect]=useState(false)
  const {setUser}=useContext(UserContext);
  async function handleLoginSubmit(e){
    e.preventDefault();
    try {
      const {data}=await axios.post('/login',{
        email,password
      });
      setUser(data)
      alert('login successful')
      setredirect(true);
    } catch (error) {
      console.log(error)
    }
  }
  if(redirect){
    return <Navigate to={'/'}/>
  }
  return (
   <div className='mt-4 grow flex items-center min-h-screen justify-around'>
    <div className="mb-64">
    <h1 className='text-4xl text-center mb-4'>Login</h1>
    <form className='max-w-md mx-auto'onSubmit={handleLoginSubmit}>
        <input type="email"
        className='w-full border my-1 py-2 px-3 rounded-2xl'
        placeholder='your@email.com'
        value={email}
        onChange={(e)=>setemail(e.target.value)}
        />
        <input type="password"
        placeholder='password'
        className='w-full border my-1 py-2 px-3 rounded-2xl'
        value={password}
        onChange={(e)=>setpassword(e.target.value)}/>
        <button className='bg-red-500 p-2 w-full text-white rounded-full'>Login</button>
<div className='text-center'>didn't have account?<Link className="underline text-red-600" to={'/register'}>Register</Link></div>
    </form>
   </div>
   </div>
 
  )
}

export default Loginpage