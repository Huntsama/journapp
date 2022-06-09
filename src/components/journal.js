import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

export default function journal({ item , showModal }) {
    return (
        <div>
            <div onClick={()=>showModal(item)} className="mx-5 my-2 flex w-90 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-gray-300">
                <div className="p-4 flex-row mx-1 my-1">
                    <div className="flex justify-between"> 
                    <span className="flex justify-start" > {item.date}</span>  
                    <AiOutlineDelete className='flex justify-end text-2xl text-red-500' />        
                    </div>
                    <h1 className="text-2xl font-medium text-slate-600 pb-2"> <span> {item.title}</span></h1>                          
                    <p className="text-sm tracking-tight font-light text-slate-400 leading-6">  {item.journal}</p>     
                </div>
                
               
                
            </div>



        </div>
    )
}
