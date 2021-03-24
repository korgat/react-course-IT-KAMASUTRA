import React from "react"
import s from "./FormControls.module.css"


export const FormComponentCreator = (ElementType) => ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error
	return (
		<div className={s.formControl + " " + (hasError && s.error)}>
			<div>
				<ElementType {...props} {...input} />
			</div>
			<div>
				{hasError && meta.error}
			</div>
		</div>
	)
}