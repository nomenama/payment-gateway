import React, {useState} from "react";
import Row from "./Row";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import Column from "./Column";
import {destroyCookie} from "nookies";

const CheckoutForm = ({paymentIntent}) => {

	const stripe = useStripe();
	const elements = useElements();
	const [checkoutError, setCheckoutError] = useState(undefined);
	const [checkoutSuccess, setCheckoutSuccess] = useState(undefined);

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			const {error, paymentIntent: {status}} = await stripe.confirmCardPayment(paymentIntent.client_secret, {
				payment_method: {
					card: elements.getElement(CardElement)
				}
			});

			if (error) throw new Error(error.message);

			if (status === "succeeded") {
				destroyCookie(null, "paymentIntentId");
				setCheckoutSuccess(true);
			}
		} catch (err) {
			setCheckoutError(err.message);
		}
	};

	if (checkoutSuccess) {
		return <p>Payment successful!</p>;
	}

	return (
		<Column className="container width100p justifyCenter">
			<form className="paymentForm" onSubmit={handleSubmit}>
				<CardElement/>
				<button type="submit" disabled={!stripe}>Pay Now</button>
				{checkoutError && <span style={{color: "red"}}>{checkoutError}</span>}
			</form>
		</Column>
	);
};

export default CheckoutForm;