import React from "react";

const VerticalSpace = (props) => {
	const {
		children,
		style = {},
		className = "",
		height = 0
	} = props;

	const classNames = [];
	classNames.push(className);

	const finalClassName = classNames.join(" ");

	// Only override height if it is not already set on the style object
	style.height = style.height === undefined ? height : style.height;

	return (
		<div className={finalClassName} style={style}>
			{children}
		</div>
	);
};

export default VerticalSpace;
