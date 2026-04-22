import React from 'react'
import ToastNotification from '../ToastNotification'

function ToastContainer({toasts = []}) {
  return (
    <div>
        {
            toasts.map((toast) => {
                return <ToastNotification {...toast} key={toast.id} />
            })
        }
    </div>
  )
}

export default ToastContainer