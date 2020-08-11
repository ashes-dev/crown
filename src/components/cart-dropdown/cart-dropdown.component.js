import React from 'react'
import './cart-dropdown.styles.scss'

// router
import { withRouter } from 'react-router-dom'

// redux
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selector'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

// components
import CustomButton from '../custon-button/custon-button.component'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ? 
                (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)) :
                (<span className='empty-message'>Cart is Empty</span>)
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout') 
            dispatch(toggleCartHidden())
        }}>
            GO TO CHECKOUT
        </CustomButton>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown))