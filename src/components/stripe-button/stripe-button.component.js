import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const API_KEY = 'pk_test_51H5oIODlbxPFhhNB1jwAZDrkcrCVUkbXBd3sDb79HrFt8OfxeGWylIz1x3ChT9ARVFGgZu0y6rCqaOVybflcQLgm006BzGirtI'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='crown Ltd.'
            billingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your price is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={API_KEY}
        />
    )

}

export default StripeCheckoutButton