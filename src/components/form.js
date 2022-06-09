import React, { useState } from 'react';

export default function Form({addItem}) {
    const [title , setTitle] = useState("")
    const [date , setDate] = useState("")
    const [journal , setJournal] = useState("")
    
    
    const onSubmit= (event)=>{
        event.preventDefault()
        let itemObject = {
            title :title,
            date : date,
            journal : journal
        }
        addItem(itemObject)
    }
  
    return (

   

    <div>
       <form onSubmit={onSubmit}>
            <div >
                <input onChange={(event)=> setTitle(event.target.value) } placeholder='title' className='journal-input' />        
                <input  onChange={(event)=> setDate(event.target.value) } type="date" className='journal-date-input' />
            </div>
            <textarea  onChange={(event)=> setJournal(event.target.value) } placeholder='write your journal here' rows="7" className="journal-textarea"/>
            <button type="submit" className="text-white text-xl bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br  font-medium rounded-lg px-20 py-3 text-center mt-5">Add</button>


       </form>

    </div>
  )
}
