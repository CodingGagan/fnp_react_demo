import React from 'react'
import { Button } from 'react-bootstrap';
import './Sidebar.css';
import SidebarCart from './SidebarCart';
function Sidebar({ show, cartCount }) {
    let drawerClasses = 'side-drawer'
    if (show) {
        drawerClasses = 'side-drawer open'
    }
    return (
        <div className={drawerClasses}>
            <h3>Wishlist</h3>
            <div className="sideBarScroll">
            {
                cartCount.map((el, key) => (
                    <SidebarCart/>
                ))
            }
            </div>
            <Button className='primary d-block mx-auto p-1 w-75 mt-2'>Checkout</Button>
        </div>
    )
}

export default Sidebar