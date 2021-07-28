import React from "react";

const Column = (props) => {
	const {
		children,
		style,
		className = ""
	} = props;

	const classNames = ["column"];
	classNames.push(className);

	const finalClassName = classNames.join(" ");

	return (
		<div className={finalClassName} style={style}>
			{children}
		</div>
	);
};

export default Column;
