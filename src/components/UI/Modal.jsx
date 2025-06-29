import {useRef, useEffect} from "react";
import { createPortal } from "react-dom";

//useRef => 
export default function Modal({children, open, onClose}) {
    const dialog = useRef()

    useEffect(() => {
        const modal = dialog.current
    
        if (open){
            modal.showModal()
        }

        return () => modal.close();

    }, [open])

    return createPortal (
        <dialog onClose={onClose} ref={dialog}> {children} </dialog>,
        document.getElementById('modal')
    )
}