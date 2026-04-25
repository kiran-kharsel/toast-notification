import React from 'react'
import ToastNotification from '../ToastNotification'

function ToastContainer({toasts = [], onRemove}) {

  const position = toasts?.[0]?.position || 'top-right'

  return (
    <div data-position={position} className='toast-container'>
        {
            toasts.map((toast) => {
                return <ToastNotification onRemove={onRemove} {...toast} key={toast.id} />
            })
        }
    </div>
  )
}

export default ToastContainer