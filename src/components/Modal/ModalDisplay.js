import React from 'react'

const ModalDisplay = ({ closeModal }) => {
  
  
  return (
    <div className="h-96 w-96 bg-gray-400 ">
      <div>
        <div>
          <button
            className="border-2 border-black"
            onClick={() => closeModal(false)}
          >
            X
          </button>
        </div>

        <div>
          <h1>Are you sure you want to continue</h1>{' '}
        </div>
        <div>
          <p>Next page is awesome</p>
        </div>
        <div>feel free to continue</div>
        <button onClick={() => closeModal(false)}>Cancel</button>
        <button>Continue</button>
      </div>
    </div>
  )
}

export default ModalDisplay
