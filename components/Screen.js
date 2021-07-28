import React from "react";
import Column from "./Column";

const Screen = (props) => {
	const {
		children,
		style,
		className = ""
	} = props;

	const classNames = ["flex"];
	classNames.push(className);

	const finalClassName = classNames.join(" ");

	return (
		<Column className={finalClassName} style={style}>
			{children}
		</Column>
	);
};

export default Screen;
