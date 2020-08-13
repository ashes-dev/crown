import React from 'react'

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

import {
    HeaderContainer, 
    LogoContainer, 
    OptionsContainer, 
    Optionlink, 
    OptionDiv 
} from './header.styles'

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo />
        </LogoContainer>
        <OptionsContainer>
            <Optionlink to='/shop'>SHOP</Optionlink>
            {
                currentUser ?
                <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv> :
                <Optionlink to='/signin'>SIGN IN</Optionlink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)