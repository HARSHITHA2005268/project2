import React, {useState} from'react'

export default function Feedback(){
    const[data,setData]=useState()
  
    return(
        <div className='from'>
            <label>Username:</label>
         <input
         type='text' 
         placeholder='enter usermail'
         required
         />  <br /> 

         <label>Feedback : </label>
         <textarea
         type='text'
         placeholder='message'
         required
         /> <br />
         <button>Submit</button>


        </div>
    )
}