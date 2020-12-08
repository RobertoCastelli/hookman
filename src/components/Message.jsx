import React, { useContext } from "react"
import { ContextData } from "../context"

const Message = () => {
	const { handleTitle } = useContext(ContextData)

	return (
		<div>
			<p>guess the movie</p>
			<button onClick={handleTitle}>change</button>
		</div>
	)
}

export default Message
