"use client"

import React, { useState} from 'react';
import Today from './Date';

function TodoList () {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')

const handleChange = (e) => {
    setInputValue(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault()
    setTodos([...todos, inputValue])
    setInputValue('')
}

const handleDelete = ( index ) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
}

    return(
        <section>
        <div className="flex justify-center w-full">
        <div className='flex justify-center bg-primary border-[15px] border-white px-5 py-6 my-10 rounded-xl first-letter w-[400px]'>
                <Today/>
        </div>
        </div>
         <div className='bg-[#F2F2F2] grid place-items-center h-auto py-10 '>
            <div className="">
            <form className="mb-5 w-[400px]">
                <div className="flex flex-row justify-between w-full">
                <input className='border-[15px] border-white rounded-xl py-2 px-4 text-[#0e1111] mr-3' type="text" value={inputValue} onChange={handleChange}/>
                <button className='bg-[#E1C7F5]  hover:bg-[#9B5CD8] font-bold text-[#0e1111] py-2 px-4 border-[15px] border-white rounded-xl' onClick={handleSubmit}>Add Todo</button>
                </div>
            </form>
            <ul className='flex flex-col flex-wrap gap-5 w-[400px]'>
                {todos.map((todo, index) =>(
                    <div className="w-full py-2 bg-white rounded-xl  text-[#0e1111] px-3 flex justify-between align-middle">
                    <li className='bg-white rounded-xl w-full text-[#0e1111] flex my-auto' key={index}>{todo}
                    </li>
                    <div>
                    <button className='bg-[#F6E2DF] rounded-full hover:bg-[#EA5731] text-[#0e1111] text-xs font-medium w-8 h-6 ' onClick={() => handleDelete(index)}>X</button>
                    </div>
                    </div>
                ))}
            </ul>
            </div>
         </div>
        </section>
    );
}



export default TodoList;

