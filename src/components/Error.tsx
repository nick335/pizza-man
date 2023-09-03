import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

// interface props{
//   error: Error,
//   resetErrorBoundary: Err
// }

const Fallback = ({error, resetErrorBoundary}: any ) => {
  return (
    <div className='h-screen flex items-center justify-center'>
     <div role='alert' className={`max-w-[400px] w-[80%] bg-red-100 flex flex-col items-center justify-center py-8 rounded-xl`}>
      <FontAwesomeIcon icon={faCircleExclamation} size='lg' className='text-red-500 w-10 h-10 text-center' />
      <h3 className='pt-4 text-center text-xl'>Something went wrong</h3>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary} className='mt-4 outline-none bg-blue-300 h-8 w-20 rounded-lg' >Retry</button>
     </div>
    </div>
  )
}

export default Fallback;