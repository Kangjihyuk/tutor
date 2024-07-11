import React from 'react'
import { useRouteError } from 'react-router-dom'
const error = () => {
    const error = useRouteError()
    console.log(error)
    
  return (
      <div className='flex justify-center h-screen items-center flex-col'>
          <h1 className='text-3xl font-bold'>Oops!</h1>
          <p className='text-xl mt-4'>Sorry, an unexpected error has occurred.</p>
          <p className='text-xl mt-2'>
              {error.statusText || error.message}
          </p>
      </div>
  )
}

export default error