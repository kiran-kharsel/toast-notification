import React from 'react'
import './style.css'

import infoIcon from '../assets/information.png'
import successIcon from '../assets/success.png'
import warningIcon from '../assets/warning.png'


const NotificationTypes = {
    info: infoIcon,
    danger: warningIcon,
    success: successIcon,
}

function ToastNotification(props) {
    const {id = '',title='', desc='', onRemove, cta ='', type = 'info', position='top-right', exiting,updateToast = ()=>{}} = props;


    function handleRemove(){
        //onRemove(id)
        updateToast(id)
    }

    let className = 'toast';
    if(exiting){
        className += ' exiting-toast'
    }

  return (
    <div data-types={type}  className={className}>
        {!!onRemove && <button onClick={handleRemove} className='toast-close'>&times;</button>}
        <div className="toast-content">
            <div className="toast-info">
                <img className='info-icon' height={'24px'} width={'24px'} src={NotificationTypes[type]} alt="" />
                <div className="toast-title-desc">
                    <span>{title}</span>
                    {!!desc && <span>{desc}</span>}
                </div>
            </div>
            {!!cta && <div className="toast-cta">{cta}</div>}
        </div>
        <div className="toast-progress"></div>
    </div>
  )
}

export default ToastNotification