import React from 'react'
import './style.css'

import infoIcon from '../assets/information.png'
import successIcon from '../assets/success.png'
import warningIcon from '../assets/warning.png'

function ToastNotification(props) {
    const {id = '',title='', desc='', onRemove = ()=>{}, cta ='', type = 'info'} = props;


    function handleRemove(){
        onRemove(id)
    }

  return (
    <div className='toast'>
        <button onClick={handleRemove} className='toast-close'>&times;</button>
        <div className="toast-content">
            <div className="toast-info">
                <img className='info-icon' height={'24px'} width={'24px'} src={infoIcon} alt="" />
                <div className="toast-title-desc">
                    <span>{title}</span>
                    <span>{desc}</span>
                </div>
            </div>
            <div className="toast-cta">{cta}</div>
        </div>
        <div className="toast-progress"></div>
    </div>
  )
}

export default ToastNotification