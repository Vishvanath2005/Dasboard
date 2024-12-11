import React from 'react'

const Title = ({title, onClick}) => {
  return (
    <div className='flex  justify-between items-center'>
      <p className='text-4xl font-Exo font-semibold'>{title}</p>
      <button className='border px-6 py-2 rounded-md bg-orange text-lg text-white font-base'>Add {title}</button>
    </div>
  )
}

export default Title
