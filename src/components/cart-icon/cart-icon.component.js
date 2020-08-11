import React from 'react'
import './cart-icon.styles.scss'
import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg'

// redux
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { createStructuredSelector } from 'reselect'
import { selectCartitemsCount } from '../../redux/cart/cart.selector'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShopIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartitemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)