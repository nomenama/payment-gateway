import React from "react";

const Row = (props) => {
	const {
		children,
		style,
		id,
		className = ""
	} = props;

	const classNames = ["row"];
	classNames.push(className);

	const finalClassName = classNames.join(" ");

	return (
		<div className={finalClassName} style={style} id={id}>
			{children}
		</div>
	);
};

export default Row;
