import React from 'react'
import { UserContext } from '../init/UserContext.jsx'
import { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom';
function Account() {
    const {ready,user}=useContext(UserContext);
    if(!ready){
        return 'loading...';
    }
    if(ready && !user){
        return <Navigate to={'/login'}/>
    }
  return (
    <div>
        <nav className='w-full flex justify-center mt-8 gap-2'>
            <Link  className='py-2 px-6 bg-red-500 text-white rounded-full'to={'/account/profile'}>My profile</Link>
            <Link className="py-2 px-4 bg-gray-400 rounded-full"to={'/account/booking'}>My booking</Link>
            <Link to={'/account/places'}>My accommodation</Link>
        </nav>
    </div>
  )
}

export default Account