import React from 'react'
import './style.css'

function ToastNotification() {
  return (
    <div className='toast'>
        <button className='toast-close'>&times;</button>
        <div className="toast-content">
            <div className="toast-info">
                {/* <img src="" alt="" /> */}
                <span className='info-icon'>ℹ️</span>
                <div className="toast-title-desc">
                    <span>title</span>
                    <span>desc</span>
                </div>
            </div>
            <div className="toast-cta"></div>
        </div>
        <div className="toast-progress"></div>
    </div>
  )
}

export default ToastNotification