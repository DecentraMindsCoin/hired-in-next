import React, { useState } from 'react'
import ModalDisplay from './ModalDisplay'
const Modal = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className="relative h-96 w-full">
      <div className=" my-auto h-full w-full bg-green-500 text-center">
        <h1>This is a modal</h1>
        <button onClick={() => setOpenModal(true)}>Open modal</button>
       {openModal && <ModalDisplay closeModal={setOpenModal}/>} 
      </div>
    </div>
  )
}

export default Modal
