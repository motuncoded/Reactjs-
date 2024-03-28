import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faX } from '@fortawesome/free-solid-svg-icons'

const DeleteBlock = () => {
  return (
      <FontAwesomeIcon icon={faX} className='text-red-500 hover:cursor-pointer hover:bg-red-400'/>
   )
}

export default DeleteBlock