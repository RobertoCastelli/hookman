import React, { useContext } from "react"
import { ContextData } from "../context"

const Title = () => {
	const { title } = useContext(ContextData)
	return (
		<div>
			<p>{title}</p>
		</div>
	)
}

export default Title
