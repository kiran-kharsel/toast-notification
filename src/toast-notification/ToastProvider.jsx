import { createContext, useCallback, useContext, useEffect, useState } from "react";
import ToastContainer from "./toast-container/ToastContainer";
import toastService from "./ToastService";


const ToastContext = createContext({})


export const useNotification = ()=> {
    return useContext(ToastContext)
}

function ToastProvider({children}){
    const [toasts, setToasts] = useState([]);


    useEffect(()=>{
        toastService.registerNotification(addNotification)
    }, [])

    //todo: stop if toasts is empty
    useEffect(()=>{
        const id = setInterval(()=>{
            setToasts((prev)=>{
                return prev.map((toast) => {
                    const currentProgress = toast.progress // 100
                    const currentDuration = toast.duration // 5000
                    const hundredthPart = currentDuration / 100; // 50
                    const percentToReduce = 100 / hundredthPart; // 100/50 = 2

                    //toast.progress = currentProgress - percentToReduce; // 100 - 2 = 98

                    if(toast.progress <= 0){
                        return null
                    }

                    return {...toast, progress: currentProgress - percentToReduce};
                }).filter(Boolean)
            })

        }, 100)

        return ()=>{
            return clearInterval(id)
        }
    }, [])

    const onRemove = (id) => {
        setToasts(prev => {
            return prev.filter((item) => item.id != id)
        })
    }

    const updateToast = (id) => {
        setToasts(prev => {
            return prev.map((toast) =>{
                toast.exiting = toast.id === id;
                return toast
            })
        })
    }

    const addNotification = useCallback(({title, desc, type, cta, position})=>{
        const obj = {title, desc, type, cta, position}

        const id = Date.now()

        setToasts((prev) => {
            return [{...obj, id, duration: 5000, progress: 100}, ...prev]
        })
    }, []);

    return(
        <ToastContext.Provider value={addNotification}>
            {children}
            <ToastContainer toasts={toasts} onRemove={onRemove} updateToast={updateToast}/>
        </ToastContext.Provider>
    )
}

export default ToastProvider;