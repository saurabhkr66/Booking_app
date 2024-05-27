import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Places() {
  const {action}=useParams();

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
     <div>
        <form>
          <h2 className='text-2xl mt-4'>Title</h2>
          <p className='text-gray-500 text-sm'>title for your place</p>
        <input type="text"className="px-4 py-2 border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:shadow-md transition duration-300 ease-in-out w-full"placeholder='title, for ex: my lovely apartement'/>
        <h2 className='text-2xl mt-4'>Address</h2>
        <p className='text-gray-500 text-sm'>address to this place</p>
         <input type="text"className="px-4 py-2 border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:shadow-md transition duration-300 ease-in-out w-full"placeholder='address'/>
         <h2 className='text-2xl mt-4'>Photos</h2>

         <p className='text-gray-500 text-sm'>more=better  </p>   
         <div className='flex'>
         <input type="text"className="px-4 py-2 border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:shadow-md transition duration-300 ease-in-out w-full"placeholder='add photos using a link (jpg file)'/>
         <button className='bg-gray-200 px-4 rounded-2xl'>add&nbsp;photo</button>
         </div>
         <div className='mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
         <button className="flex gap-2 justify-center border bg-transparent rounded-2xl p-8">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
</svg>

          upload from this device
          
          </button> 
          </div> 
          <h2 className='text-2xl mt-4'>Description</h2>
          <p className='text-gray-500 text-sm'>description of the place</p>
          <textarea className='w-full border my-1 py-2 px-3 rounded-2xl'/>
          <h2 className='text-2xl mt-4'>Perks</h2>
          <p className='text-gray-500 text-sm'>select all the perks</p>
          <div>
            <label>
              
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
</svg>
<input type="checkbox"/>

              <span>wifi</span>
            </label>
            <label>
              <input type="checkbox"/>
              <span>free perks</span>
            </label>
            <label>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
</svg>

              <input type="checkbox"/>

              <span>tv</span>
            </label>
            <label>
              <input type="checkbox"/>
              <span>private entrance</span>
            </label>
            <label>
              <input type="checkbox"/>
              <span>wifi</span>
            </label>
            <label>
              <input type="checkbox"/>
              <span>pets</span>
            </label>
            
          </div>
          </form>
      </div>
    )}
    </div>
  )
}

export default Places