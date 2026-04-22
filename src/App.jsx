
import { useState } from 'react'
import './App.css'
import {useNotification} from './toast-notification/ToastProvider'

function App() {
  const [showToast, setShowToast] = useState(false)

  const addNotification = useNotification()

  function handleClick(){
    //setShowToast(!showToast)
    addNotification({title:'first notification'})
  }

  return (
    <>
      <button onClick={handleClick}>show notification</button>
    </>
  )
}

export default App
