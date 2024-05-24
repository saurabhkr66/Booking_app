import React, { useState } from 'react'
import { UserContext } from '../init/UserContext.jsx'
import { useContext } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
function Account() {
    const {ready,user}=useContext(UserContext);
const [redirect,setRedirect]=useState(null)
    let {subpage}=useParams();
    if(subpage=== undefined){
        subpage='profile'
    }

  async function logout(){
      try {
        await axios.post('/logout');
      } catch (error) {
        console.log('hii',error)
      }
   

    }
    if(!ready){
        return 'loading...';
    }
    if(ready && !user){
        return <Navigate to={'/login'}/>
    }
    function linkclasses(type=null){
        let classes='py-2 px-6';
        if(type===subpage ){
            classes+=" bg-red-500 text-white rounded-full"
        }
        return classes
    }
   
  return (
    <div>
        <nav className='w-full flex justify-center mt-8 gap-2 mb-8'>
            <Link className={linkclasses('profile')} to={'/account/profile'}>My profile</Link>
            <Link className={linkclasses('booking')}to={'/account/booking'}>My booking</Link>
            <Link className={linkclasses('places')}to={'/account/places'}>My accommodation</Link>
        </nav>
        {subpage === 'profile'&&(
            <div className='text-center max-w-lg mx-auto'>
                logged in as {user.name}({user.email})<br/>
                <button onClick={logout} className='bg-red-500 p-2 w-full text-white rounded-2xl max-w-sm mt-2'>Logout</button>
                </div>
        )}
    </div>
  )
}

export default Account