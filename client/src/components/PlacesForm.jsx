import { useState } from "react"
import Perks from "../Perks"
import axios from "axios"

export default function PlacesForm(){
    const [title,setTitle]=useState('')
const [address,setAddress]=useState('')
const [description,setDescription]=useState('')
const [photoLink,setPhotoLink]=useState('')
const [addedPhotos,setAddedPhotos]=useState('')
const [perks,setPerks]=useState('')
const [extraInfo,setExtraInfo]=useState('')
const [checkIn,setCheckIn]=useState('')
const [checkOut,setCheckOut]=useState('')
const [maxGuests,setMaxGuests]=useState(1)

function inputHeader(text){
  
    return(<h2 className='text-2xl mt-4'>{text}</h2>)
  }
  function inputDescription(text){
    return (
    <p className='text-gray-500 text-sm'>{text}</p>
  )
  }
  function preInput(header,description){
    return (
      <>
      {inputHeader(header)}
      {inputDescription(description)}
      </>
    )
  }
  async function addNewPlace(e){
  e.preventDefault();
  
    await axios.post('/places',{title,
      address,description,
      perks,extraInfo,checkIn,
      checkOut,maxGuests})
    
  }
    return(
        <div>
        <form onSubmit={addNewPlace}>
          {preInput('title','title for your place')}
        <input type="text" value={title} onChange={e=>setTitle(e.target.value)}className="px-4 py-2 border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:shadow-md transition duration-300 ease-in-out w-full"placeholder='title, for ex: my lovely apartement'/>
        {preInput('address','address to this place')}
         <input type="text"
         value={address} 
         onChange={e=>setAddress(e.target.value)}
         className="px-4 py-2 border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:shadow-md transition duration-300 ease-in-out w-full"placeholder='address'/>
         {preInput('photos','more == better')}
         <div className='flex'>
         <input type="text"
         value={photoLink}
          onChange={e=>setPhotoLink(e.target.value)}
          className="px-4 py-2 border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:shadow-md transition duration-300 ease-in-out w-full"placeholder='add photos using a link (jpg file)'/>
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
         {preInput('Description','Description of this place')}
          <textarea value={description}
          onChange={e=>setDescription(e.target.value)}
          className='w-full border gap-2 my-1 py-2 px-3 rounded-2xl'/>
         {preInput('perks','Perks of this place')}
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
          <Perks selected={perks} onChange={setPerks}/>
            
          </div>
          <h2 className='text-2xl mt-4'>Extra info</h2>
          <p className='text-gray-500 text-sm'>house rules etc</p>
          <textarea 
          value={extraInfo}
          onChange={e=>setExtraInfo(e.target.value)}
          
          className='w-full border gap-2 my-1 py-2 px-3 rounded-2xl'/>
          
          <h2 className='text-2xl mt-4'>check in and out time</h2>
          <p className='text-gray-500 text-sm'>plz add check in and out time</p>
          <div>
            <div className=''>
            <h3 className='text-lg font-bold'>check in time</h3>

            <input 
            value={checkIn}
            onChange={e=>setCheckIn(e.target.value)}
            
            type="datetime-local" className='border my-1 py-2 px-3 rounded-2xl'/>

            </div>
            <div>
              <h3 className='text-lg font-bold'>check out time</h3>
            <input 
            value={checkOut}
            onChange={e=>setCheckOut(e.target.value)}
            type="datetime-local" className=' border my-1 py-2 px-3 rounded-2xl'/>

            </div>
            <div>
            <h3 className='text-lg font-bold'>max no of guests</h3>

            <input 
            value={maxGuests}
            onChange={e=>setMaxGuests(e.target.value)}
            type="number" className=' border my-1 py-2 px-3 rounded-2xl'/>

            </div>
            </div>
            <button className='bg-red-500 text-white justify-around inline-flex gap-2 py-2 px-6 rounded-full w-full'>Save</button>
            </form>
      </div>
    )
}