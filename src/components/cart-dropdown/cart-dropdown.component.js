import React from 'react'
import './cart-dropdown.styles.scss'

// components
import CustomButton from '../custon-button/custon-button.component'

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown