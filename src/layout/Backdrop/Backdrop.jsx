import React from 'react'
import './BAckdrop.css';
function Backdrop({closeCart}) {
    return (
        <div onClick={closeCart} className="backdrop" />
    )
}

export default Backdrop