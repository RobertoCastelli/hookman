import React, { useContext } from "react"
import { ContextData } from "../context"

const GameMessage = () => {
	const { message } = useContext(ContextData)
	return (
		<div className='game-message'>
			<p>{message}</p>
		</div>
	)
}

export default GameMessage
