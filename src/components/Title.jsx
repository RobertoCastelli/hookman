import React, { useContext } from "react"
import { ContextData } from "../context"

const Title = () => {
	const { generateWord } = useContext(ContextData)

	return (
		<div>
			<p>{generateWord()}</p>
		</div>
	)
}

export default Title
