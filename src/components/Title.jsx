import React, { useContext } from "react"
import { ContextData } from "../context"

const Title = () => {
	const { answer, generateWord } = useContext(ContextData)
	return (
		<div>
			<button onClick={() => generateWord()}>change</button>

			<p>{answer}</p>
		</div>
	)
}

export default Title
