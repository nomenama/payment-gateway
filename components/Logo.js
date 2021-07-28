import React from "react";
import Link from "next/link";

const Logo = (props) => {
	const {
		blackAndWhite = false,
		width,
		height = 79,
		style,
		brand = "",
		href = ""
	} = props;

	return (
		<Link href={href}><a style={{"padding": "0", "border": "none"}}><img className="logo" src={blackAndWhite === true ? `/assets/logo-${brand}.png` : `/assets/logo-${brand}.png`} width={width} height={height} style={style}/></a></Link>
	);
};

export default Logo;
