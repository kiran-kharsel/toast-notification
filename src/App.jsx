
import { useState } from 'react'
import './App.css'
import ToastNotification from './toast-notification/ToastNotification'

function App() {
  const [showToast, setShowToast] = useState(false)

  function handleClick(){
    setShowToast(!showToast)
  }

  return (
    <>
      <button onClick={handleClick}>show notification</button>
      {showToast && <ToastNotification title='testing'/>}
    </>
  )
}

export default App
