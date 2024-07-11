import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }
  return (
    <div className='flex justify-center gap-5'>
        <h1 className='py-1 px-3 rounded-md bg-blue-600'>{count}</h1>
        <button onClick={() => handleClick()} className='bg-black py-1 px-3 text-white font-bold'>+</button>
    </div>
  )
}

export default Counter
