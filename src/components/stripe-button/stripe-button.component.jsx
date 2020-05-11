import React from 'react'

import StripeCheckOut from 'react-stripe-checkout'

const StripeCheckOutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_zNa0f4wMUwPyeR8mp8i9wx7O003WS4j9Om'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
    return (
        <StripeCheckOut
        label = 'Pay Now'
        name = 'Crown Clothing'
        billingAddress
        shippingAddres
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckOutButton