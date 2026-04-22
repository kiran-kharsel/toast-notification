import { createContext, useCallback, useContext, useState } from "react";
import ToastContainer from "./toast-container/ToastContainer";


const ToastContext = createContext({})


export const useNotification = ()=> {
    useContext(ToastContext)
}

function toastProvider({children}){
    const [toasts, setToasts] = useState([]);

    const addNotification = useCallback((title, desc, type, cta, poition)=>{
        const obj = {title, desc, type, cta, poition}

        const id = Date.now()

        setToasts((prev) => {
            return [{...obj, id}, ...prev]
        })
    }, []);

    return(
        <ToastContext.Provider value={addNotification}>
            {children}
            <ToastContainer/>
        </ToastContext.Provider>
    )
}

export default toastProvider;