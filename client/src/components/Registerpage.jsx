import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Registerpage() {
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    function registerUser(e){
    e.preventDefault();
    axios.post('/register',{
      name,email,password
    })
    
    }
  return (
    <div className='mt-4 grow flex items-center min-h-screen justify-around'>
    <div className="mb-64">
    <h1 className='text-4xl text-center mb-4'>register</h1>
    <form className='max-w-md mx-auto'onSubmit={registerUser}>
      <input type="name" className="w-full border my-1 py-2 px-3 rounded-2xl"
      placeholder='your name'
      value={name}
      onChange={(e)=>setname(e.target.value)}
      />
      
        <input type="email"
        className='w-full border my-1 py-2 px-3 rounded-2xl'
        placeholder='your@email.com'
        value={email}
      onChange={(e)=>setemail(e.target.value)}/>
        <input type="password"
        placeholder='password'
        className='w-full border my-1 py-2 px-3 rounded-2xl'
        value={password}
      onChange={(e)=>setpassword(e.target.value)}/>
        <button className='bg-red-500 p-2 w-full text-white rounded-full'>register</button>
<div className='text-center'>already have account?<Link className="underline text-blue-500 "to={'/login'}>Login</Link></div>
    </form>
   </div>
   </div>
  )
}

export default Registerpage