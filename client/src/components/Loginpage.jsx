import React from 'react'
import { Link } from 'react-router-dom'

function Loginpage() {
  return (
   <div className='mt-4 grow flex items-center min-h-screen justify-around'>
    <div className="mb-64">
    <h1 className='text-4xl text-center mb-4'>Login</h1>
    <form className='max-w-md mx-auto'>
        <input type="email"
        className='w-full border my-1 py-2 px-3 rounded-2xl'
        placeholder='your@email.com'/>
        <input type="password"
        placeholder='password'
        className='w-full border my-1 py-2 px-3 rounded-2xl'/>
        <button className='bg-red-500 p-2 w-full text-white rounded-full'>Login</button>
<div>didn't have account?<Link to={'/register'}>Register</Link></div>
    </form>
   </div>
   </div>
 
  )
}

export default Loginpage