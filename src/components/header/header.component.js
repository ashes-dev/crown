import React from 'react'
import './header.styles.scss'

// router
import { Link } from 'react-router-dom'

// redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectCartHidden } from '../../redux/cart/cart.selector'

// firebase
import { auth } from '../../firebase/firebase.utils'

// components
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)