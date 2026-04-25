import { createContext, useCallback, useContext, useState } from "react";
import ToastContainer from "./toast-container/ToastContainer";


const ToastContext = createContext({})


export const useNotification = ()=> {
    return useContext(ToastContext)
}

function ToastProvider({children}){
    const [toasts, setToasts] = useState([]);

    const addNotification = useCallback(({title, desc, type, cta, position})=>{
        const obj = {title, desc, type, cta, position}

        const id = Date.now()

        setToasts((prev) => {
            return [{...obj, id}, ...prev]
        })
    }, []);

    return(
        <ToastContext.Provider value={addNotification}>
            {children}
            <ToastContainer toasts={toasts}/>
        </ToastContext.Provider>
    )
}

export default ToastProvider;