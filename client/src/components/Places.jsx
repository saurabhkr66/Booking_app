import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Perks from '../Perks';
import axios from 'axios';
import PlacesForm from './PlacesForm';
function Places() {
  const {action}=useParams();



//  async function addPhotoBylink(e){
//   e.preventDefault();
//  try {
//    await axios.post('/upload-by-link',{link:photoLink})
 
//  } catch (error) {
//   console.log(error)
//  }
// }
  return (
    <div>
      {action !== 'new' &&(
            <div className='text-center'>
            <Link className='inline-flex gap-1 bg-red-500 text-white py-2 px-6 rounded-full' to={'/account/places/new'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
    
              add new places</Link>
        </div>
    
      )}
    {action ==='new' && (
    <PlacesForm/>
    )}
    </div>
  )
}

export default Places