import React from 'react'
import Header from '../../Atoms/Header'
import "./styles.css"
export default function ModalComponent({ show, setShow = () => { },children }) {
    return (
        <>
            {show && <div className='Modal-Container'>
                <button  className="Modal-CloseBtn" onClick={() => { setShow(false) }}>Close</button>
             {children}
            </div>}
        </>
    )
}
