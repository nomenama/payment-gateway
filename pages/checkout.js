import React from "react";
import Stripe from "stripe";
import {parseCookies, setCookie} from "nookies";
import {loadStripe} from "@stripe/stripe-js/pure";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

export const getServerSideProps = async (ctx) => {
	const stripe = new Stripe("sk_test_51JIEq8A5KSy2gtyRETch0HWJ8xUrlM5w43v454YfJqq1fPKMAmyUm8IXmeqRUGHdVotm19YlLamS8KT2e8e15ojf00FOM03OhO");

	let paymentIntent;

	const {paymentIntentId} = await parseCookies(ctx);

	if (paymentIntentId) {
		paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

		return {
			props: {
				paymentIntent
			}
		};
	}

	paymentIntent = await stripe.paymentIntents.create({
		amount: 1000,
		currency: "gbp"
	});

	setCookie(ctx, "paymentIntentId", paymentIntent.id);

	return {
		props: {
			paymentIntent: paymentIntent
		}
	};
};

const stripePromise = loadStripe("pk_test_51JIEq8A5KSy2gtyR5lgeTwurHPfzsROYmjLEl5eGOegs2YvYzEhfNL8AxJhDFXpYAwUJLRRSGNNe3HGTYfgIC2Ap00MjWw9jdy");

const CheckoutPage = ({paymentIntent}) => {
	return (
		<Elements stripe={stripePromise}>
			<CheckoutForm paymentIntent={paymentIntent}/>
		</Elements>
	);
};

export default CheckoutPage;