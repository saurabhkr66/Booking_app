import React, { useState } from 'react'
import { UserContext } from '../init/UserContext.jsx'
import { useContext } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Places from './Places.jsx';
function Account() {
    const {ready,user,setUser}=useContext(UserContext);
const [redirect,setRedirect]=useState(null)
    let {subpage}=useParams();
    if(subpage=== undefined){
        subpage='profile'
    }

  async function logout(){
      await axios.post('/logout')
      setRedirect('/');
      setUser(null);
    }
    if(!ready){
        return 'loading...';
    }
    if(ready && !user  && !redirect){
        return <Navigate to={'/login'}/>
    }
    function linkclasses(type=null){
        let classes='inline-flex gap-2 py-2 px-6 rounded-full';
        if(type===subpage ){
            classes+="  bg-red-500 text-white "
        }else{
            classes+="bg-gray-200";
        }
        return classes;
    }
    if(redirect){
        return <Navigate to={redirect}/>
    }
   
  return (
    <div>
        <nav className='w-full flex justify-center mt-8 gap-2 mb-8'>
            <Link className={linkclasses('profile')} to={'/account/profile'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

                My profile</Link>
            <Link className={linkclasses('booking')}to={'/account/booking'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

                My booking</Link>
            <Link className={linkclasses('places')}to={'/account/places'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

                My accommodation</Link>
        </nav>
        {subpage === 'profile'&&(
            <div className='text-center max-w-lg mx-auto'>
                logged in as {user.name}({user.email})<br/>
                <button onClick={logout} className='bg-red-500 p-2 w-full text-white rounded-2xl max-w-sm mt-2'>Logout</button>
                </div>
        )}
        {subpage==='places'&&(
           <Places/>
        )}
    </div>
  )
}

export default Account