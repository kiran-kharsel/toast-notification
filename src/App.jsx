
import { useState } from 'react'
import './App.css'
import {useNotification} from './toast-notification/ToastProvider'
import toastService from './toast-notification/ToastService'

function App() {
  const [showToast, setShowToast] = useState(false)

  //const addNotification = useNotification()

  function handleClick(){
    //setShowToast(!showToast)
    //addNotification({title:'first notification'})
    toastService.sendToast({ title: "Hello!", type: "info" });
  }

  return (
    <>
      <button onClick={handleClick}>show notification</button>
    </>
  )
}

export default App
