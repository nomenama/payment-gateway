import React from "react";
import Head from "next/head";
import Image from "next/image";
import Screen from "../components/Screen";


export default function Home () {
	return (
		<Screen>
			<Head>
				<title>Stripe Payment Gateway</title>
				<meta name="description" content="Stripe Payment Gateway"/>
				<link rel="icon" href=""/>
			</Head>
			<div>
				<h1>Welcome to Irrelon Group</h1>
			</div>

		</Screen>
	);
}
