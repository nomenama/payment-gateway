import React from "react";

const TextField = (props) => {
	const {
		children,
		style,
		className = "",
		type = "text",
		placeholder = "",
		value,
		onChange,
		pattern,
		title,
		required
	} = props;

	const classNames = ["textField"];
	classNames.push(className);

	const finalClassName = classNames.join(" ");

	return (
		<input type={type} pattern={pattern} title={title} className={finalClassName} style={style} placeholder={placeholder} onChange={onChange} value={value} readOnly={!onChange} required={required}/>
	);
};

export default TextField;
