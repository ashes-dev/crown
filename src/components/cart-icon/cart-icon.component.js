import React from 'react'
import './cart-icon.styles.scss'
import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg'

const CartIcon = () => (
    <div className='cart-icon'>
        <ShopIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

export default CartIcon